# VASP v6.5.1 のインストールメモ
作成日：2025年11月17日

- VASP のバージョンは 2025年時点で vasp6.5.1
- 参考リンク： https://vasp.at/wiki/Installing_VASP.6.X.X

## gcc の確認： `gcc --version`
- gcc version: Ubuntu 13.3.0-6ubuntu2~24.04 (13.3.0)
- curl をインストール： `sudo apt install curl`

## Intel oneAPI Base Toolkit 
- 参考URL: https://www.intel.com/.../oneapi/base-toolkit-download.html
- Download → Linux → APT 手順に従う
- `sudo apt update`
- `sudo apt install -y gpg-agent wget`
- Intel GPG鍵取得：
  `wget -O- https://apt.repos.intel.com/intel-gpg-keys/... | gpg --dearmor | sudo tee /usr/share/keyrings/oneapi-archive-keyring.gpg`
- oneAPI リポジトリ追加：
  `echo "deb [signed-by=...] https://apt.repos.intel.com/oneapi all main" | sudo tee /etc/apt/sources.list.d/oneAPI.list`
- `sudo apt update`
- `sudo apt install intel-oneapi-base-toolkit`
- `sudo apt -y install cmake pkg-config build-essential`
- `which cmake pkg-config make gcc g++` で確認済み
- oneAPI 環境読み込み：
  `. /opt/intel/oneapi/2025.3/oneapi-vars.sh`
- `oneapi-cli` はテスト画面が開くが閉じて問題なし

## Intel oneAPI HPC Toolkit 
- 参考URL: https://www.intel.com/.../oneapi/hpc-toolkit-download.html
- 公開鍵 syntax エラーは再入力で解決

## NVIDIA HPC SDK 25.3  
- 参考URL: https://developer.nvidia.com/nvidia-hpc-sdk-253-downloads
- CUDA 12.8 bundled
- NVIDIA鍵取得：
  `curl https://developer.download.nvidia.com/... | sudo gpg --dearmor -o /usr/share/keyrings/nvidia-hpcsdk-archive-keyring.gpg`
- リポジトリ追加：
  `echo 'deb [signed-by=...] https://developer.download.nvidia.com/hpc-sdk/ubuntu/amd64 /' | sudo tee /etc/apt/sources.list.d/nvhpc.list`
- `sudo apt-get update -y`
- `sudo apt-get install -y nvhpc-25-3`

- Intel MKL に BLAS / LAPACK / ScaLAPACK が含まれるため追加不要
- FFTW は含まれないため別途インストールが必要

- `.bashrc` 末尾に追加：
  `source /opt/intel/oneapi/setvars.sh`

## FFTW インストール
- 参考： https://www.fftw.org/download.html
- `tar -xvzf fftw-3.3.10.tar.gz`
- `cd fftw-3.3.10`
- `./configure --enable-mpi --enable-openmp --enable-shared`
- `make`
- `sudo make install`
- 注意： `bench_main` 内 snprintf に関する警告あり

::: warning 注意
ファイル内の bench_main 関数で、snprintf 関数の使用に関する警告が複数回表示されています。具体的には、フォーマット文字列にある %s が想定よりも大きなデータを書き込もうとして、バッファがオーバーフローする可能性があるという警告です。
:::

## VASP インストール
- Box から vasp.6.5.1.tgz を取得して展開
- `tar -xzvf vasp.6.5.1.tgz`
- `cd vasp.6.5.1`
- `cp arch/makefile.include.intel ./makefile.include`
- 参考リンク： https://www.vasp.at/wiki/index.php/Makefile.include.oneapi

- makefile.include 修正：
  - `FC = mpiifort -fc=ifx` （ifort → ifx へ変更）
  - `FCL = mpiifort -fc=ifx`
  - `CC_LIB = icx` （icc → icx）
  - `CXX_PARS = icpx` （icpc → icpx）
  - `MKLROOT ?= /opt/intel/oneapi/mkl/latest`

- パス設定：
  - `export PATH=/opt/intel/oneapi/mpi/latest/bin:$PATH`
  - `export LD_LIBRARY_PATH=/usr/lib/x86_64-linux-gnu:$LD_LIBRARY_PATH`

- makefile追加設定：
  - `MKLROOT = /opt/intel/oneapi/mkl/latest`
  - `LLIBS += -L$(MKLROOT)/lib/intel64 -libmkl_scalapack_lp64 -libmkl_blacs_intelmpi_lp64`
  - `LLIBS += -L/usr/lib/x86_64-linux-gnu -lstdc++`

- `make DEPS=1 -j12 all` → エラーの場合あり
- `.bashrc` に再度 `source /opt/intel/oneapi/setvars.sh`
- 失敗時： `sudo make veryclean`
- 再試行： `make DEPS=1 -j18 all`

- `make test` (30–60 min)
- いくつかのテストが失敗するがインストールは完了

## MAELAS インストール  
  https://github.com/pnieves2019/MAELAS
- `sudo apt install -y python3-setuptools python3-pip`
- `python3 setup.py install --user --install_reqs`
- `.bashrc` に `export PATH=/home/rc/.local/bin/:$PATH` を追加

## Phonopy インストール手順  
  https://phonopy.github.io/phonopy/install.html
- `git clone https://github.com/phonopy/phonopy.git`
- `python3 -m venv ~/venv-phonopy`
- `source ~/venv-phonopy/bin/activate`
- `pip install . -vvv`
- システム Python に影響せず仮想環境内に完結
- 使用時は再度 activate → `phonopy --version`

## Vaspkit 
- 参考： https://vaspkit.com/installation.html

## Bader charge analysis  
- 参考： https://theory.cm.utexas.edu/henkelman/code/bader/
