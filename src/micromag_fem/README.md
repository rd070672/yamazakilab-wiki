# micromag_fem

3次元構造格子（Hex8固定）上で、LLGに基づくマイクロ磁気シミュレーションを行い、将来的に反磁界（長距離）と磁気弾性（弾性FEM）まで結合することを目的とした自作コードである。

## モデル
磁化は単位ベクトル場 $\mathbf{m}(\mathbf{x},t)$ とし、Landau–Lifshitz–Gilbert (LLG) 方程式で時間発展させる。
有効磁場 $\mathbf{H}_\mathrm{eff}$ はエネルギー密度 $w$ から導く。

- 交換相互作用  
  $$ w_\mathrm{ex}=A|\nabla \mathbf{m}|^2 $$
- 結晶磁気異方性（例：一軸）  
  $$ w_\mathrm{ani}=-K_u(\mathbf{m}\cdot \mathbf{u})^2 $$
- ゼーマン（外部磁場）  
  $$ w_\mathrm{Z}=-\mu_0 M_s\, \mathbf{H}_\mathrm{ext}\cdot \mathbf{m} $$
- 反磁界（将来追加）  
  $$ w_\mathrm{d}=-\frac{1}{2}\mu_0 M_s\, \mathbf{H}_\mathrm{d}\cdot \mathbf{m} $$
- 磁気弾性（将来追加）

## できること（現状）
- 3D構造格子上のLLG時間発展（交換＋異方性＋外場）
- エネルギー・トルク・正規化誤差のログ
- ステップ毎の出力（npz/VTKなど）

## 依存関係
- Python >= 3.10
- numpy
- scipy（疎行列ソルバを使う場合）
- matplotlib（解析用、任意）

## 実行
例：
- 設定ファイル：config.toml（またはyaml）
- 出力先：runs/ 以下

python main.py

## 設定（例）
- grid: Nx, Ny, Nz, dx, dy, dz
- material: A, Ku, Ms, alpha, gamma, u_axis
- field: Hext
- time: dt, n_steps, integrator
- output: dir, every, format

##出力
- runs/<run_name>/
  - state_000000.npz など（m, H, 付随場）
  - diagnostics.csv（エネルギー・トルク等）
  -（将来）vtk/（可視化用）

## examples
- examples/cube_relax: 単一磁区の緩和（交換＋外場）
- examples/domain_wall: 1D/3Dドメイン壁の緩和（異方性を含む）
- examples/magnetostriction: 磁気弾性連成の最小例（将来）

## 開発ロードマップ
- LLG最小核（交換＋外場）
- 異方性追加
- 反磁界（FFT/FEM）
- 弾性FEM（Hex8）
- 磁気弾性結合（更新スケジュールを含む）

## ライセンス
- 必要に応じて記載する。