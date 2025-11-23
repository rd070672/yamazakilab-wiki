# VASPKIT
作成日：2025年11月23日

## 概要

- VASPKIT は VASP 用のプリ・ポストプロセスツール（入力生成＋結果解析）  
- 対応 OS：Windows / macOS / Linux（バイナリ配布）  
- v1.5 系の実行ファイルは SourceForge のリリースページから入手する  

## 入手方法

- 公式サイト：<https://vaspkit.com/>
- インストールページ：<https://vaspkit.com/installation.html>  
- Linux 用バイナリの例：`vaspkit.1.5.1.linux.x64.tar.gz`（SourceForge）  

## Linux（Ubuntu）でのインストール手順（例）

- 任意の作業ディレクトリへ移動：
  - `cd ~/tools` など
- アーカイブをダウンロード：
  - `wget https://.../vaspkit.1.5.1.linux.x64.tar.gz`（実際の URL は SourceForge ページを参照）
- 展開：
  - `tar zxvf vaspkit.1.5.1.linux.x64.tar.gz`
- 展開先例：
  - `~/tools/vaspkit.1.5.1/`（中に `vaspkit` 実行ファイルや `doc/`・`examples/` などが入っている）  
- パスを通す（例：`~/.bashrc` に追記）：
  - `export PATH="$HOME/tools/vaspkit.1.5.1:$PATH"`
- 設定反映：
  - `source ~/.bashrc`
- 動作確認：
  - 端末で `vaspkit` と打ち、対話メニューが立ち上がることを確認

## 初期設定（~/.vaspkit）

- 配布ディレクトリ内にある設定ファイル `.vaspkit` をホームディレクトリへコピー：
  - 例：`cp ~/tools/vaspkit.1.5.1/.vaspkit ~/`  
- `~/.vaspkit` 内で、必要に応じて以下を設定：
  - VASP 実行ファイルや Python のパス（`PYTHON_BIN` など）  
  - デフォルトのエネルギー単位・k-path オプションなど  
- 設定変更後は再度 `vaspkit` を起動して反映を確認

## 基本的な使い方（例）

- VASP 計算ディレクトリに移動してから `vaspkit` を実行する  
- 対話メニューでタスク番号を入力して処理を選択：
  - 例：VASP 入力生成・チェック（KPOINTS/INCAR/POTCAR など）
  - 例：弾性定数や EOS の解析（応力–ひずみ・エネルギー–ひずみ）  
  - 例：DOS・バンド構造・電荷密度・仕事関数などの解析タスク  
- コマンドラインモードも利用可能（スクリプトから呼び出したい場合に有用）

## 参考リンク

- VASPKIT 公式トップ：<https://vaspkit.com/>  
- Installation：<https://vaspkit.com/installation.html>  
- Features（タスク一覧）：<https://vaspkit.com/features.html>  
- Tutorials（Quick Start など）：<https://vaspkit.com/tutorials.html>  
