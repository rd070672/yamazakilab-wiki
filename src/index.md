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
- 基礎
- [量子力学とシュレーディンガー方程式](/calc/dft-basis.md)
- [ブラケット記法の体系](/calc/bra-ket.md)
- [バンドアンフォールディング](/calc/dft-unfolding.md)
- [ブリルアンゾーン積分のテトラヘドロン法](/calc/tetrahedron.md)
- [ワニエ関数と局在軌道](/calc/dft-wannier.md)
- [応答理論入門](/calc/response-theory.md)
- [摂動論の基礎と応用](/calc/perturbation.md)
- [密度汎関数摂動論](/calc/dfpt.md)
- [時間依存密度汎関数理論（TDDFT）](/calc/dft-td.md)
- [量子電子動力学（QED）法の原理と活用](/calc/qed.md)
- [虚数時間発展法（ITE）の基礎](/calc/dft-imarginary.md)
- [非調和フォノン理論と有限温度物性](/calc/self-consistent-phonon.md)
- [局在電子系の磁性](/calc/localized-electron-magnetism.md)
- [遍歴電子系の磁性](/calc/itinerant-electron-magnetism.md)
- [遍歴電子系のストーナー条件](/calc/stoner.md)
- [スピン軌道相互作用と行列要素](/calc/spin-orbit-coupling.md)
- [マグノン-フォノン相互作用の計算](/calc/magnon-phonon.md)
- [ベリー位相とトポロジカル応答の計算](/calc/berry.md)
- [ベリー曲率に基づく異常ホール効果・異常ネルンスト効果の第一原理計算](/calc/ahe-ane-calc.md)

- [第一原理計算の基本原理](/calc/dft.md)
- [第一原理計算を支える数値解法](/calc/dft-calc.md)
- [第一原理計算ソフトウェアと特徴](/calc/dft-software.md)
- [VASPによる第一原理計算](/calc/vasp-dft.md)
- [仮想結晶近似](/calc/vasp-vca.md)
- [VASPKITによる前処理・後処理](/calc/vaspkit.md)
- [Phonopy によるフォノン計算](/calc/phonopy.md)
- [MAELAS による磁気弾性効果の計算](/calc/maelas.md)
- [Bader電荷解析](/calc/bader-charge-analysis.md)
- [Wien2k の計算例](/calc/wien2k.md)
- [グリーン関数とKKR法](/calc/kkr.md)
- [線形応答理論とKubo–Greenwood法](/calc/kkr-kubo.md)
- [非平衡グリーン関数（NEGF）と量子輸送](/calc/negf.md)
- [ダイソン方程式と多体電子状態の記述](/calc/dyson-derivation.md)
- [ファインマンダイアグラム入門](/calc/feynman-diagram.md)
- [AkaiKKRによる不規則系電子状態計算](/calc/akaikkr.md)
- [SPR-KKRによる磁性計算](/calc/sprkkr.md)
- [Ju-KKRによる局所電子状態計算](/calc/jukkr.md)
- [TOMBOによる全電子混合基底法](/calc/tombo.md)
- [核量子効果（NQE）を扱う第一原理計算](/calc/nuclear-quantum-effects.md)
- [格子ボルツマン法（LBM）入門](/calc/lattice-boltzmann-method.md)
- [カオス理論と非線形ダイナミクス](/calc/chaos.md)
- [量子カオス理論](/calc/chaos-quantum.md)
- [格子QCDシミュレーション入門](/calc/lattice-qcd.md)
- [テンソルネットワーク入門](/calc/tensor-network.md)
- [量子コンピュータの物理](/calc/quantum-computer.md)
- [量子コンピュータ開発動向と展望](/calc/quantum-computer-trend.md)
- [量子アニーリング](/calc/quantum-annealing.md)

### 第一原理分子動力学計算
- [第一原理分子動力学（AIMD）の原理](/calc/aimd.md)
- [AIMDによるアモルファス設計](/calc/aimd-amorphous.md)
- [アモルファスの距離秩序と物理](/calc/amorphous.md)
- [アモルファスの構造と物性の計算手法](/calc/amorphous-calc.md)
- [アモルファスの構造解析手法](/calc/amorphous-analysis.md)
- [アモルファス固体の力学](/calc/amorphous-solid.md)
- [アモルファス固体の力学の計算方法](/calc/amorphous-solid-calc.md)
- [アモルファスにおける局所磁気モーメント](/calc/amorphous-moment.md)

### 第一原理フェーズフィールド計算
- [第一原理計算に基づくフェーズフィールド計算](/calc/dft-pf.md)

### 熱力学計算
- [CALPHAD法（計算熱力学）による状態図・相平衡予測](/calc/calphad.md)
- [平衡状態図の読み方](/calc/phase-diagram.md)
- [ランダウ理論と自由エネルギー](/calc/landau.md)
- [Ginzburg–Landau理論による相転移と空間秩序の記述](/calc/landau-gl-theory.md)
- [ギブス自由エネルギーに基づく合金設計](/calc/gibbs-alloy.md)

### 分子動力学計算
- [MD の原理](/calc/md.md)
- [MD の数値解法](/calc/md-calc.md)
- [MD 計算における原子間ポテンシャル選定](/calc/md-potential.md)
- [MD 計算と機械学習](/calc/md-machine-learning.md)
- [LAMMPS による MD 計算](/calc/md-lammps.md)
- [ASE・JAX による MD 計算](/calc/md-ase-jax.md)

### モンテカルロ計算
- [モンテカルロ法の基礎](/calc/mc.md)
- [モンテカルロ法の数値解法](/calc/mc-calc.md)
- [密度行列繰り込み群法](/calc/density-matrix.md)
- [クラスター展開モデル](/calc/mc-cluster.md)
- [原子論的スピンモデル](/calc/atomic-spin-model.md)
- [マルコフ連鎖モンテカルロ（MCMC）法](/calc/mcmc.md)
- [リバースモンテカルロ (RMC) 法](/calc/mc-reverse.md)
- [キネティックモンテカルロ（KMC）法](/calc/mc-kinetic.md)
- [量子モンテカルロ（QMC）法](/calc/mc-quantum.md)
- [グランドカノニカルモンテカルロ（GCMC）法](/calc/mc-grand-canonical.md)
- [レプリカ交換モンテカルロ（REMC）法](/calc/mc-replica.md)
- [レプリカ交換モンテカルロ（REMC）法によるスピングラス解析](/calc/spin-glass-remc.md)
- [スピングラスの物理と応用](/calc/spin-glass-phys.md)
- [計算科学で読み解くスピングラス](/calc/spin-glass-calc.md)
- [アモルファス磁性におけるスピングラス](/calc/spin-glass-amorphous.md)
- [量子スピングラス](/calc/spin-glass-quantum.md)

### フェーズフィールド計算
- [フェーズフィールド計算の原理](/calc/pf.md)
- [フェーズフィールド法の数値解法](/calc/pf-calc.md)
- [Allen–Cahn 法で記述する金属組織シミュレーション](/calc/pf-allen-cahn.md)
- [デンドライト成長のPFシミュレーション](/calc/dendrite.md)
- [Cahn–Hilliard 方程式で記述する金属組織シミュレーション](/calc/pf-cahn-hilliard.md)
- [フェーズフィールドクリスタル（PFC）法の基礎と応用](/calc/phase-field-crystal.md)

### マルチフィジックス計算
- [有限差分法の原理と数値解法](/calc/fdm.md)
- [有限要素法の原理](/calc/fem.md)
- [有限要素法の数値解法](/calc/fem-calc.md)
- [離散化とスケーラブル解法](/calc/scalable.md)
- [ガウス・ザイデル法](/calc/fem-gauss-seidel.md)
- [ヤコビ法と並列計算](/calc/fem-jacobi.md)
- [常微分方程式 (ODE)と偏微分方程式 (PDE) の基礎](/calc/ode-pde.md)
- [ボロノイ分割法](/calc/volonoi.md)
- [LLG方程式に基づくマイクロ磁化シミュレーション](/calc/llg.md)
- [反磁界（長距離相互作用）の数値解法](/calc/demag-calc.md)
- [マクスウェル方程式に基づく電磁界解析](/calc/maxwell.md)
- [マクスウェル方程式の導出と物質応答](/calc/maxwell-derivation.md)
- [動く磁壁が誘起する局所渦電流](/calc/eddy-current.md)
- [弾塑性構成モデルの基本方程式](/calc/elasto-plasticity.md)
- [磁気弾性効果の定式化](/calc/magneto-elasticity.md)
- [mumax による LLG マイクロ磁化・磁気弾性シミュレーション](/calc/mumax3-llg.md)
- [COMSOL を用いた LLG 計算と連成解析](/calc/comsol-llg.md)
- [有限要素法によるマイクロマグ計算の自作コード](/calc/fem-llg.md)
- [3次元線形弾性のHex8有限要素ソルバ](/calc/fem-solver.md)
- [磁気弾性連成（磁歪）をFEM弾性ソルバへ](/calc/fem-maelas.md)

## 実験 {#実験}
材料合成・熱処理・プロセス制御から、磁気計測・放射光解析までを整理します。再現性を高める手順や装置運用のコツなど、実験で役立つ知見を共有します。

### 材料合成
- 物理蒸着法の基礎
- 化学蒸着法の基礎
<!-- - 多元スパッタ装置
- PLD
- MBE -->

### 熱処理・試料加工
- [フォトリソグラフィの化学](/exp/photo-lithography.md)
- [マスクレス露光装置の物理](/exp/maskless-lithography.md)
<!-- - 赤外線ランプ炉
- フォトリソグラフィ
- 電子線リソグラフィ (EBL)
- ドライエッチング / ウェットエッチング
- ワイヤーボンディング・パッケージング -->

### 磁気計測
- [軟磁性体の物理](/exp/softmag-phys.md)
- [軟磁性体の高周波特性評価](/exp/softmag-rf.md)
- [高周波計測技術](/exp/softmag-rf-phys.md)
- [信号アナライザーの測定原理](/exp/softmag-rf-measurement.md)
- [低ノイズ・高感度な電圧測定技術](/exp/low-noise.md)
- [プリアンプの物理と基礎](/exp/pre-amp.md)
- [パワーエレクトロニクス用受動素子](/exp/power-electronics-mag.md)
- [パワーエレクトロニクス用半導体デバイス](/exp/power-electronics-semicon.md)
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
- [X線回折装置 (XRD)の基礎](/exp/xrd.md)
- [リードベルド解析](/exp/xrd-rietveld.md)
- [5D-STEMの基礎](/exp/5d-stem.md)
- [電子線ホログラフィーの基礎](/exp/electron-holography.md)

### 汎用機器・治具設計
- [電磁界シールドの基礎](/exp/mag-shield.md)
<!-- - 3Dプリンター
- アルミフレーム設計
- DAQ (Data Acquisition) ボード
- 回路設計 -->

### 放射光計測
- 基礎
  - [放射光（シンクロトロン放射）の基礎](/exp/sr.md)
  - [ビームラインの光学設計](/exp/sr-optics.md)
  - [放射光による構造解析](/exp/sr-structure.md)
  - [放射光によるダイナミクス解析](/exp/sr-dynamics.md)
  - [アモルファスの構造・物性解析](/exp/sr-amorphous.md)
  - [フェルミの黄金律](/exp/fermi-golden-rule.md)
  - [選択則とクレプシュ・ゴルダン係数](/exp/clebsch-gordan.md)
- 各手法の原理
  - [X線吸収微細構造（XAFS）](/exp/sr-xafs.md)
  - [X線発光分光（XES）](/exp/sr-xes.md)
  - [光電子ホログラフィー（PEH）](/exp/sr-peh.md)
  - [小角X線散乱（SAXS）](/exp/sr-saxs.md)
  - [硬X線光電子分光（HAXPES）](/exp/sr-haxpes.md)
  - [共鳴軟Ｘ線非弾性散乱分光（RIXS）](/exp/sr-rixs.md)
  - [コヒーレント回折イメージング（CDI）](/exp/sr-cdi.md)
  - [X線磁気円二色性（XMCD）の原理](/exp/sr-xmcd.md)
  - [スピン・角度分解光電子分光（SARPES）](/exp/sr-sarpes.md)
  - [X線自由電子レーザー（XFEL）](/exp/sr-xfel.md)

### 中性子散乱
- 基礎
  - [中性子ビームの基本](/exp/neutron.md)
  - [中性子散乱による磁気秩序解析](/exp/neutron-mag.md)

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
- [マテリアルズ・インフォマティクスの動向と将来展望](/data/info.md)
- [AI for Science（AI4S）](/data/info-ai4science.md)
- [材料インフォマティクス](/data/info-materials.md)
- [計測インフォマティクス](/data/info-measure.md)
- [プロセスインフォマティクス](/data/info-process.md)
- [物理インフォマティクスとPINNs](/data/info-physics.md)

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
- [ニューラルネットワーク（NN）](/data/nn.md)
- [畳み込みニューラルネットワーク（CNN）](/data/cnn.md)
- [時間畳み込みネットワーク（TCN）](/data/tcn.md)
- [リカレントニューラルネットワーク（RNN）](/data/rnn.md)
- [グラフニューラルネットワーク（GNN）](/data/gnn.md)

### 説明可能 AI (XAI)
- [特徴量重要度・寄与分解 (SHAP, LIMEなど)](/data/importance.md)
- [アテンション機構と解釈性](/data/attention.md)
- [Grad-CAM](/data/gradcam.md)
- [シンボリック回帰](/data/symbolic.md)

### 生成 AI 
- [GANとDiffusionモデル](/data/gan-diffusion.md)
- [変分オートエンコーダー(VAE)](/data/vae.md)
- [Transformer](/data/transformer.md)
- [材料科学分野におけるLLM](/data/llm-mat.md)
- [ファインマンLLM](/data/llm-feynman.md)

### 最適化手法
- [実験計画法(DOE)](/data/doe.md)
- [ベイズ最適化(BO)](/data/bo.md)
- [アクティブラーニングと能動学習](/data/active-learning.md)
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


## 情報基盤
研究室の計算・解析環境を支える情報システムでは、プログラミング環境、ワークステーション管理、スパコン利用、ライセンス管理、データバックアップなど、研究活動を円滑に進めるための基盤技術を扱います。効率的で再現性の高い研究を実現するための運用ノウハウを体系的にまとめています。

### データ解析環境
- プログラミング (Python, Matlab)
- GUIツール (OriginPro, Igor)
- クラウド (Colab)
- IDE (Visual studio Code, Cursor) 

### プログラミング(Python)
- [For文の高速化](/sys/python-for.md)

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



<!-- ## ラボ運営 {#ラボ運営}
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