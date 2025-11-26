# VASPにおけるWannier90と計算例

VASPのWannier90連携は、DFTで得たブロッホ状態から最局在ワニエ関数（MLWF）を構成し、電子構造をタイトバインディング（TB）表現として再利用するための実務的ワークフローである。材料科学では、バンド補間、軌道解析、輸送・トポロジー量の評価などに直結する道具立てである。

## 参考ドキュメント
- VASP Wiki: LWANNIER90（VASP–Wannier90インタフェースの要点と関連タグ）
  https://vasp.at/wiki/LWANNIER90
- Wannier90 Documentation（User guide / 入力パラメータとファイル形式）
  https://wannier90.readthedocs.io/en/latest/
- MateriApps LIVE!（日本語）：Wannier90（概要と導入、計算の流れ）
  https://ma.issp.u-tokyo.ac.jp/app/wannier90/


## 1. 何がうれしいか
Wannier化は「第一原理計算結果を、局在基底で扱える形式に変換する」操作である。これにより次がやりやすくなる。

- バンド補間（高密度k点のE(k)を低コストで再現）
  有効質量、フェルミ面、DOS、バンド交差の追跡などに有効である。
- 軌道像の獲得（化学結合・局在軌道の直観的理解）
  例：sp3結合、遷移金属のt2g/eg、酸化物のd–p混成などである。
- 物性計算の足場（TB上でのベリー曲率・異常ホール・分極など）
  Wannier90/postw90や周辺ツール（WannierTools等）に接続しやすい。
- 多体・モデル接続（DFT→TB→DMFT/模型解析）
  低エネルギー部分空間の定義が核心になる。

## 2. 基礎：ブロッホ状態からワニエ関数へ
ブロッホ状態 $|ψ_{m k}⟩$（mはバンド、kは波数）から、各格子点Rのワニエ関数 $|w_{n R}⟩$ を次で定義する。

$$
| w_{n\mathbf{R}} \rangle
= \frac{1}{N_k}\sum_{\mathbf{k}} e^{-i\mathbf{k}\cdot\mathbf{R}}
\sum_{m=1}^{N_b} U_{mn}(\mathbf{k}) \, | \psi_{m\mathbf{k}} \rangle
$$

ここで $U_{mn}(k)$ はkごとのユニタリ（あるいは、非直交部分空間を含む場合は等価なゲージ変換）であり、この自由度を選ぶことで「局在した」ワニエ関数を得る。

MLWFでは、広がり（spread）汎関数を最小化する。

$$
\Omega = \sum_{n=1}^{N_w} \left( \langle r^2 \rangle_n - |\langle \mathbf{r} \rangle_n|^2 \right)
$$

材料科学的には、$Ω$が小さいほど「結合や局在軌道として解釈しやすい基底」が得られやすい。

## 3. Wannier90が必要とする行列（VASPが与えるもの）
Wannier90は本質的に、以下の情報から$U_{mn}(k)$を最適化する。

- 近接k点間の重なり（overlap）行列
$$
M_{mn}^{(\mathbf{k},\mathbf{b})} = \langle u_{m\mathbf{k}} | u_{n,\mathbf{k}+\mathbf{b}} \rangle
$$
- 初期射影（initial projections）に対応する行列
$$
A_{mn}(\mathbf{k}) = \langle \psi_{m\mathbf{k}} | g_n \rangle
$$
  $g_n$ は原子軌道様の試行関数（例：$d_{xy}$, $sp3$ など）である。

VASPはLWANNIER90を有効にすると、wannier_setup（Wannier90のライブラリ）を介して、Wannier90実行に必要な入出力ファイル（.win, .mmn, .amn, .eig 等）を生成する設計である。事前に.w inを作っておく場合、k点設定の整合は利用者側で担保する必要がある（VASPは既存kpointsブロックの一致を検証しない点に注意が必要である）。

## 4. VASP–Wannier90の標準ワークフロー
現場での実務は、次の二系統が多い。

### 4.1 系統A：スタンドアロンWannier90で回す（デバッグしやすい）
1) VASPでSCF（構造最適化後でもよい）を実行する  
2) Wannier化に使う一様kメッシュとバンド数（NBANDS）を決める  
3) wannier90.winを用意し、wannier90.x -pp seedname で前処理する（近接k点情報などを準備する）  
4) VASPをLWANNIER90=.TRUE.で実行し、.mmn/.amn/.eig等を生成する  
5) wannier90.x seedname を実行し、MLWF最適化と必要な出力（バンド補間等）を得る  

この系統はファイルが揃うため、再現性とトラブル対応に強い。

### 4.2 系統B：VASP内部でWannier90を走らせる
LWANNIER90_RUNを用いると、VASPがライブラリモードでWannier90実行まで進める。スタンドアロンで再実行したい場合は、.mmn/.amnを書き出す設定（LWRITE_MMN_AMNなど）を明示しておくのが無難である。

## 5. 重要パラメータ設計
### 5.1 num_wann と num_bands（部分空間の定義）
- num_wann：作りたい有効軌道数（低エネルギー模型の次元）である
- num_bands：参照するDFTバンド数である（絡み合いがある場合は num_bands > num_wann が必要になりやすい）

金属やd帯がp帯と混成している系では、disentanglement（分離）窓の選び方が結果を支配する。

### 5.2 投影（初期値が収束品質を決める）
- 結晶化学に沿った投影（例：遷移金属d、酸素p、sp3結合など）を置くのが基本である
- 初期値が悪いと、Ωが大きい・中心が飛ぶ・補間が破綻する、が起こりやすい

### 5.3 窓（dis_win / dis_froz）の考え方
- $dis_froz_*$：厳密に再現したい低エネルギー帯域（凍結窓）である
- $dis_win_*$：候補として許す帯域（分離窓）である
経験則として、凍結窓は物性に直結する帯域（例：$E_F±数eV$）を狙い、分離窓は混成の状況を見て広めに取る設計になりやすい。

### 5.4 SOC・非共線・スピン量
SOC込みのWannier化では、スピン行列要素の出力（.spn）やスピノル設定が必要になる場合がある。VASP側・Wannier90側の双方で、非共線計算に対応した入出力になっているかを最初に確認するのが安全である。

## 6. 主要ファイルと役割（最低限）
|ファイル|生成元|役割|
|---|---|---|
|wannier90.win|利用者またはVASP|Wannier90の設定（num_wann, projections, 窓、バンド補間パス等）|
|wannier90.mmn|VASP|近接k点間の重なりM行列|
|wannier90.amn|VASP|投影A行列（初期射影）|
|wannier90.eig|VASP|DFTバンド固有値（補間の参照に使う）|
|wannier90.wout|Wannier90|最適化ログ（spreads、収束、中心、警告）|
|wannier90_hr.dat|Wannier90|実空間TBハミルトニアン（周辺ツール接続の要）|
|wannier90_band.dat 等|Wannier90|bands_plot出力（補間バンド）|
|wannier90.UNK*|VASP（任意）|ワニエ関数可視化などに使う波動関数出力|

## 7. 計算例：Siの価電子帯をWannier補間する（最小例）
狙いは、Siの価電子帯（sp3結合に対応）を4本のワニエ関数で表現し、DFTバンドを滑らかに補間することである。

### 7.1 DFT（SCF）設定例
- 構造：ダイヤモンドSi（2原子）を想定
- kメッシュ：例として 8×8×8 のΓ中心一様メッシュ
- 交換相関：PBEを想定（ここでは汎用性を優先する）

~~~ 
INCAR（SCFの一例）
SYSTEM  = Si SCF
ENCUT   = 520
EDIFF   = 1E-8
ISMEAR  = 0
SIGMA   = 0.05
IBRION  = -1
NSW     = 0
LREAL   = Auto
~~~

~~~ 
KPOINTS（例：一様メッシュ）
Automatic mesh
0
Gamma
8 8 8
0 0 0
~~~

### 7.2 Wannier90設定（wannier90.win の核）
ポイントは num_wann と projections である。disentanglementが不要な（あるいは軽い）ケースとして、価電子帯中心の設定にする。

~~~ 
wannier90.win（概念例）
num_wann  = 4
num_bands = 8

begin projections
Si:sp3
end projections

bands_plot = true
begin kpoint_path
G  0.0000 0.0000 0.0000  X  0.5000 0.0000 0.5000
X  0.5000 0.0000 0.5000  W  0.5000 0.2500 0.7500
W  0.5000 0.2500 0.7500  L  0.5000 0.5000 0.5000
L  0.5000 0.5000 0.5000  G  0.0000 0.0000 0.0000
end kpoint_path
~~~

実務上の注意として、mp_grid と kpoints ブロックはVASPがPOSCAR/KPOINTSに合わせて補う運用も可能であるが、既存ブロックがある場合に一致検証をしないため、混在は避けるのが無難である。

### 7.3 Wannier化用VASP実行（.mmn/.amn/.eigの生成）
~~~ 
INCAR（Wannier用の一例）
SYSTEM        = Si wannier interface
ENCUT         = 520
EDIFF         = 1E-8
ISMEAR        = 0
SIGMA         = 0.05

LWANNIER90    = .TRUE.
LWRITE_UNK    = .TRUE.

NBANDS        = 8
NUM_WANN      = 4
~~~

運用としては、SCFで得たCHGCARを流用し、非SCF的に波動関数を評価する形にすることが多い（混成が強い系ほど、参照バンド集合を安定に作る意図でこの分離運用が効く）。

### 7.4 成否判定
- wannier90.woutのspreads Ω が十分小さく、反復で収束しているか
- centers が結合中心や化学的に自然な位置にあるか（Siなら結合方向に対応しやすい）
- bands_plotの補間バンドが、DFTの価電子帯と一致しているか
一致しない場合、projectionsの見直し、num_bandsの増加、disentanglement窓の導入が第一選択である。

## 8. よくある問題と対処
- 症状：wannier90の実行がエラー、または補間が破綻する  
  対処：VASPで使った一様kメッシュと、wannier90.winのmp_grid/kpointsが一致しているかを最優先で確認する
- 症状：spreadsが大きい／中心が不自然に動く  
  対処：projectionsを結晶化学に合わせる（d系ならd軌道の向き、酸化物ならd–pをセットで入れる等）
- 症状：金属でE_F近傍が再現できない  
  対処：num_bandsを増やし、凍結窓と分離窓を設計する（dis_froz と dis_win）
- 症状：SOC込みで期待した量が出ない  
  対処：非共線設定とスピン行列要素出力（.spn）を含めて、VASP側・Wannier90側の前提を揃える

## まとめ
VASPにおけるWannier90連携は、第一原理バンドを局在基底へ変換して再利用するための実装であり、材料研究ではバンド補間・軌道理解・輸送やトポロジー量評価の接続点になる。実用上の鍵は、部分空間設計（num_wann/num_bands）、初期射影（projections）、およびk点整合と窓設計であり、ここを先に固めるほど安定に再現性の高いTB表現が得られるのである。
