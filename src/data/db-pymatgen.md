# 材料データベース：pymatgen

## 参考ドキュメント

- pymatgen 公式ドキュメント
  - https://pymatgen.org/
- Materials Project API：Getting Started
  - https://docs.materialsproject.org/downloading-data/using-the-api/getting-started
- MateriApps: pymatgen を使った Materials Project のデータ収集
  - https://ma.issp.u-tokyo.ac.jp/app-post/2331


## 1. pymatgen とは何か

Pymatgen（Python Materials Genomics）は、材料の結晶構造・組成・物性データを扱うための Python ライブラリである。
特徴は次の3点。

- 構造データの標準表現（Structure / Lattice / Site / Composition）が強い
- VASP など第一原理計算の入出力（POSCAR/OUTCAR 等）とデータ分析が強い
- Materials Project などの材料データベースからデータ取得し、そのまま解析まで繋げやすい

材料DBを「ただの検索」に終わらせず、
取得 → 整形 → 指標計算（相安定性、距離、対称性、欠陥や相互作用の前処理）→ 可視化
までを一貫して行えるのが利点である。


## 2. 最小ワークフロー（DB → 構造 → 解析）

典型的な流れは次。

1) データベースから構造・計算結果を取得（例：Materials Project）
2) pymatgen の Structure として受け取る
3) 対称性・格子・組成・近接環境などを計算
4) 目的に応じて、相安定性（凸包）、欠陥計算の前処理、MD/DFT入力生成に進む


## 3. よく使うクラス

| クラス/モジュール | 何を表すか | 研究室での典型用途 |
|---|---|---|
| pymatgen.core.Structure | 周期系の結晶構造 | CIF/POSCAR読み書き、超胞、欠陥導入、置換 |
| pymatgen.core.Composition | 組成（元素比） | 組成比較、反応式、正規化、化学量論 |
| pymatgen.core.Lattice | 格子 | 格子定数、角度、変形（ひずみ） |
| pymatgen.symmetry | 対称性解析 | 空間群、対称操作、標準化セル |
| pymatgen.analysis.phase_diagram | 相図・凸包 | 形成エネルギー、Energy above hull、反応エネルギー |
| pymatgen.io.vasp | VASP I/O | POSCAR/INCAR/KPOINTS生成、OUTCAR/vasprun解析 |


## 4. Materials Project からの取得

Materials Project の新しいAPIクライアントは mp-api の MPRester を使う。
pymatgen の Structure などと自然に繋がる。

Python例（最小）

```python
from mp_api.client import MPRester

API_KEY = "ここに自分のAPI Key"

with MPRester(API_KEY) as mpr:
    # 例：Si（mp-149）の構造を取得
    structure = mpr.get_structure_by_material_id("mp-149")

print(structure)
print(structure.composition, structure.lattice)
```

よくある取得対象
- structure（結晶構造）
- efermi, band gap, density（サマリー物性）
- band structure / DOS（電子状態）
- elasticity（弾性テンソル、派生量）
- thermo（エネルギー、形成エネルギー、安定性指標など）

注意
- APIの仕様は更新されるため、公式の Getting Started と Examples を参照すること
- 古いクライアント（legacy）と新APIでは使い方とキーの扱いが異なる場合がある

## 5. 相安定性（熱力学安定性）と凸包（convex hull）

材料データベース（例：Materials Project）で表示される stable / metastable の多くは、0 K 近似のエネルギーに基づく相安定性評価（凸包）に由来します。ここでは、その意味と使い方を材料研究の実務目線で整理します。

### 5.1 形成エネルギー（formation energy）

元素 i の参照状態（通常は 0 K で最安定な結晶相）を基準に、化合物の安定性を表す基本量です。

化合物 A_a B_b ... の全エネルギーを E(A_aB_b...), 参照化学ポテンシャル（元素相のエネルギー）を μ_A, μ_B ... とすると、形成エネルギー（1原子あたり）は

E_f = [E(A_aB_b...) - a μ_A - b μ_B - ...] / (a + b + ...)

単位は eV/atom が一般的です。

注意点
- E は「同じ基準・同じDFT条件」で比較する必要があります（汎関数、U、磁気、SOC、カットオフなどが混ざると解釈が崩れます）。
- 参照相 μ_i は、多くのDBでは内部で一貫して定義されていますが、独自計算で再現するときは参照相の取り方を統一します。

### 5.2 凸包（convex hull）と thermodynamic stability

同一化学系（例：A–B、A–B–C）に存在する多くの化合物の形成エネルギーを、組成空間に配置して「最も低い面（下凸包）」を作ると、任意の組成で到達できる最小エネルギー（相分離も含む最安定状態）が定義できます。

二元系 A–B のイメージ
- 横軸：組成 x（例：Bの原子分率）
- 縦軸：形成エネルギー E_f
- 点：各化合物（A_x B_(1-x)）
- それらの点を結ぶ下側の包絡線が凸包
- 凸包上にある点は 0 K で熱力学的に安定
- 凸包より上の点は、より安定な相の混合へ分解する駆動力がある

### 5.3 Energy above hull（E_above_hull）

ある化合物の形成エネルギー E_f が、同じ組成での凸包エネルギー E_hull(x) からどれだけ上にあるかを

E_above_hull = E_f - E_hull(x)

で定義します（通常 eV/atom または meV/atom）。

解釈
- E_above_hull = 0：0 K で熱力学的に安定（凸包上）
- E_above_hull > 0：熱力学的には分解の駆動力がある（ただし実験的に得られる準安定相もある）

実務メモ（経験則）
- “小さい E_above_hull は合成されやすい” という傾向はありますが、閾値は系や条件に依存します。
- 薄膜、急冷、非平衡プロセス、欠陥、応力、サイズ効果が強い場合、0 K の凸包から外れていても実現することがあります。
- 逆に 0 に近くても、動力学的障壁が低くて分解しやすい場合もあります。

### 5.4 0 K エネルギーと有限温度（自由エネルギー）の違い

データベースの凸包は多くの場合、0 K の内部エネルギー（DFT エネルギー）に近い量で作られます。しかし実験は有限温度で行われるため、厳密にはギブズ自由エネルギー

G(T, P) = U + PV - TS

で相安定性が決まります。

有限温度で変わり得る要因
- 振動（フォノン）自由エネルギー
- 磁気（スピン）エントロピーや磁気相転移
- 配置エントロピー（固溶体、部分占有）
- 圧力・応力（薄膜のエピタキシャル応力など）

そのため、相安定性を議論するときは
- 0 K 凸包は第一のスクリーニング
- 最終的な判断は、温度・状態・プロセスを考慮した追加評価
という位置づけが現実的です。

### 5.5 pymatgenでの相安定性計算（最小の考え方）

pymatgen では PhaseDiagram を使って凸包を構成し、E_above_hull 等を計算できます。

概念コード（ entries は “組成とエネルギー” を持つエントリの集合）

```python
from pymatgen.analysis.phase_diagram import PhaseDiagram

# entries: ComputedEntry / PDEntry のリスト（各化合物の組成とエネルギー）
pd = PhaseDiagram(entries)

# あるエントリ entry の凸包からの距離（E_above_hull）
e_ah = pd.get_e_above_hull(entry)

# 組成 comp における凸包エネルギー（相分離を許した最安定）
hull_energy = pd.get_hull_energy(comp)  # 利用するpymatgen版で名称が異なる場合あり
```

6. Structure の読み書き（CIF と POSCAR を即変換）
Python例
```python
from pymatgen.core import Structure

# CIF -> Structure
s = Structure.from_file("sample.cif")

# Structure -> CIF
s.to(filename="out.cif")

# Structure -> VASP POSCAR
from pymatgen.io.vasp import Poscar
Poscar(s).write_file("POSCAR")
```

用途例
- データベース由来の CIF を、DFT入力（POSCAR）に落とす
- 最適化後の構造を CIF に戻して共有する
- スーパーセルを作って欠陥、界面、ランダム置換の前処理をする

## 7. Tips
- 単位と正規化
- energy は eV/atom、stress は GPa、magmom は μB など、目的に合わせて揃える
- エネルギーは「セル全体」か「原子あたり」かを混同しない
- データベース値は参照条件がある
- DFT 条件（汎関数、U、補正、磁気状態）に依存する
- 物性の絶対値より、相対比較・トレンド把握に向く場面が多い
- 安定性指標の解釈
- E_above_hull が小さくても、動力学的・合成的に実現しない場合はあり得る
- 逆に、準安定相が実験で得られることもある（プロセス依存）
- splitや再現性（研究室wikiに残す）
- 取得した material_id、検索条件、fields（どの物性を取ったか）
- 解析コードのバージョン（pymatgen / mp-api）
- 参照元素や補正の扱い（形成エネルギーの前提）