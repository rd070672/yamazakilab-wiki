---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Wiki"
  text: "tyamazaki" #"Yamazaki Lab"
  tagline: # 横浜国立大学<br>材料工学教育プログラム
  actions:
    - theme: brand
      text: Website
      link: / # https://tyamazaki.com/

    - theme: alt
      text: Github
      link: / # https://github.com/rd070672/yamazakilab-wiki

features:
  - title: 計算
    details: 第一原理計算・数値計算・スパコン計算を軸に、環境構築から代表的手法、解析例までを紹介します。材料物性の理解とデータ駆動解析につながる計算科学の要点をまとめます。

  - title: 実験
    details: 材料合成・熱処理・プロセス制御から、磁気計測・放射光解析までを整理します。再現性を高める手順や装置運用のコツなど、実験で役立つ知見を共有します。

  - title: データサイエンス
    details: 機械学習・統計解析・深層学習、機械学習ポテンシャルなど、材料データ解析に必要な手法を扱います。材料応用の実例と実装、モデル解釈の勘所をまとめます。

---


## 計算 {#計算}
第一原理計算・数値計算・スパコン計算を軸に、環境構築から代表的手法、解析例までを紹介します。材料物性の理解とデータ駆動解析につながる計算科学の要点をまとめます。

### 第一原理計算
- [第一原理計算の原理](/calc/vasp.md)
- [VASP のインストールメモ](/calc/vasp-install.md)
- [VASP の計算例](/calc/vasp-dft.md)
- [vaspkit メモ](/calc/vaspkit.md)
- [phonopy メモ](/calc/phonopy.md)
- [MAELAS メモ](/calc/maelas.md)
- [Bader 電荷解析メモ](/calc/bader.md)
- [Wien2k のインストールメモ](/calc/wien2k-install.md)
- [Wien2k の計算例](/calc/wien2k.md)
- [KKR の基本](/calc/kkr.md)
- [Kubo–Greenwood 法と線形応答理論による輸送特性計算](/calc/kkr-kubo.md)
- [Akai-KKR のインストールメモ](/calc/akaikkr-install.md)
- [Akai-KKR の計算例](/calc/akaikkr.md)
- [SPR-KKR のインストールメモ](/calc/sprkkr-install.md)
- [SPR-KKR の計算例](/calc/sprkkr.md)


### 第一原理分子動力学計算
- [第一原理計算に基づく MD 計算の原理](/calc/aimd.md)
- [AIMD によるアモルファスの計算例](/calc/aimd-amorphous.md)

### 第一原理フェーズフィールド計算
- [第一原理計算に基づくフェーズフィールド計算の原理](/calc/dft-pf.md)

### 熱力学計算
- [CALPHAD法](/calc/calphad.md)

### 分子動力学計算
- [MD の原理](/calc/md.md)
- [LAMMPS のインストールメモ](/calc/md-lammps-install.md)
- [LAMMPS を用いた MD 計算](/calc/md-lammps.md)
- [ASE を用いた MD 計算](/calc/md-ase.md)
- [JAX / JAX-MD を用いた MD 計算](/calc/md-jax.md)

### モンテカルロ計算
- [モンテカルロ計算の原理](/calc/mc.md)
- [マルコフ連鎖 MC 法](/calc/mcmc.md)
- [逆 MC 法](/calc/mc-inverse.md)
- [運動論的 MC 法](/calc/mc-kinetic.md)
- [クラスター展開モデル](/calc/mc-cluster.md)
- [MC 計算による磁性体の計算例](/calc/mc-mag.md)

### フェーズフィールド計算
- [フェーズフィールド計算の原理](/calc/pf.md)
- [Allen–Cahn 法に基づく計算例](/calc/pf-allen-cahn.md)
- [Cahn–Hilliard 法に基づく計算例](/calc/pf-cahn-hilliard.md)
- [デンドライト成長シミュレーション](/calc/dendrite.md)

### マルチフィジックス計算
- [FEM と FDM の原理](/calc/fem-fdm.md)
- [常微分方程式 (ODE) の基礎](/calc/ode.md)
- [偏微分方程式 (PDE) の基礎](/calc/pde.md)
- [ボロノイ分割法](/calc/volonoi.md)
- [mumax3 のインストールメモ](/calc/mumax3-install.md)
- [mumax3 を用いた LLG 計算](/calc/mumax3-llg.md)
- [拡張版 mumax+ による磁気弾性計算](/calc/mumaxplus.md)
- [COMSOL Multiphysics のインストールメモ](/calc/comsol-install.md)
- [COMSOL を用いた LLG 計算](/calc/comsol-llg.md)
- [COMSOL を用いた 電磁場-LLG 連成計算](/calc/comsol-maxwell-llg.md)
- [COMSOL を用いた 弾性場-LLG 連成計算](/calc/comsol-maelas-llg.md)
- [COMSOL を用いた 相変化解析](/calc/comsol-pf.md)



## 実験 {#実験}
材料合成・熱処理・プロセス制御から、磁気計測・放射光解析までを整理します。再現性を高める手順や装置運用のコツなど、実験で役立つ知見を共有します。

### 材料合成
- 多元スパッタ装置
- PLD
- MBE

### 熱処理・試料加工
- 赤外線ランプ炉
- フォトリソグラフィ
- 電子線リソグラフィ (EBL)
- ドライエッチング / ウェットエッチング
- ワイヤーボンディング・パッケージング

### 磁気計測
- バルクハウゼンノイズ計測装置 (MBN)
- 振動試料型磁力計 (VSM)
- 磁気特性測定システム (MPMS)
- 磁気光学カー効果顕微鏡　(MOKE)

### 構造・化学状態解析
- X線回折装置 (XRD)
- X線光電子分光法 (XPS)
- 集束イオンビーム加工観察装置 (FIB-SEM)
- 電子後方散乱回折 (EBSD)
- 透過電子顕微鏡 (TEM)
- 5D-STEM

### 汎用機器・治具設計
- 3Dプリンター
- アルミフレーム設計
- DAQ (Data Acquisition) ボード
- 回路設計

### 放射光施設
- [放射光の基礎](/exp/sr.md)
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
  - BL09U HAXPES



## データサイエンス {#データサイエンス}
機械学習・統計解析・深層学習、機械学習ポテンシャルなど、材料データ解析に必要な手法を扱います。材料応用の実例と実装、モデル解釈の勘所をまとめます。

### 統計量・特徴量
- [統計学入門](/data/statistics.md)
- [ベイズ統計入門](/data/bayes.md)
- [時系列解析](/data/temporal.md)
- [スペクトル解析](/data/spectral.md)
- [直積・アダマール積](/data/product.md)
- [パーシステントホモロジー入門](/data/persistent.md)

### 材料データベース
- [Pymatgen](/data/pymatgen.md)
- [Open Quantum Materials Database](/data/oqmd1.md)

### マテリアルズ・インフォマティクス
- [4つのインフォマティクス](/data/info.md)
- [材料インフォマティクス](/data/info-materials.md)
- [計測インフォマティクス](/data/info-measure.md)
- [プロセスインフォマティクス](/data/info-process.md)
- [物理インフォマティクス](/data/info-physics.md)
- [物理インフォにおける PINNs とその発展形](/data/info-physics-2.md)
- [AI4Science](/data/info-ai4science.md)

### 教師あり学習
- 勾配ブースティング
- アンサンブル学習

### 次元削減手法・可視化
- 線形手法 (PCA, MDS)
- 非線形的手法 (UMAP, t-SNE, isomap)
- 自己組織化マップ (SOM)

### 深層学習フレームワーク
- 画像 (CNN, VAE, U-net)
- 時系列 (RNN, LSTM, GRU, Transfomer, TCN)
- グラフ (GNN, MPNN, GraphSAGE, message-passing)

### 説明可能 AI (XAI)
- 特徴量重要度・寄与分解 (SHAP, LIMEなど)
- Attention機構
- Grad-CAM
- シンボリック回帰

### 生成 AI 
- オートエンコーダとVAE
- Transfomer
- MatterGen

### 最適化手法
- 実験計画法（DOE）
- ベイズ最適化（BO）
- アクティブラーニング（AL）
- 遺伝的アルゴリズム

### 機械学習ポテンシャル
- [MD 計算における古典的・機械学習ポテンシャルの選定](/data/md-potential.md)
- [機械学習ポテンシャルの基礎](/data/ml-potential.md)
- [機械学習ポテンシャルのFine tuning](/data/fine-tuning.md)
- [汎用機械学習ポテンシャル](/data/ml-potential-all.md)

### その他
- [ニューラルネットワーク](/data/neural-network.md)
- [リカレントニューラルネットワーク](/data/recurrent-neural-network.md)
- [テンソルネットワーク](/data/tensor-network.md)
- [サロゲートモデル](/data/surrogate.md)
- [リザバーコンピューティング](/data/reservoir.md)
- [物理リザバー](/data/reservoir-physical.md)


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