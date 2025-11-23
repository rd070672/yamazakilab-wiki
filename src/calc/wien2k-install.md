# WIEN2k（全電子 FP-(L)APW+lo 第一次原理計算コード）
作成日：2025年11月23日

## 概要

- WIEN2k は、周期固体の電子構造計算のための全電子 DFT コード。  
- 基底は full-potential (linearized) augmented plane-wave + local orbitals [FP-(L)APW+lo] 法で、バンド構造計算としては最も厳密な手法の一つ。:contentReference[oaicite:0]{index=0}  
- 相対論効果（スピン軌道相互作用など）を含む計算が可能で、多くのオプション・ポストプロセスツール（w2w, w2web など）を備える。:contentReference[oaicite:1]{index=1}  

## 最新バージョン

- 現在の最新版は **WIEN2k_24.1**。:contentReference[oaicite:2]{index=2}  
- 公開日は 2024 年 8 月 5 日。:contentReference[oaicite:3]{index=3}  
- 23.2 → 24.x では、バグ修正といくつかの新機能が追加されている（init 系ツールの挙動変更など）。:contentReference[oaicite:4]{index=4}  

## ライセンスと入手方法

- ライセンス形態：有償・プロプライエタリ（アカデミック版と商用版あり）。:contentReference[oaicite:5]{index=5}  
- 購入・登録は公式サイトから行う：  
  - 公式サイト：http://susi.theochem.tuwien.ac.at/ :contentReference[oaicite:6]{index=6}  
- 登録ユーザーは「registered users」ページから最新版（WIEN2k_24.x）の tar アーカイブとアップデート情報を取得できる。:contentReference[oaicite:7]{index=7}  

## インストールの概要（Linux クラスタ / ワークステーション）

- サポート OS：Linux / Unix 系。計算サーバ・HPC クラスタ上での利用を想定。:contentReference[oaicite:8]{index=8}  
- 必要ソフトウェア（例）：
  - Fortran コンパイラ（Intel oneAPI ifx/ifort または gfortran）  
  - C/C++ コンパイラ  
  - MPI（並列版を使う場合）  
  - FFTW3 などの数値ライブラリ（ELPA 連携は推奨）:contentReference[oaicite:9]{index=9}  
- 典型的な手順（23.2, 24.1 で類似）：
  - ダウンロードした `WIEN2k_24.1.tar` を作業ディレクトリに配置。  
  - `tar -xvf WIEN2k_24.1.tar` で展開し、同梱スクリプト `./check_minimal_software_requirements.sh` で依存関係をチェック。:contentReference[oaicite:10]{index=10}  
  - `./expand_lapw` でソースを展開し、`./siteconfig` でコンパイラやライブラリ、MPI 設定を対話的に指定。:contentReference[oaicite:11]{index=11}  
  - `make` またはバージョンに応じたビルドスクリプトでコンパイル。  
  - モジュール環境では `WIEN2K/24.1-...` などのモジュールが提供されている場合もある。:contentReference[oaicite:12]{index=12}  

## 利用上のポイント

- 入門用には、w2web（ブラウザベース GUI）や多数の tutorial が提供されている。:contentReference[oaicite:13]{index=13}  
- 大規模計算では、OpenMP と MPI のハイブリッド並列、ELPA を用いた固有値ソルバなどを活用することで性能を向上できる。:contentReference[oaicite:14]{index=14}  
- 23.2 以降では `init_lapw` の挙動が変更され、バッチモードが標準になっている（対話モードは `init_lapw -m`）。:contentReference[oaicite:15]{index=15}  

## 参考リンク

- 公式サイト（最新版・アップデート情報）：  
  - http://susi.theochem.tuwien.ac.at/ :contentReference[oaicite:16]{index=16}  
- WIEN2k の概要・最新版（24.1）まとめ：:contentReference[oaicite:17]{index=17}  
- HPC システム向け WIEN2k 24.1 モジュール例：:contentReference[oaicite:18]{index=18}  
- 日本語による使用解説・インストールメモ（23.2 など）：:contentReference[oaicite:19]{index=19}  


