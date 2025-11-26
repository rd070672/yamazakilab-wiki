# Kubo–Greenwood 法と線形応答理論による輸送特性計算

## 参考ドキュメント

- 京都大学 計算物性物理講義資料「電気伝導の第一原理計算（Kubo–Greenwood 法）」解説スライド  
  https://www.math.kyoto-u.ac.jp/~tanaka/solid-state/kubo-greenwood.html

- 東北大学 金属材料研究所 量子材料理論グループ「線形応答理論の基礎」講義ノート（物性理論）  
  https://www.imr.tohoku.ac.jp/education/linear-response.html

- OpenMX 日本語マニュアル「電気伝導率と Kubo–Greenwood 公式の利用」  
  http://www.openmx-square.org/openmx_man_jp/node215.html

## 1. 線形応答理論とは何か

- 外場が十分小さいとき、物質の応答（電流・磁化・比熱など）は外場に比例（線形） する。
- 久保亮五（1957）により一般形式が確立された。
- 基本的な考え方：

$$
\text{応答} = \int_0^\infty \Phi(t) \, F(t)\, dt
$$

ここで  
- $F(t)$：外部摂動（例：電場）  
- $\Phi(t)$：相関関数（物質が持つ「ゆらぎ」の性質）

→ 「平衡ゆらぎ」から非平衡応答を計算する理論である点が本質。


## 2. Kubo–Greenwood 法とは

### 2.1 位置づけ

- 久保の一般線形応答理論を電子輸送（導電率）に具体化した式。
- Greenwood（1958–1959）が導出したため Kubo–Greenwood と呼ばれる。

### 2.2 何が計算できるか

- 周波数依存光学伝導率 $\sigma(\omega)$
- DC 電気伝導率 $\sigma_{\text{DC}}$
- 反射率・吸収係数・誘電関数 $\varepsilon(\omega)$

→ DFT（VASP, OpenMX, WIEN2k, ABINIT など）で一般的に実装されている。


## 3. 基本式のイメージ

$$
\sigma(\omega) =
\frac{2\pi e^2}{3m^2\Omega \omega}
\sum_{n,m,\mathbf{k}}
\left(f_{n\mathbf{k}} - f_{m\mathbf{k}}\right)
\left| \langle n\mathbf{k} | \mathbf{p} | m\mathbf{k} \rangle \right|^2
\delta(E_{m\mathbf{k}} - E_{n\mathbf{k}} - \hbar\omega)
$$

意味：

- 占有数差 $f_{n\mathbf{k}} - f_{m\mathbf{k}}$：電子が動けるか  
- 行列要素 $\langle n|p|m \rangle$：遷移の強さ  
- δ関数：エネルギー保存  
- すべての状態を足し合わせることで輸送応答が得られる

→ 「電子遷移の総和として導電率を求める」という発想。


## 4. DC伝導率との関係

$$
\sigma_{\text{DC}} = \lim_{\omega \to 0} \sigma(\omega)
$$

注意点：

- 完全結晶では散乱が無いため形式上 $\sigma_{\text{DC}}\to\infty$
- 実際には
  - 有限寿命（ブロードニング）
  - 不規則性・温度ゆらぎ・欠陥
  を取り入れて有限の値を得る


## 5. どんな材料系に向くか

### 特に有効
- アモルファス金属・ガラス
- 高温液体（金属溶融状態）
- 欠陥・乱れが支配的な系
- AIMD からサンプリングした構造の平均伝導率

→ 結晶性が弱いほどメリットが大きい。

### 注意が必要
- 完全金属結晶 → ボルツマン輸送方程式の方が一般的  
  （散乱機構を明示的に扱える）


## 6. 実際の計算フロー（DFT + Kubo–Greenwood）

1. 構造サンプリング  
   - 例：AIMD で液体・アモルファス・高温状態を取得
2. 固有状態の計算（DFT）
3. 遷移行列要素を評価
4. $\sigma(\omega)$ を算出
5. 温度平均・スナップショット平均
6. 必要に応じて DC 伝導率に外挿


## 7. ソフトウェアでの実装例

### VASP
- `LOPTICS = .TRUE.`  
- `LEPSILON` により光学応答を計算  
- Kubo–Greenwood 型の光学導電率が出力可能

### OpenMX
- `Kubo-Greenwood` モードあり  
- 直接電気伝導率を評価できる  
  （参考：OpenMX マニュアル 第 215 節）

### WIEN2k / ABINIT / QE
- optical conductivity モジュールとして利用可能


## 8. 解析上の注意点

- k 点密度・バンド数の収束が重要  
- フェルミ面近傍の精度が支配的  
- アモルファスの場合は複数スナップショット平均が必須
- 過度なブロードニングは人工的に DC を変化させる


## 9. 材料インフォマティクスとの接点

- DFT + AIMD → Kubo–Greenwood により  
  輸送係数（σ, ρ, ε(ω)）をデータ化
- 特徴量化できる指標：
  - フェルミレベル DOS
  - 局所環境（配位数・RDF）
  - 電子散乱強度
- 応用例：
  - アモルファス軟磁性合金の渦電流損失モデル化  
  - 液体金属の熱輸送設計  
  - 組成依存の電気抵抗最適化


## 10. まとめ

- 線形応答理論：外場に対する応答を相関関数から導く一般理論  
- Kubo–Greenwood：電子輸送（導電率）の具体式として最も広く使われる
- 特にアモルファス・液体・高温乱雑系に強い
- DFT + AIMD と組み合わせることで実験比較可能な輸送特性を得られる

