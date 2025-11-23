# SPR-KKR のインストールメモ
作成日：2025年11月23日

## 前提条件

- 対象 OS の例：
  - Ubuntu 20.04 LTS（推奨例）
  - Ubuntu 22.04 LTS（新しめの環境でも概ね同様の手順で対応可）
- SPR-KKR は配布形態やバージョンにより構成が異なるため、**必ず同梱のマニュアル（例：SPRKKR 7.7 / 8.6 Manual の “Installation” 章）を参照してバージョンに合った make 設定を確認すること**
- 推奨コンパイラ・ライブラリ（例）：
  - Fortran コンパイラ：`gfortran` または Intel oneAPI Fortran (`ifx` / `ifort`)
  - C コンパイラ：`gcc` または Intel `icx`
  - BLAS / LAPACK：システム標準（`libblas-dev`, `liblapack-dev`）もしくは Intel MKL
  - FFTW3：`libfftw3-dev`
  - MPI（並列計算を行う場合）：`openmpi-bin` + `libopenmpi-dev` または Intel MPI
- 典型的に必要となるパッケージ（Ubuntu）：
  - `sudo apt update`
  - `sudo apt install -y build-essential gfortran gcc g++ cmake git libblas-dev liblapack-dev libfftw3-dev`
  - MPI を使う場合：`sudo apt install -y openmpi-bin libopenmpi-dev`

## 配布ファイルの入手

- SPR-KKR は開発グループから配布される：
  - 公式サイト：  
    - https://www.ebert.cup.uni-muenchen.de → Software → SPRKKR
  - バージョン例：
    - SPRKKR 7.7
    - SPRKKR 8.6
- ライセンスページから登録し、ダウンロードリンクを取得：
  - 通常は tar.gz 形式のアーカイブ（例：`sprkkr-8.6.tar.gz` のような名称）
- ダウンロードしたアーカイブを作業ディレクトリへ保存：
  - 例：`~/codes/SPR-KKR/` など

## ソースコードの展開

- 作業ディレクトリを作成：
  - `mkdir -p ~/codes/SPR-KKR`
  - `cd ~/codes/SPR-KKR`
- アーカイブを展開：
  - `tar -xzf sprkkr-*.tar.gz`
- 展開後のディレクトリに移動：
  - `cd sprkkr-*/`
- 同梱ファイルの確認：
  - `README` または `readme.txt`
  - `INSTALL` またはマニュアル PDF のインストール章
  - `src/` ディレクトリ（Fortran ソース群）
  - `examples/` あるいは `test/` ディレクトリ（テスト用入力）

## ビルド用設定ファイルの確認・編集

- SPR-KKR のバージョンに応じて、ビルド制御ファイル（例）が含まれている：
  - 例：`make.inc`, `make.inc.gfortran`, `make.inc.ifort` などの名前のファイル
  - あるいは `Makefile` 内でシステム種別ごとにコンパイラ・ライブラリパスを切り替える構造
- 手順の目安：
  - Ubuntu + gfortran を使う場合：
    - `cp make.inc.gfortran make.inc` のように、該当するテンプレートをコピー
    - その上で、BLAS / LAPACK / FFTW / MPI に応じてライブラリパス・ライブラリ名を修正
  - Intel oneAPI を使う場合：
    - `source /opt/intel/oneapi/setvars.sh` を実行して環境設定
    - `make.inc.ifort` のようなテンプレートをコピー／編集し、`MKLROOT` などのパスを設定
- `make.inc`（もしくは同等の設定ファイル）内で確認・編集すべき代表的項目：
  - Fortran コンパイラ指定：
    - `FC = gfortran` あるいは `FC = ifx` / `ifort`
  - オプション（最適化フラグ・OpenMP フラグなど）：
    - 例：`FFLAGS = -O2 -fopenmp` など（詳しくはマニュアル推奨値に従う）
  - BLAS / LAPACK / FFTW / MPI のリンク設定：
    - 例：`LIBS = -lblas -llapack -lfftw3` + MPI ライブラリ
    - Intel MKL を用いる場合は、MKL のリンク例（マニュアル・Intel ドキュメント記載）に従う
- ここでの設定内容は SPR-KKR のバージョンや配布 makefile に依存するため、**マニュアルの “Installation” 章にある推奨設定を必ず参照して整合を取ること**

## コンパイル（ビルド）

- ビルドは通常 `make` を用いて行う：
  - 例：`make` または `make all`
- 並列ビルドを行う場合：
  - `make -j8` など、利用コア数に応じて `-j` オプションを付与
- 成功すると、`bin/` あるいは `exec/` ディレクトリに実行ファイルが生成される：
  - 代表的な実行ファイルの例：
    - `kkrscf`（自己無撞着計算）
    - `kkrdos`（状態密度）
    - `kkrspc` など
- ビルド中にエラーが出た場合：
  - ライブラリの不足やパス設定ミスが多いので、
    - `libblas-dev`, `liblapack-dev`, `libfftw3-dev`, `openmpi-bin` 等のインストール状況を再確認
    - `make.inc` 等のライブラリ指定が正しいかをマニュアル記載例と比較

## 環境変数と PATH 設定

- SPR-KKR 実行ファイルを便利に使うために PATH に追加する：
  - 例：インストール先を `/home/rc/sprkkr/bin` とした場合
  - `.bashrc` に以下を追加：
    - `export PATH="$HOME/sprkkr/bin:$PATH"`
  - 設定反映：
    - `source ~/.bashrc`
- 確認：
  - `which kkrscf` でパスが通っているか確認
  - `kkrscf` を単独実行してヘルプやバージョン情報が出るか確認

## MPI を用いた実行のための設定

- OpenMPI を用いる場合：
  - `sudo apt install -y openmpi-bin libopenmpi-dev`
  - `mpirun --version` でインストール確認
- Intel MPI を用いる場合：
  - `source /opt/intel/oneapi/setvars.sh` を実行して環境設定
  - `mpiifort`, `mpirun` が正しく動作することを確認
- SPR-KKR の並列実行例：
  - `mpirun -np 8 kkrscf < inputfile > outputfile`
- MPI 実行時に必要なオプションや推奨設定は、マニュアルの MPI に関する節（あるいは別途配布される “MPI HowTo”）に従うこと

## テスト計算・サンプル実行

- 同梱の `examples/` または `test/` ディレクトリを用いて動作確認を行う：
  - 例：`cd examples/Fe_bcc_SCF/` のように移動
  - `kkrscf < Fe_bcc.inp > Fe_bcc.out` で自己無撞着計算を実行
- 結果がマニュアル記載のサンプルと同程度（エネルギー・モーメント等）となるかを比較
- MPI 版をテストする場合：
  - `mpirun -np 4 kkrscf < input.inp > out_mpi` などとして実行

## よくあるトラブルと確認ポイント

- **リンク時に BLAS / LAPACK のシンボルが見つからない**：
  - `libblas-dev` と `liblapack-dev` のインストール状況を確認
  - `make.inc` 内の `LIBS` の指定を見直し
- **FFTW まわりのエラー**：
  - `libfftw3-dev` がインストールされているか確認
  - インクルードパス（`-I`）とライブラリパス（`-L`）が正しいかチェック
- **MPI 実行時にエラー**：
  - OpenMPI と Intel MPI を混在させていないか（`which mpirun`, `which mpif90` で確認）
  - SPR-KKR をビルドした MPI と、実行時に利用している MPI が一致しているか確認
- **マニュアルとの差異**：
  - SPR-KKR のバージョンごとにビルドシステムやファイル構成が変わる場合があるため、
    - **必ず該当バージョンのマニュアル PDF（例：SPRKKR 8.6 Manual）内の“Installation”章を優先**すること
    - 本メモは Ubuntu 環境での典型的な手順の整理であり、細部（ファイル名・ターゲット名など）はバージョンに合わせて読み替えが必要
