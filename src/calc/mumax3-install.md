# mumax3 v3.11のインストールメモ
作成日：2025年11月19日

## Mumax3 install

- 公式ダウンロード： https://mumax.github.io/download.html
- 対応条件： Linux／NVIDIA Driver ≥ 525.60.13
- 対応 CUDA Compute Capability： 7.5 ≤ CC ≤ 12.0（例：CUDA 12.9 版）
- `cd mumax3.11.1_linux_cuda12.9` で展開先に移動
- `.bashrc` に以下を追加：
  - `export PATH=$PATH:/home/rc/mumax3.11.1_linux_cuda12.9`
- GitHub ドキュメント： https://github.com/mumax/3/?tab=readme-ov-file
- 必要コンポーネント：
  - NVIDIA driver
  - Go
  - CUDA
  - C toolchain

## Install Go

- インストール案内：https://go.dev/doc/install
- `.bashrc` に以下を追加：
  - `export PATH=$PATH:/usr/local/go/bin`
  - `export PATH=$PATH:/home/rc/go1.25.4.linux-amd64/go/`
- `go1.25.4.linux-amd64` をダウンロードして `~/` に配置

## Go 用ディレクトリ作成

- `mkdir -p ~/go-packages`

## .bashrc の修正

- Go (for mumax3) 用設定
- `export GOROOT="$HOME/go1.25.4.linux-amd64/go"`
- `export GOPATH="$HOME/go-packages"`
- `export PATH="$PATH:$GOROOT/bin:$GOPATH/bin"`
- `source ~/.bashrc` を実行して反映

## インストール作業

- `mkdir -p $GOPATH/src/github.com/mumax`
- `cd $GOPATH/src/github.com/mumax`
- `git clone https://github.com/mumax/3.git`
- `cd 3`
- `go mod init github.com/mumax/3`
- `go mod tidy`
- CUDA Compute Capability 設定：
  - `export CUDA_CC=89`（例：RTX 4090 → cc 8.9）
- `make realclean`
- `make`

## インストール確認

- 実行確認： `$GOPATH/bin/mumax3`
- パス確認： `which -a mumax3`
  - 出力例： `/home/rc/go-packages/bin/mumax3`
- 動作テスト： `mumax3 -test`
  - バージョン例： `mumax 3.11.1 [linux_amd64 go1.25.4(gc) CUDA-12.8]`
  - commit hash、CPU/GPU 情報、OS 情報などが表示
  - 注意書き（license / citation）も表示

## Mumax+ install

- 公式手順： https://mumax.github.io/plus/install.html
- 必要パッケージ：
  - CUDA / C++
  - Conda
  - Git
  - CPython / pip
  - miniconda
- `git clone --recursive https://github.com/mumax/plus.git mumaxplus`
- `cd mumaxplus`
- `conda env create -f environment.yml`
- ToS 2つに同意 → accept
- `conda activate mumaxplus`
- `pip install .`
- 動作確認：
  - `python examples/standardproblem4.py`