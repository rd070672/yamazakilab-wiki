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
      link: /wiki-list

features:
  - title: 計算
    details: 第一原理計算、数値計算、スパコンを用いた大規模計算を中心に、環境構築からインストール方法、典型的な計算手法、解析の実例まで幅広く紹介します。材料物性の理論的理解からデータ駆動型の解析まで、計算科学に基づく総合的な知見を得られる内容です。

  - title: 実験
    details: ラボでの材料合成、熱処理やプロセス制御、磁気計測・放射光解析を含む先端計測技術など、実験科学の基礎から応用までを体系的に解説します。再現性の高い測定のコツや装置構築のノウハウなど、研究現場に直結する情報を提供します。

  - title: データサイエンス
    details: 教師あり・教師なし学習から深層学習、統計的解析、機械学習ポテンシャルの構築など、多様なデータ科学手法を扱います。材料研究への応用例や実装方法、モデル解釈のポイントまで、データ駆動型アプローチを体系的に理解できる内容です。



---

## wiki一覧

## 計算
本セクションでは、第一原理計算、数値計算、スパコンを用いた大規模計算を中心に、材料科学・物性物理の研究に不可欠な計算科学の基盤を整理する。環境構築やソフトウェアのインストール方法だけでなく、代表的な計算手法の考え方や典型的な解析事例までを俯瞰し、材料物性の理解からデータ駆動型解析までを一貫して扱うことを目的とする。

計算科学は、理論式から得られる定性的な議論と、実験から得られる定量データの間を接続する役割を担う。第一原理計算による電子状態・エネルギー地形の評価、マイクロ磁気シミュレーションによる磁区構造・ダイナミクスの予測、有限要素法による連成場解析、さらにはこれらをスパコン上で大規模に実行するための計算環境整備までを統合的に運用することで、材料設計の指針を高い再現性と一般性をもって提示できるようになる。

### VASP
- [VASP v6.5.1のインストールメモ](/calc/vasp-install.md)
- [VASPを用いたDFT計算](/calc/vasp-dft.md)
- [vaspkit v1.5 メモ](/calc/vaspkit.md)
- [phonopy v2.44.0 メモ](/calc/phonopy.md)
- [MAELAS v3.0 メモ](/calc/maelas.md)
- [Bader charge analysis メモ](/calc/bader-charge.md)

### SPR-KKR
- [SPR-KKR v8.6.0 のインストールメモ](/calc/sprkkr-install.md)

### Wien2k
- [Wien2k v23.2 のインストールメモ](/calc/wien2k-install.md)

### mumax3
- [mumax3 v3.11 のインストールメモ](/calc/mumax3-install.md)
- [mumax3 を用いた LLG 計算](/calc/mumax3-llg.md)
- [拡張版 mumax+ による磁気弾性計算](/calc/mumaxplus.md)

### COMSOL Multiphysics
- [COMSOL Multiphysics v6.4 のインストールメモ](/calc/comsol-install.md)
- [固体力学計算](/calc/comsol-solid.md)
- [AC/DC計算](/calc/comsol-ac-dc.md)
- [LLG計算](/calc/comsol-llg.md)
- [LLG連成計算](/calc/comsol-multiphys.md)

### Linux-PC の初期設定
- [Linux-PC 初期設定メモ](/calc/linux-setup.md)

### 東北大金研スパコン "Masamune-II"
- [Masamune-II 利用メモ](/calc/masamune.md)


## 実験関連

- 多元スパッタ装置
- 急速昇温熱処理装置
- バルクハウゼンノイズ計測装置 (MBN)
- X線回折装置 (XRD)
- X線光電子分光法 (XPS)
- 振動試料型磁力計 (VSM)
- 磁気特性測定システム (MPMS)
- 集束イオンビーム加工観察装置 (FIB-SEM)
- 透過電子顕微鏡 (TEM)
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

## データサイエンス

- VScode
- UMAP (Uniform Manifold Approximation and Projection)
- 主成分分析 PCA (Principal component analysis)
- パーシステントホモロジー PH

## ラボ運営

- 立ち上げ期
  - 装置類の引っ越し
  - 土禁・フロアマット
  - 机・椅子（居室）
  - 机・椅子・棚（実験室）
  - Wi-Fiのセットアップ
  - 家電類
  - サーバールーム
  - クリーンベンチ
  - シンク周り
