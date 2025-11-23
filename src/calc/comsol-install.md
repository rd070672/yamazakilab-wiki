# COMSOL Multiphysics v6.4 のインストールメモ
作成日：2025年11月23日

## 前提条件

- 対応 OS：Ubuntu 22.04 / 20.04（64-bit）
- 必要パッケージ（推奨）：
  - `build-essential`
  - `libxext6`
  - `libxrender1`
  - `libxtst6`
  - `libxrandr2`
- GPUアクセラレーションを使用する場合は NVIDIA Driver + CUDA が必要
- 管理者権限（sudo）が必要

## インストーラ準備

- COMSOL公式サイトから v6.4 Linux版インストーラを入手
- ファイル形式例：
  - `comsol64_6.4_installer.tar.gz`
- ダウンロード後の配置例：
  - `/home/username/Downloads/comsol_installer/`
- 圧縮展開：
  - `tar -xzf comsol64_6.4_installer.tar.gz`

## インストール手順

- 展開ディレクトリへ移動：
  - `cd comsol64_6.4_installer`
- インストーラ実行（GUI）：
  - `./setup`
- GUI起動後の選択項目：
  - インストール先ディレクトリ指定（例： `/usr/local/comsol64/`）
  - ライセンス方式選択（FNL / クラスター / スタンドアロン）
  - 追加モジュール選択
- インストール完了後、シンボリックリンク作成（任意）：
  - `sudo ln -s /usr/local/comsol64/comsol /usr/local/bin/comsol`

## ライセンス設定

- ライセンスサーバー使用の場合：
  - ライセンスマネージャを別途インストール
  - `./setup` 内で「License Manager」選択
  - `port@hostname` 形式で指定（例： `1718@licenseserver`）
- スタンドアロン版の場合：
  - 提供されたライセンスファイル（`*.dat`）を読み込み
  - 通常 `/usr/local/comsol64/licenses/` に配置
- 設定ファイル確認：
  - `~/comsol/licenses/comsol.dlm`

## 起動確認

- GUI起動：
  - `comsol`
- バッチモード起動（GUIなし）：
  - `comsol batch -inputfile input.mph -outputfile result.mph`
- ライセンス接続確認：
  - 起動時にエラーが出ないことを確認

## MATLAB 連携（任意）

- MATLABがインストール済みであること
- `./setup` 内で「COMSOL with MATLAB」を有効化
- 必要時は環境変数設定：
  - `export LD_LIBRARY_PATH=/usr/local/comsol64/matlab:$LD_LIBRARY_PATH`

## アンインストール

- アンインストーラ起動：
  - `/usr/local/comsol64/uninstall`
- ライセンスマネージャ削除（該当時）：
  - `/usr/local/comsol_lm/uninstall`
- 自動生成ファイル削除（任意）：
  - `rm -rf ~/.comsol/`

## よくあるトラブル

- GUIが起動しない：
  - OpenGL依存 → 仮想環境では `comsol -3drender sw` を使用
- 権限エラー：
  - `sudo ./setup` で再実行
- ライセンス拒否：
  - サーバーポート開放確認（例：1718, 1719）
  - `ping licenseserver` で接続確認