# COMSOL を用いた LLG 計算

#### 参考ドキュメント
- [Micromagnetic Simulation with COMSOL Multiphysics](https://www.comsol.com/blogs/micromagnetic-simulation-with-comsol-multiphysics)

---

## 概要
- COMSOL Multiphysics では、  
  **汎用 PDE インターフェース（General Form PDE / Coefficient Form PDE）** を用いることで  
  **Landau–Lifshitz–Gilbert (LLG) 方程式の有限要素法 (FEM) による時間発展計算** が可能である。
- 基本的な考え方は、
  - 空間 → FEM（任意形状メッシュ）
  - 時間 → 時間依存 PDE ソルバ（Time Dependent）
  - 変数 → 磁化の 3 成分 $m_x, m_y, m_z$
  として扱い、LLG をベクトル PDE として実装する。

---

## LLG 方程式の基本式

- 単位磁化ベクトル $\mathbf{m}=(m_x,m_y,m_z)$, $|\mathbf{m}|=1$、  
  有効磁場 $\mathbf{H}_\text{eff}$ と Gilbert 減衰 $\alpha$ を含む LLG：
  $$
    \frac{d\mathbf{m}}{dt}
    = -\gamma\,\mathbf{m}\times\mathbf{H}_\text{eff}
      + \alpha\,\mathbf{m}\times\frac{d\mathbf{m}}{dt}
  $$
- 数値実装しやすい形へ変形（Gilbert 形式を明示的に解いて）：
  $$
    (1+\alpha^2)\frac{d\mathbf{m}}{dt}
    = -\gamma\,\mathbf{m}\times\mathbf{H}_\text{eff}
      -\alpha\gamma\,\mathbf{m}\times(\mathbf{m}\times\mathbf{H}_\text{eff})
  $$
- 有効磁場 $\mathbf{H}_\text{eff}$ は、エネルギー汎関数 $F$ から
  $$
    \mathbf{H}_\text{eff}
    = -\frac{1}{\mu_0 M_s}\frac{\delta F}{\delta \mathbf{m}}
  $$
  として与えられ、  
  実装上は「交換場＋異方性＋外部磁場（＋静磁場など）」の和として定義する。

## COMSOL での実装方針（概念）

### 1. 変数の選択
- 依存変数：  
  $$
    m_x(x,y,z,t),\ m_y(x,y,z,t),\ m_z(x,y,z,t)
  $$
- 制約 $|\mathbf{m}|=1$ は、以下のいずれかで扱う：
  - 時間発展中に $|\mathbf{m}|\neq 1$ になったら後処理で正規化する近似
  - 弱形式や追加の拘束式（ペナルティ項など）を導入する方法  
  （厳密な扱いは難しいため、研究目的に応じて選択）

### 2. 有効磁場の構成
- 最初は簡単なモデルから（例）：
  - 交換エネルギー：
    $$
      F_\text{ex} = A|\nabla\mathbf{m}|^2
    $$
    → $\mathbf{H}_\text{ex} \propto \nabla^2\mathbf{m}$
  - 一軸異方性：
    $$
      F_\text{ani} = -K_u(\mathbf{m}\cdot\mathbf{e}_u)^2
    $$
    → $\mathbf{H}_\text{ani} \propto (\mathbf{m}\cdot\mathbf{e}_u)\,\mathbf{e}_u$
  - 外部磁場：
    $$
      \mathbf{H}_\text{ext}(t)
    $$
- COMSOL 内では、
  - `m_x, m_y, m_z` の空間微分 `d(m_x,x)`, `d(m_x,y)` などを使って $\nabla^2\mathbf{m}$ を表現。
  - 異方性・外部磁場は式表現で直接記述。

### 3. PDE インターフェース
- 代表的な選択：
  - General Form PDE（General Form）：
    $$
      ea \frac{\partial^2 u}{\partial t^2}
      + d \frac{\partial u}{\partial t}
      + \nabla\cdot\left(-c\nabla u - \alpha u\right)
      + \beta\cdot\nabla u
      + a u = f
    $$
  - ここで $u \rightarrow m_x, m_y, m_z$ を 3 成分としてそれぞれ設定し、  
    LLG の右辺を `f`（もしくは `d` と `f` の組み合わせ）として実装する。
- 単純化として、2 次時間微分項は用いず $ea=0$、拡散項（交換）を `c∇u` で表す。


## 典型的なセットアップ手順

1. **モデルの新規作成**
   - 3D あるいは 2D モデルを選択。
   - Global Definitions で $\gamma, \alpha, M_s, A, K_u$ などの定数を定義。

2. **ジオメトリ・メッシュの作成**
   - 計算対象の形状（薄膜、ワイヤ、ドットなど）を作成。
   - 必要に応じてメッシュを細かく（交換長や磁区幅より十分細かく）。

3. **PDE インターフェース（General Form PDE）の追加**
   - 依存変数として `m_x, m_y, m_z` を設定。
   - 時間依存（Time Dependent）スタディを追加。

4. **方程式の実装**
   - 右辺 `f_x, f_y, f_z` として
     $$
       f_x = \frac{1}{1+\alpha^2}\left[ -\gamma (m \times H_\text{eff})_x - \alpha\gamma (m \times (m\times H_\text{eff}))_x \right]
     $$
     などを COMSOL の式で記述（`mx`, `my`, `mz` に対応）。
   - 交換場・異方性場・外部磁場を H_eff の成分として定義。
   - 交換項は `c` 行列を用いることで拡散型項として扱うことも可能（`c = 2*A/(mu0*Ms)` など）。

5. **初期条件の設定**
   - `m_x, m_y, m_z` の初期値として、  
     一様状態、磁壁状態、ランダムノイズなどを与える。

6. **境界条件**
   - 多くの場合、磁化に対する「自然境界条件」（表面で法線微分が 0）で良いが、  
     特殊な固定磁化境界が必要な場合は Dirichlet 条件で `m_x,m_y,m_z` を固定する。

7. **時間依存解析の実行**
   - Time Dependent で解析時間・時間刻みの最大値を設定（例：0〜数 ns）。
   - 収束が悪い場合はステップを細かく・ソルバ設定を調整。

8. **ポストプロセス・解析**
   - 磁化ベクトルの分布（ベクトルプロット・矢印・ストリームライン）を可視化。
   - 体積平均磁化 $\langle m_x\rangle,\langle m_y\rangle,\langle m_z\rangle$ の時間変化から FMR 応答などを解析。
   - 特定断面のスナップショットを抜き出して磁区構造を観察。

## COMSOL LLG 計算の利点と注意点

### 利点
- **任意形状の FEM**  
  → 複雑な形状・穴あき構造・異方性材料にも柔軟に対応できる。
- **マルチフィジックス連成**  
  → 熱伝導、弾性、電流分布、圧電・圧磁などと直接連成可能。  
  （磁気弾性・マグノン–フォノン連成、電流駆動 LLG、温度依存 LLG など）
- **GUI ベース**  
  → PDE の構造を可視的に確認しながらモデルを構築できる。

### 注意点
- **実装の手間**
  - mumax3 のような「LLG 専用コード」と比べると、  
    LLG を自分で PDE として書く必要があり、式のミスに注意。
- **計算コスト**
  - FEM ＋ マルチフィジックス → セル数が増えると計算時間も増大。  
    GPU LLG コードほど高速ではないことが多い。
- **正規化制約**
  - $|\mathbf{m}|=1$ の保持は数値的に崩れやすいので、  
    事後正規化やペナルティ項などで補正が必要なことがある。

## 応用例
- FMR シミュレーション：
  - 薄膜にバイアス磁場＋微小 AC 磁場を印加し、平均磁化の時間応答をフーリエ変換。
- 電流・温度連成：
  - ACDC モジュールや Heat Transfer と結合し、
    電流・発熱・温度勾配の下での LLG ダイナミクスを解析。
- 磁気弾性 LLG：
  - Solid Mechanics や Piezoelectric Devices と連成し、  
    磁歪・応力駆動での磁化応答を FEM ベースで評価。

