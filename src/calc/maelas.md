# MAELAS（Magneto-ELAStic properties calculation code）
作成日：2025年11月23日

## 概要  
- MAELAS は磁気ひずみ・磁気弾性定数（magnetostrictive coefficients / magnetoelastic constants）を第一原理計算から自動的に評価するためのソフトウェア。:contentReference[oaicite:1]{index=1}  
- 主に VASP の出力（構造変形・スピン軸変更・エネルギー変化など）を利用して計算を行う。:contentReference[oaicite:3]{index=3}  
- バージョン 2.0 では、非立方晶系（非-cubic）材料でも精度を改善するための新しい手法（線形フィッティング法）を実装。:contentReference[oaicite:4]{index=4}  

## 入手・依存環境  
- 公式 GitHub リポジトリ： https://github.com/pnieves2019/MAELAS :contentReference[oaicite:5]{index=5}  
- 必要条件（Ubuntu Linux の例）：
  - Python3 (≥ 3.6) がインストールされていること。:contentReference[oaicite:6]{index=6}  
  - Pythonパッケージ（例：pymatgen ≥2020.4.29, numpy ≥1.18.4, scipy ≥1.4.1）など。:contentReference[oaicite:7]{index=7}  

## インストール手順（簡易）  
- リポジトリをクローンまたは ZIP 取得： `git clone https://github.com/pnieves2019/MAELAS.git`  
- 必要なら `chmod +x install-requirements.sh` を実行。:contentReference[oaicite:8]{index=8}  
- `python3 setup.py install --user --install_reqs` を実行してユーザー環境にインストール。:contentReference[oaicite:9]{index=9}  
- インストール後、実行ファイル `maelas` が `~/.local/bin/` 等に配置されるため、`PATH` にそのディレクトリを含める。例：  
  `export PATH=/home/$USER/.local/bin:$PATH` :contentReference[oaicite:10]{index=10}  

## 基本的な使い方  
- 初期構造のリラックス： `maelas -r -i POSCAR0 -k 40` などを実行して構造を取得。:contentReference[oaicite:11]{index=11}  
- 入力構造をもとに、変形構造を生成：  
  - `maelas -g -mode 1 -i POSCAR_rlx -k 70 -n 7 -s 0.01`（モード1：異方性磁歪係数）:contentReference[oaicite:12]{index=12}  
  - `maelas -g -mode 2 -i …`（モード2：異方性磁気弾性定数）:contentReference[oaicite:13]{index=13}  
  - `maelas -g -mode 3 -i …`（モード3：等方性磁気弾性／磁歪係数）:contentReference[oaicite:14]{index=14}  
- 計算後、結果抽出：  
  - `maelas -d -mode 1 -i POSCAR_rlx -n 7 > results.out` など。:contentReference[oaicite:15]{index=15}  

## 出力・計算対象量  
- 異方性磁歪係数 λ^{ani}、自発体積磁歪 ω_s^{ani}。:contentReference[oaicite:16]{index=16}  
- 異方性磁気弾性定数 b^{ani}。:contentReference[oaicite:17]{index=17}  
- 等方性磁気弾性定数 b^{iso}、等方性磁歪係数 λ^{iso}。:contentReference[oaicite:18]{index=18}  

## 注意事項・運用上のポイント  
- MAELAS は VASP の SOC（スピン軌道結合）を有効にしたスピン偏極計算を前提としていることが多い。:contentReference[oaicite:19]{index=19}  
- 変形パラメータ（-s）や変形数（-n）は材料の対称性・変形量に応じて調整が必要。:contentReference[oaicite:20]{index=20}  
- 同梱マニュアルや GitHub の `INSTALL`／`README` を必ずバージョンに合わせて参照すること。異なるバージョン間で仕様が変わる。  

## 参考リンク  
- GitHub リポジトリ： https://github.com/pnieves2019/MAELAS :contentReference[oaicite:21]{index=21}  
- 論文 “MAELAS 2.0: A new version …” P. Nieves et al. :contentReference[oaicite:22]{index=22}  
