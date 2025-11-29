---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Wiki"
  text: "tyamazaki" #"Yamazaki Lab"
  tagline: # 国立大学<br>材料工学
  actions:
    - theme: brand
      text: Website
      link: / # https://tyamazaki.com/

    - theme: alt
      text: Github
      link: / # https://github.com/rd070672/yamazakilab-wiki

features:
  - title: 計算
    details: 第一原理計算・数値計算・スパコン計算を軸に、環境構築から数値解法、解析例までを紹介します。材料物性の理解とデータ駆動解析につながる計算科学の基礎をまとめます。

  - title: 実験
    details: 材料合成・熱処理・プロセス制御から、磁気計測・放射光解析までを整理します。再現性を高める手順や装置運用のコツなど、実験で役立つ知見を共有します。

  - title: データサイエンス
    details: 機械学習・統計解析・深層学習、機械学習ポテンシャルなど、材料データ解析に必要な手法を扱います。材料応用の実例と実装、モデル解釈の勘所をまとめます。

---


## 計算 {#計算}
第一原理計算・数値計算・スパコン計算を軸に、環境構築から数値解法、解析例までを紹介します。材料物性の理解とデータ駆動解析につながる計算科学の基礎をまとめます。

### 第一原理計算
- [量子力学入門とシュレーディンガー方程式](/calc/dft-basis.md)
- [第一原理計算の基本原理](/calc/dft.md)
- [バンドアンフォールディング](/calc/dft-unfolding.md)
- [ワニエ関数と局在軌道](/calc/dft-wannier.md)
- [応答理論入門](/calc/response-theory.md)
- [摂動論の基礎と応用](/calc/perturbation.md)
- [密度汎関数摂動論](/calc/dfpt.md)
- [時間依存密度汎関数理論（TDDFT）](/calc/dft-td.md)
- [第一原理計算を支える数値解法](/calc/dft-calc.md)
- [第一原理計算ソフトウェアと特徴](/calc/dft-software.md)
<!-- - [VASP のインストールメモ](/calc/vasp-install.md) -->
- [VASPによる金属・磁性体の第一原理計算](/calc/vasp-dft.md)
- [VASPにおける仮想結晶近似](/calc/vasp-vca.md)
- [VASPKIT の活用ノート](/calc/vaspkit.md)
- [Phonopy によるフォノン計算](/calc/phonopy.md)
- [MAELAS による磁気弾性効果の計算](/calc/maelas.md)
- [Bader電荷解析](/calc/bader-charge-analysis.md)
<!-- - [Wien2k のインストールメモ](/calc/wien2k-install.md) -->
- [Wien2k の計算例](/calc/wien2k.md)
- [グリーン関数と KKR法](/calc/kkr.md)
- [線形応答理論とKubo–Greenwood法](/calc/kkr-kubo.md)
- [非平衡グリーン関数（NEGF）で理解する量子輸送](/calc/negf.md)
<!-- - [Akai-KKR のインストールメモ](/calc/akaikkr-install.md) -->
- [Akai-KKR の計算例](/calc/akaikkr.md)
<!-- - [SPR-KKR のインストールメモ](/calc/sprkkr-install.md) -->
- [SPR-KKRによる磁性計算](/calc/sprkkr.md)
- [Ju-KKRによる局所電子状態計算](/calc/jukkr.md)
- [TOMBOによる全電子混合基底法](/calc/tombo.md)

- [非調和フォノン理論が拓く有限温度物性](/calc/self-consistent-phonon.md)
- [マグノン-フォノン相互作用の計算](/calc/magnon-phonon.md)
- [ベリー位相とトポロジカル応答の計算](/calc/berry.md)
- [実時間TDDFTに基づく量子電子動力学法（QED法）の原理と活用](/calc/qed.md)
- [虚数時間発展法（ITE）の基礎](/calc/dft-imarginary.md)
- [核量子効果（NQE）を扱う第一原理計算](/calc/nuclear-quantum-effects.md)
- [格子ボルツマン法（LBM）入門](/calc/lattice-boltzmann-method.md)
- [格子QCDシミュレーション入門](/calc/lattice-qcd.md)
- [カオス理論と非線形ダイナミクス](/calc/chaos.md)


### 第一原理分子動力学計算
- [第一原理分子動力学（AIMD）の原理](/calc/aimd.md)
- [アモルファス計算のためのAIMD活用](/calc/aimd-amorphous.md)
- [距離秩序で読み解くアモルファス](/calc/amorphous.md)
- [アモルファスの構造解析手法](/calc/amorphous-analysis.md)

### 第一原理フェーズフィールド計算
- [第一原理計算に基づくフェーズフィールド計算](/calc/dft-pf.md)

### 熱力学計算
- [CALPHAD法（計算熱力学）による状態図・相平衡予測](/calc/calphad.md)
- [状態図の読み方](/calc/phase-diagram.md)
- [ランダウ理論と自由エネルギー](/calc/landau.md)

### 分子動力学計算
- [MD の原理](/calc/md.md)
- [MD の数値解法](/calc/md-calc.md)
- [MD 計算における原子間ポテンシャル選定](/calc/md-potential.md)
- [MD 計算と機械学習](/calc/md-machine-learning.md)
<!-- - [LAMMPS のインストールメモ](/calc/md-lammps-install.md) -->
- [LAMMPS による分 MD 計算](/calc/md-lammps.md)
- [ASE・JAX による MD 計算](/calc/md-ase-jax.md)

### モンテカルロ計算
- [モンテカルロ計算の原理と系統](/calc/mc.md)
- [モンテカルロ法の数値解法](/calc/mc-calc.md)
- [密度行列繰り込み群法](/calc/density-matrix.md)
- [クラスター展開モデル](/calc/mc-cluster.md)
- [原子論的スピンモデル](/calc/atomic-spin-model.md)
- [テンソルネットワーク入門](/calc/tensor-network.md)
- [マルコフ連鎖モンテカルロ法](/calc/mcmc.md)
- [逆モンテカルロ法](/calc/mc-inverse.md)
- [運動論的モンテカルロ法](/calc/mc-kinetic.md)
- [量子モンテカルロ法](/calc/mc-quantum.md)
- [量子アニーリング](/calc/quantum-annealing.md)
- [グランドカノニカルモンテカルロ法](/calc/mc-grand-canonical.md)
- [レプリカ交換モンテカルロ法](/calc/mc-exchange.md)
- [MC 計算による磁性体の計算例](/calc/mc-mag.md)
- [REMCによるスピングラス解析](/calc/spin-glass.md)

### フェーズフィールド計算
- [フェーズフィールド計算の原理](/calc/pf.md)
- [フェーズフィールド法の数値解法](/calc/pf-calc.md)
- [Allen–Cahn 法で記述する金属組織シミュレーション](/calc/pf-allen-cahn.md)
- [Cahn–Hilliard 方程式で記述する金属組織シミュレーション](/calc/pf-cahn-hilliard.md)
- [デンドライト成長のフェーズフィールドシミュレーション](/calc/dendrite.md)
- [Phase-Field Crystal（PFC）法の理論](/calc/phase-field-crystal.md)

### マルチフィジックス計算
- [有限差分法の原理と数値解法](/calc/fdm.md)
- [有限要素法の原理](/calc/fem.md)
- [有限要素法の数値解法](/calc/fem-calc.md)
- [ガウス・ザイデル法](/calc/fem-gauss-seidel.md)
- [常微分方程式 (ODE)と偏微分方程式 (PDE) の基礎](/calc/ode-pde.md)
- [ボロノイ分割法](/calc/volonoi.md)
- [LLG方程式に基づくマイクロ磁化シミュレーション](/calc/llg.md)
- [反磁界（長距離相互作用）の数値解法](/calc/demag-calc.md)
- [マクスウェル方程式に基づく電磁界解析](/calc/maxwell.md)
- [動く磁壁が誘起する局所渦電流](/calc/eddy-current.md)
- [弾塑性構成モデルの基本方程式](/calc/elasto-plasticity.md)
- [磁気弾性効果の基本方程式と定式化](/calc/magneto-elasticity.md)
<!-- - [mumax3 のインストールメモ](/calc/mumax3-install.md) -->
- [mumax による LLG マイクロ磁化・磁気弾性シミュレーション](/calc/mumax3-llg.md)
<!-- - [COMSOL Multiphysics のインストールメモ](/calc/comsol-install.md) -->
- [COMSOL を用いた LLG 計算と連成解析](/calc/comsol-llg.md)
- [離散化とスケーラブル解法](/calc/scalable.md)

- [有限要素法によるマイクロマグ計算の自作コード](/calc/fem-llg.md)
- [反磁界（静磁界）計算手法の検討](/calc/demag-compare.md)
- [3次元線形弾性のHex8有限要素ソルバ](/calc/fem-solver.md)

## 実験 {#実験}
材料合成・熱処理・プロセス制御から、磁気計測・放射光解析までを整理します。再現性を高める手順や装置運用のコツなど、実験で役立つ知見を共有します。

### 材料合成
<!-- - 多元スパッタ装置
- PLD
- MBE -->

### 熱処理・試料加工
<!-- - 赤外線ランプ炉
- フォトリソグラフィ
- 電子線リソグラフィ (EBL)
- ドライエッチング / ウェットエッチング
- ワイヤーボンディング・パッケージング -->

### 磁気計測
<!-- - バルクハウゼンノイズ計測装置 (MBN)
- 振動試料型磁力計 (VSM)
- 磁気特性測定システム (MPMS)
- 磁気光学カー効果顕微鏡　(MOKE) -->

### 構造・化学状態解析
<!-- - X線回折装置 (XRD)
- X線光電子分光法 (XPS)
- 集束イオンビーム加工観察装置 (FIB-SEM)
- 電子後方散乱回折 (EBSD)
- 透過電子顕微鏡 (TEM)
- 5D-STEM -->

### 汎用機器・治具設計
<!-- - 3Dプリンター
- アルミフレーム設計
- DAQ (Data Acquisition) ボード
- 回路設計 -->

### 放射光施設
<!-- - [放射光の基礎](/exp/sr.md)
- [放射光の光学設計の基礎](/exp/sr-optics.md)
- [軟X線と硬X線の基礎](/exp/sr-soft-hard.md)
- SPring-8の申請と実験準備
  - [XMCDの基礎](/exp/sr-xmcd.md)
  - BL25SU XMCD (X線磁気円二色性)
  - [PEHの基礎](/exp/sr-peh.md)
  - BL25SU PEH (光電子ホログラフィー)
  - [XAFSの基礎](/exp/sr-xafs.md)
  - BL14B2 in-situ XAFS/XRD
- KEK(PF)申請と実験準備
  - BL9C XAFS
- NanoTerasuの申請と実験準備
  - [HAXPESの基礎](/exp/sr-haxpes.md)
  - BL09U HAXPES -->



## データサイエンス {#データサイエンス}
機械学習、統計解析、深層学習、機械学習ポテンシャルなど、材料データ解析に必要な手法を扱います。材料応用の実例と実装、モデル解釈の勘所をまとめます。

### 統計量・特徴量
- [統計学入門](/data/statistics.md)
- [ベイズ統計入門](/data/bayes.md)
- [時系列解析](/data/temporal.md)
- [スペクトル解析](/data/spectral.md)
- [直積・アダマール積](/data/product.md)
- [パーシステントホモロジー (PH))](/data/persistent.md)

### 材料データベース
- [Materials Project（材料データベース）](/data/db-materials-project.md)
- [Open Quantum Materials Database (OQMD)](/data/db-oqmd.md)

### マテリアルズ・インフォマティクス
- [4つのインフォマティクス](/data/info.md)
- [材料インフォマティクス](/data/info-materials.md)
- [計測インフォマティクス](/data/info-measure.md)
- [プロセスインフォマティクス](/data/info-process.md)
- [物理インフォマティクス](/data/info-physics.md)
- [物理インフォにおける PINNs とその発展形](/data/info-physics-2.md)
- [AI4Science](/data/info-ai4science.md)

### 教師あり学習（予測・分類）
- [決定木アンサンブル学習](/data/decision-tree.md)
- [勾配ブースティング決定木](/data/boosting.md)
- [サポートベクターマシン](/data/svm.md)
- [k近傍法](/data/k-nn.md)
- [半教師あり学習](/data/semi-learning.md)

### 次元削減手法・可視化
- [線形次元削減](/data/dr-linear.md)
- [非線形次元削減](/data/dr-nonlinear.md)
- [確率モデル・ベイズ系の次元削減](/data/dr-probabilistic-bayse.md)
- [深層学習ベースの次元削減 (表現学習)](/data/dr-deep-learning.md)

### 深層学習フレームワーク
- [パーセプトロン](/data/perceptron.md)
- [ニューラルネットワーク](/data/nn.md)
- [畳み込みニューラルネットワーク](/data/cnn.md)
- [時間畳み込みネットワーク](/data/tcn.md)
- [リカレントニューラルネットワーク](/data/rnn.md)
- [グラフニューラルネットワーク](/data/gnn.md)

### 説明可能 AI (XAI)
- [特徴量重要度・寄与分解 (SHAP, LIMEなど)](/data/importance.md)
- [Attention機構](/data/attention.md)
- [Grad-CAM](/data/gradcam.md)
- [シンボリック回帰](/data/symbolic.md)

### 生成 AI 
- [GANとDiffusionモデル](/data/gan-diffusion.md)
- [変分オートエンコーダー(VAE)](/data/vae.md)
- [Transformer](/data/transformer.md)
- [材料科学分野におけるLLM](/data/mat-llm.md)

### 最適化手法
- [実験計画法(DOE)](/data/doe.md)
- [ベイズ最適化(BO)](/data/bo.md)
- [アクティブラーニング(AL)](/data/active-learning.md)
- [遺伝的アルゴリズム(GA)](/data/genetic-algorithm.md)

### 機械学習ポテンシャル
- [機械学習ポテンシャルの基礎](/data/ml-potential.md)
- [機械学習ポテンシャルのFine tuning](/data/fine-tuning.md)
- [汎用機械学習ポテンシャル](/data/ml-potential-all.md)

### その他
- [サロゲートモデル](/data/surrogate.md)
- [リザバーコンピューティング](/data/reservoir.md)
- [物理リザバー](/data/reservoir-physical.md)
- [逆設計モデル](/data/inverse.md)


<!-- ## 情報基盤
研究室の計算・解析環境を支える情報システムでは、プログラミング環境、ワークステーション管理、スパコン利用、ライセンス管理、データバックアップなど、研究活動を円滑に進めるための基盤技術を扱います。効率的で再現性の高い研究を実現するための運用ノウハウを体系的にまとめています。

### データ解析環境
- プログラミング (Python, Matlab)
- GUIツール (OriginPro, Igor)
- クラウド (Colab)
- IDE (Visual studio Code, Cursor) 

### スーパーコンピュータの利用
- [東北大金研Masamune-II](/sys/masamune.md)

### サーバー・HPC管理
- Linuxの基本
- CPU / GPU / TPU
- リモートアクセス (Anydesk)
- データ管理 (NAS)
- [所有ワクステ (SHIMA/TANI/MORI/MBN)](/sys/workstations.md)
- [購入後の初期設定](/sys/setup.md)

### ソフトウェア管理
- 無料・有料ライセンス
- 大学提供ライセンス

### ホームページの管理
- 研究室のウェブサイト(Github pages, html)
- 研究室wikiのウェブサイト(Github pages, VitePress)
- アクセス解析 (GA4, GTM)



## ラボ運営 {#ラボ運営}
研究室運営に必要な体制づくり、安全管理、研究活動の進め方、設備立ち上げの要点をまとめています。日常運用から学生支援、装置管理まで、研究が円滑に進むための基本を整理しています。

### 研究室運営
- 研究室の運営方針・指針
- 年間スケジュール
- ミーティング運用
- 研究計画書の作成
- 学会カレンダー
- 奨学金
- 留学支援
- 博士進学のすゝめ

### 研究活動
- そもそも研究活動とは？
- 学部・修士・博士における研究活動
- 文献調査の方法
- 論文紹介
- 輪講
- 研究会・学会への参加
- スライド資料の作成
- ポスター資料の作成
- プレゼンテーションの注意点
- 論文執筆

### 共用機器・安全管理・保守点検
- 研究データ・ドキュメント管理
- 予約システム（共用機器）の利用
- 高電圧機器の取り扱い
- 真空装置
- ガスボンベ（Ar, N2, O2など）
- 化学薬品・廃液管理
- 停電対策チェックリスト
- ラボ清掃
- 備品・消耗品の管理

### 立ち上げ期メモ
- 備品・機器類の引っ越し
- 電源容量の確認
- 最大積載荷重の確認
- サーバールームの構築
- クリーンベンチ・実験机
- Wi-Fiのセットアップ
- 机・椅子の新調
- 家電類の整備 -->