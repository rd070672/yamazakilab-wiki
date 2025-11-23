# Cahn–Hilliard 法に基づくフェーズフィールド計算例
作成日：2025年11月23日

## 概要
- Cahn–Hilliard 方程式は、**「全量が保存されるスカラー場」**（濃度場など）の時間発展を記述する代表的なフェーズフィールド方程式である。
- スピノーダル分解、析出による相分離、ナノスケール組成ゆらぎの粗視化など、**濃度拡散と相分離が同時に起こる現象**を扱う。
- ここでは、2 成分合金 A–B の濃度場 \(c(\mathbf{r}, t)\) を例として、
  - 自由エネルギー汎関数の設定
  - Cahn–Hilliard 方程式の形
  - 2D 有限差分によるスピノーダル分解シミュレーション
  の流れを整理する。

## モデル設定（2 成分合金の濃度場）
- 濃度場 \(c(\mathbf{r}, t)\)：
  - 0 ≤ \(c\) ≤ 1 を想定し、「局所 B 成分濃度」または「モル分率」とみなす。
  - \(c \approx c_A\)：A に富む相、\(c \approx c_B\)：B に富む相。
- 初期条件の典型例：
  - 計算領域全体に平均濃度 \(c_0\)（スピノーダル領域内）を与え、
  - その周りに小さな乱れ（ノイズ）を重ねる：
    \[
      c(\mathbf{r}, 0) = c_0 + \delta c(\mathbf{r})
    \]
  - ノイズ \(\delta c\) は、例えば一様乱数やガウス乱数で ±0.01 程度。

## 自由エネルギー汎関数
- Cahn–Hilliard 方程式の駆動力は、濃度場に対する自由エネルギー汎関数から得られる。
- 一般形：
  \[
    F[c] = \int_\Omega \left(
      f_\text{chem}(c)
      + f_\text{grad}(\nabla c)
    \right)\, dV
  \]
- 化学自由エネルギー密度 \(f_\text{chem}\) の典型例（二重井戸ポテンシャル）：
  \[
    f_\text{chem}(c) = W\,c^2(1-c)^2
  \]
  - \(W > 0\)：相分離を駆動するエネルギーバリアの高さ。
  - \(c \simeq 0\) と \(c \simeq 1\) が安定井戸、\(c \simeq 0.5\) が不安定。
- 勾配エネルギー：
  \[
    f_\text{grad}(\nabla c) = \frac{\kappa}{2}|\nabla c|^2
  \]
  - \(\kappa > 0\)：界面エネルギー・界面幅に対応するパラメータ。
  - 濃度の急激な変化（界面）にエネルギーコストを与え、有限幅の界面を形成する。

## Cahn–Hilliard 方程式
- 化学ポテンシャル \(\mu\)：
  \[
    \mu = \frac{\delta F}{\delta c}
        = \frac{\partial f_\text{chem}}{\partial c} - \kappa \nabla^2 c
  \]
  - 上記の \(f_\text{chem}\) では：
    \[
      \frac{\partial f_\text{chem}}{\partial c}
      = 2W\,c(1-c)(1-2c)
    \]
- 拡散フラックスと保存則：
  \[
    \mathbf{J} = -M \nabla \mu,
    \quad
    \frac{\partial c}{\partial t} = -\nabla \cdot \mathbf{J}
    = \nabla \cdot \left( M \nabla \mu \right)
  \]
  - \(M \ge 0\)：拡散モビリティ。
- したがって Cahn–Hilliard 方程式：
  \[
    \frac{\partial c}{\partial t}
    = \nabla \cdot \left[
        M \nabla
        \left(
          2W\,c(1-c)(1-2c) - \kappa \nabla^2 c
        \right)
      \right]
  \]
- 特徴：
  - 4 階の空間微分（\(\nabla^4 c\)）を含む拡散型 PDE。
  - 時間発展中も \(\int_\Omega c\,dV\)（全濃度）が保存される。

## 2D 有限差分によるスピノーダル分解の計算例

### 格子と境界条件
- 領域：2D 正方領域 \(\Omega = [0,L] \times [0,L]\)。
- 離散化：\(N_x \times N_y\) 格子（\(\Delta x = L/N_x\), \(\Delta y = L/N_y\)）。
- 境界条件：周期境界条件 (Periodic Boundary Condition, PBC)。

### 初期条件
- 平均濃度 \(c_0\)（スピノーダル領域内の値）を設定。例：\(c_0 = 0.5\)。
- 各格子点で：
  \[
    c_{ij}(0) = c_0 + \epsilon_{ij}, \quad |\epsilon_{ij}| \ll 1
  \]
  - \(\epsilon_{ij}\)：小さな乱数（例：一様分布 [-0.01, 0.01]）。

### ラプラシアンの離散化
- 2 次精度中心差分：
  \[
    (\nabla^2 c)_{ij}
    \approx \frac{
      c_{i+1,j} + c_{i-1,j}
      + c_{i,j+1} + c_{i,j-1}
      - 4c_{ij}
    }{\Delta x^2}
  \]
- 周期境界のため、添字はモジュロ \(N_x, N_y\) でラップさせる。

### 化学ポテンシャルと時間発展
1. 濃度場 \(c_{ij}^n\) から化学ポテンシャルを計算：
   \[
     \mu_{ij}^n = 2W\,c_{ij}^n(1-c_{ij}^n)(1-2c_{ij}^n)
                  - \kappa (\nabla^2 c)^n_{ij}
   \]
2. \(\mu_{ij}^n\) のラプラシアンを計算：
   \[
     (\nabla^2 \mu)^n_{ij}
     \approx \frac{
       \mu_{i+1,j}^n + \mu_{i-1,j}^n
       + \mu_{i,j+1}^n + \mu_{i,j-1}^n
       - 4\mu_{ij}^n
     }{\Delta x^2}
   \]
3. Cahn–Hilliard 方程式（陽解法の例）：
   \[
     c_{ij}^{n+1}
     = c_{ij}^n + \Delta t\, M (\nabla^2 \mu)^n_{ij}
   \]
- ただし、Cahn–Hilliard の陽解法は非常に厳しい安定性制約があるため、実用上は
  - 半陰解法
  - スペクトル法（FFT を用いた semi-implicit Fourier-spectral scheme）
  がよく使われる。

### 時間発展と観察量
- ステップ \(n = 0,1,2,\dots\) について上記計算を繰り返し、濃度場 \(c(\mathbf{r}, t_n)\) の時間発展を得る。
- 観察量の例：
  - 濃度マップ：\(c(\mathbf{r}, t)\) をカラーマップで可視化 → ドメイン構造（A 相・B 相のネットワーク）の形成を見る。
  - 自己相関・構造因子：
    - 二点相関関数 \(C(\mathbf{r}) = \langle c(\mathbf{r}_0)c(\mathbf{r}_0 + \mathbf{r})\rangle\)
    - そのフーリエ変換である構造因子 \(S(\mathbf{k})\) を計算し、ピーク位置からドメインサイズを求める。
  - ドメインサイズの時間スケーリング：
    - 特徴長さ \(R(t)\) が \(R(t) \sim t^n\)（典型的には \(n \approx 1/3\)）で成長することが多い。

## 実務上のポイント
- 界面幅と格子分解能
  - 界面幅に対して 5〜8 メッシュ程度の分解能を確保すると、界面形状やエネルギーが安定して表現できる。
- 数値スキームの選択
  - 4 階 PDE のため、陽解法では時間刻み Δt を極端に小さくする必要がある。
  - 実務では、semi-implicit 法＋FFT を組み合わせたスキームが広く使用される。
- 濃度保存の確認
  - 計算途中で \(\sum_{ij} c_{ij}\) が一定（初期値）に保たれているかを定期的にチェックする。
- パラメータの物理的意味
  - \(W\)：相分離の駆動力（自由エネルギー障壁の高さ）。
  - \(\kappa\)：界面エネルギーと界面幅を支配。
  - \(M\)：実効拡散係数（濃度変化の速度）。
  - 実材料に適用する際には、実験・第一原理・MD からこれらを推定してスケール対応を取ることが重要である。
