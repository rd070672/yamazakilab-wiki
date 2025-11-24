# ASE を用いた MD 計算

## 参考にしたドキュメント
- ASE documentation
  - https://ase-lib.org/ase/md.html


## 概要
- ASE（Atomic Simulation Environment）は Python ベースの原子シミュレーション用フレームワークであり、
  - 構造生成・変換
  - 分子動力学（MD）
  - 最適化・遷移状態探索
  - 各種第一原理コード・古典ポテンシャルとの連携  
  を一貫して扱うための共通インターフェースを提供する。
- MD 計算では、ASE は
  - 「積分器（時間発展のアルゴリズム）」を提供し、
  - 「エネルギー・力」を外部計算コードや内蔵ポテンシャル（calculator）から取得する  
  という役割分担になっている。
- したがって、
  - **ポテンシャル（calculator）の選定**
  - **MD の条件（アンサンブル・温度・ステップ幅など）の設定**
  を ASE 上で明示的に行うことが重要である。

## ASE による MD の基本構造
- ASE の MD 計算の典型的な流れ
  - 1. `Atoms` オブジェクトで系の構造を定義する（POSCAR, CIF, XYZ などから読み込み可）。
  - 2. `calculator`（エネルギー・力を返すオブジェクト）を設定する。
  - 3. `VelocityVerlet`, `Langevin`, `NPTBerendsen` などの MD クラスを用いて積分器を構成する。
  - 4. ステップ数・ステップ幅・温度制御などを指定して `run()` する。
  - 5. 途中経過をトラジェクトリファイル（`.traj` / `.xyz` など）に保存し、解析・可視化する。

- 主な MD 積分器クラスの例
  - `ase.md.verlet.VelocityVerlet`（NVE 系の基本的な速度 Verlet 法）
  - `ase.md.langevin.Langevin`（Langevin 熱浴を用いた NVT）
  - `ase.md.nptberendsen.NPTBerendsen`（Berendsen バーシュタットによる NPT）
  - その他 Nose–Hoover 系なども一部実装・拡張されている。

## 代表的な calculator の種類
- 内蔵・簡易ポテンシャル
  - `EMT`（Effective Medium Theory）：金属用の簡易モデル（Ni, Cu, Pt など限定）。
  - `LennardJones`：単純な LJ ポテンシャル系。
  - 教育用・テスト用には便利だが、実材料の定量評価には適さないことが多い。
- 外部コードとの連携（例）
  - 第一原理系
    - `Vasp`, `QuantumEspresso`, `Gpaw` など。
    - 精度は高いが、AIMD になるため計算コストは非常に大きい。
  - 古典ポテンシャル・MD エンジン
    - `LAMMPS` 用 calculator（EAM, MEAM, ReaxFF などを LAMMPS 経由で利用）。
    - `LAMMPSlib` や `LAMMPS` インターフェースで ASE と連携。
  - 機械学習ポテンシャル
    - `MACE`, `M3GNet`, `NequIP` などの ML ポテンシャルに対応した calculator が、各プロジェクト側から提供されていることが多い。

## ASE による MD の典型的なコード構造（シンプルな例）
- 以下は、内蔵 EMT ポテンシャルを用いた NVT Langevin MD の最小例（イメージ）：

```python
from ase.build import bulk
from ase.calculators.emt import EMT
from ase.md.langevin import Langevin
from ase import units
from ase.md.velocitydistribution import MaxwellBoltzmannDistribution
from ase.io import Trajectory

# 1. 構造定義（例：アルミニウムのバルク）
  - atoms = bulk("Al", "fcc", a=4.05) * (3, 3, 3)  # 3x3x3 supercell

# 2. calculator を設定
  - atoms.calc = EMT()  # 実材料では EAM や LAMMPS などを使う方が良い

# 3. 初期速度の付与（目標温度 T）
  - T = 300  # K
  - MaxwellBoltzmannDistribution(atoms, temperature_K=T)

# 4. MD 積分器の設定（Langevin：NVT）
  - timestep = 1.0 * units.fs
  - friction = 0.02  # 1/fs 程度（経験的に選ぶ）
  - dyn = Langevin(atoms, timestep, temperature_K=T, friction=friction)

# 5. トラジェクトリ出力
  - traj = Trajectory("al_md.traj", "w", atoms)

def print_status(a=atoms, step=[0]):
    epot = a.get_potential_energy() / len(a)
    ekin = a.get_kinetic_energy() / len(a)
    temp = 2.0 * ekin / (3 * units.kB)
    print(f"Step {step[0]:5d}: T = {temp:7.2f} K, E_pot = {epot:8.3f} eV/atom")
    step[0] += 1

dyn.attach(print_status, interval=10)
dyn.attach(traj.write, interval=10)

# 6. MD 実行（ステップ数 N）
- dyn.run(5000)
```

- 上記はあくまで「構造 → calculator → 積分器 → 出力」の流れを示す簡易例であり、
- 実材料の精密計算には、適切なポテンシャル（EAM/ML/DFT 等）とパラメータを選ぶ必要がある。

## ASE での MD 計算フロー
- 系と目的の整理
  - 例：Fe–B アモルファスのメルトクエンチ、拡散係数の評価、格子欠陥の移動など。

- ポテンシャル・calculator の選定
  - まずは LAMMPS 等に存在する EAM, MEAM, ReaxFF などの候補を調査。
  - 既存ポテンシャルが不十分なら ML ポテンシャルや DFT AIMD を検討。

- 初期構造の準備
  - 結晶からのスーパーセル生成、ランダム配置、既存 CIF/POSCAR の読み込みなど。

- MD 条件の設定
  - アンサンブル：NVE, NVT, NPT のいずれか（温度・圧力制御が必要かどうか）。
  - 時間刻み：金属・共有結合系なら 1 fs 前後が一般的な目安。
  - 総ステップ数：目的（平衡化・拡散係数評価・メルトクエンチなど）に応じて決定。

- 平衡化と本番計算
  - 初期緩和（温度・体積の平衡化）と本番サンプリングを分ける。
  - 通常、最初の数 ps〜数十 ps は捨てて統計平均に使わない。

- 解析
  - ase.io.read で .traj を読み込み、配位数・RDF・MSD・エネルギー・温度の時間変化を解析。
  - 必要なら pandas / matplotlib / MDAnalysis などと連携。

## ASE MD の典型的な応用例
- 構造緩和・メルトクエンチ
  - 結晶を加熱 → 溶融 → 急冷してアモルファスモデルを生成。
  - 生成後に 0 K に近い温度で緩和して、RDF・配位数・局所構造を解析。

- 拡散係数・粘性の評価
  - MSD（Mean Square Displacement）から拡散係数を推定。
  - 長時間 NVT/NPT MD から輸送物性を取得。

- 欠陥ダイナミクス
  - 空孔・間隙原子・転位を含む構造で MD を行い、熱活性化による移動や相互作用を調べる。
- 第一原理 MD のラッパー
  - VASP/GPAW 等の calculator を接続し、少数原子・短時間の AIMD を実行。
  - 得られた構造から ML ポテンシャル学習用のデータを生成する用途にも使える。

## 注意点
- 単位系
  - ASE 内部ではエネルギーは eV、距離は Å を基本単位として扱うことが多い。
  - 時間は ase.units.fs などを用いて明示する。

- ポテンシャルの妥当性
  - 内蔵 EMT などはテスト用・教育用と割り切り、実際の材料研究では
  - 文献で検証されたポテンシャルや ML ポテンシャルを用いる。

- サンプルサイズと時間スケール
  - 有意味な拡散・相変態などを見たい場合、
  - 「系サイズ × シミュレーション時間」の両方が十分であるかを事前に見積もる。

- 再現性
  - 乱数シード（初期速度）や入力条件は明示的に記録する。
  - Git + Python スクリプトとしてワークフローを管理しておくと後から追跡しやすい。


---

#### Created: 2025-11-24