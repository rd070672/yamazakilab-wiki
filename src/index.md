---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Wiki"
  text: "Yamazaki Lab"
  tagline: # 横浜国立大学<br>材料工学教育プログラム
  actions:
    - theme: brand
      text: ホームページ
      link: https://tyamazaki.com/

    - theme: alt
      text: wiki
      link: /#計算

features:
  - title: 計算
    details: 第一原理計算、数値計算、スパコンを用いた大規模計算を中心に、環境構築からインストール方法、典型的な計算手法、解析の実例まで幅広く紹介します。材料物性の理論的理解からデータ駆動型の解析まで、計算科学に基づく総合的な知見を得られる内容です。

  - title: 実験
    details: ラボでの材料合成、熱処理やプロセス制御、磁気計測・放射光解析を含む先端計測技術など、実験科学の基礎から応用までを体系的に解説します。再現性の高い測定のコツや装置構築のノウハウなど、研究現場に直結する情報を提供します。

  - title: データサイエンス
    details: 教師あり・教師なし学習から深層学習、統計的解析、機械学習ポテンシャルの構築など、多様なデータ科学手法を扱います。材料研究への応用例や実装方法、モデル解釈のポイントまで、データ駆動型アプローチを体系的に理解できる内容です。

---

## 
# wiki一覧

## 計算
本セクションでは、第一原理計算、数値計算、スパコンを用いた大規模計算を中心に、材料科学・物性物理の研究に不可欠な計算科学の基盤を整理する。環境構築やソフトウェアのインストール方法だけでなく、代表的な計算手法の考え方や典型的な解析事例までを俯瞰し、材料物性の理解からデータ駆動型解析までを一貫して扱うことを目的とする。

計算科学は、理論式から得られる定性的な議論と、実験から得られる定量データの間を接続する役割を担う。第一原理計算による電子状態・エネルギー地形の評価、マイクロ磁気シミュレーションによる磁区構造・ダイナミクスの予測、有限要素法による連成場解析、さらにはこれらをスパコン上で大規模に実行するための計算環境整備までを統合的に運用することで、材料設計の指針を高い再現性と一般性をもって提示できるようになる。

### 第一原理計算
- [VASP v6.5.1 のインストールメモ](/calc/vasp-install.md)
- [DFT 計算](/calc/vasp-dft.md)
- [第一原理 MD 計算](/calc/vasp-aimd.md)
- [vaspkit v1.5 メモ](/calc/vaspkit.md)
- [phonopy v2.44.0 メモ](/calc/phonopy.md)
- [MAELAS v3.0 メモ](/calc/maelas.md)
- [Bader charge analysis メモ](/calc/bader-charge.md)
- [SPR-KKR v8.6.0 のインストールメモ](/calc/sprkkr-install.md)
- [Wien2k v23.2 のインストールメモ](/calc/wien2k-install.md)

### 第一原理MD計算
- [VASPを用いた第一原理 MD 計算](/calc/vasp-aimd.md)

### モンテカルロ計算

### 分子動力学計算（MD）
- [LAMMPS 10 Sep 2025 version のインストールメモ](/calc/lammps-install.md)
- [LAMMPS を用いた MD 計算](/calc/lammps-md.md)
- [ASE を用いた MD 計算](/calc/ase-md.md)

### フェーズフィール計算

### 有限要素・有限差分計算
- [mumax3 v3.11 のインストールメモ](/calc/mumax3-install.md)
- [mumax3 を用いた LLG 計算](/calc/mumax3-llg.md)
- [拡張版 mumax+ による磁気弾性計算](/calc/mumaxplus.md)
- [COMSOL Multiphysics v6.4 のインストールメモ](/calc/comsol-install.md)
- [COMSOL を用いた 固体力学計算](/calc/comsol-solid.md)
- [COMSOL を用いた AC/DC 計算](/calc/comsol-ac-dc.md)
- [COMSOL を用いた LLG 計算](/calc/comsol-llg.md)
- [COMSOL を用いた LLG 連成計算](/calc/comsol-multiphys.md)

---

## 実験


### 材料合成
- 多元スパッタ装置

### 熱処理・加工プロセス
- 急速昇温熱処理装置

### 磁気計測
- バルクハウゼンノイズ計測装置 (MBN)
- 振動試料型磁力計 (VSM)
- 磁気特性測定システム (MPMS)
- 磁気光学カー効果顕微鏡　(MOKE)

### 構造・化学状態解析
- X線回折装置 (XRD)
- X線光電子分光法 (XPS)
- 集束イオンビーム加工観察装置 (FIB-SEM)
- 透過電子顕微鏡 (TEM)

### 放射光施設
- SPring-8
  - 申請と実験準備
  - SPring-8 BL25SU XMCD
  - SPring-8 BL14B2 in-situ XAS/XRD
- KEK(PF)
  - 申請と実験準備
  - KEK(PF) BL9C XAFS
- NanoTerasu
  - 申請と実験準備
  - NanoTerasu ~BL09U HAXPES~

---

## データサイエンス

### 統計的データ処理
- ○○

### 位相学的データ解析
- パーシステントホモロジー PH
- ○○

### ○○
- 決定木系教師あり学習
- SHAP値
### ○○
- 次元削減手法 (PCA, MDS, UMAP, t-SNE)
- SOM

### ○○
- 深層学習 (CNN, VAE, U-net)
- 時系列系深層学習 (RNN, transfomer, ○○)
### ○○
- 機械学習ポテンシャル
- ファインチューニング

--- 

## 情報システム

### データ解析環境
- プログラミング (Python, Matlab)
- GUIツール (OriginPro, Igor)
- クラウド (Colab)
- IDE (Visual studio Code, Cursor) 

### スーパーコンピュータの利用
- [東北大金研Masamune-II](/calc/supercom-masamune.md)

### サーバー・HPC管理
- Linuxメモ (CLI, SSHなど)
- ワクステ (SHIMA/ TANI/ MORI)

### ソフトウェア管理
- 無料・有料ライセンス
- 大学提供ライセンス

---

## ラボ運営

### 研究室運営
  - 研究室の運営方針・指針
  - 年間スケジュール
  - ミーティング運用
  - 消耗品・備品管理
  - 予約システム（共用機器）の利用

### 研究活動
  - 研究活動とは？
  - 学部・修士・博士における研究活動
  - 文献調査
  - 論文紹介
  - 輪講
  - 研究会・学会への参加
  - スライド資料の作成
  - ポスター資料の作成
  - プレゼンテーションの注意点

### 安全管理・保守点検
  - 高電圧機器の注意点
  - 真空装置の取り扱い
  - 高圧ガスボンベ（Ar, N2, O2など）
  - 化学薬品の取り扱い（酸、溶剤、レジスト）
  - 廃液処理（酸・アルカリ・アルコール・その他）

### 立ち上げ期メモ
  - 備品・機器類のお引っ越し
  - Wi-Fiのセットアップ
  - 机・椅子・棚
  - 家電類
  - サーバールーム
  - クリーンベンチ