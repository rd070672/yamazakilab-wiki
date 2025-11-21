# VASPのインストール方法

作成日：2025年11月17日

## VASPのバージョン
2025年現在では、vaspはvasp6.5.1である。

## 参考リンク
インストールガイダンス
https://vasp.at/wiki/Installing_VASP.6.X.X

a. Get/check gcc and curl
    1. rc@ty2025:~$ gcc --versionで確認
    2. gcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0
    3. まずは、curlインストール
    4. sudo apt install curl

b. Intel® oneAPI Base Toolkit              
    1.  https://www.intel.com/content/www/us/en/developer/tools/oneapi/base-toolkit-download.html?packages=oneapi-toolkit&oneapi-toolkit-os=linux&oneapi-lin=apt 
    2. 基本的に上のリンクに従う 
    3. Download->Linux->APT-> 
    4. sudo apt update 
    5. sudo apt install -y gpg-agent wget  
    6. # download the key to system keyring
    7. wget -O- https://apt.repos.intel.com/intel-gpg-keys/GPG-PUB-KEY-INTEL-SW-PRODUCTS.PUB \
    8. | gpg --dearmor | sudo tee /usr/share/keyrings/oneapi-archive-keyring.gpg > /dev/null
    9. # add signed entry to apt sources and configure the APT client to use Intel repository:
    10. echo "deb [signed-by=/usr/share/keyrings/oneapi-archive-keyring.gpg] https://apt.repos.intel.com/oneapi all main" | sudo tee /etc/apt/sources.list.d/oneAPI.list
    11. sudo apt update 
    12. sudo apt install intel-oneapi-base-toolkit 
    13. sudo apt update
sudo apt -y install cmake pkg-config build-essential 
    14. which cmake pkg-config make gcc g++ 
    15. 確認済み
    16.  . /opt/intel/oneapi/2025.3/oneapi-vars.sh
    17. oneapi-cli
    18. とするとウィンドウが開いて何かをテストしようとするがよくわからず閉じる

c.  Intel® oneAPI HPC Toolkit 
    1. Download->Linux->APT-> 
    2. https://www.intel.com/content/www/us/en/developer/tools/oneapi/hpc-toolkit-download.html?packages=hpc-toolkit&hpc-toolkit-os=linux&hpc-toolkit-lin=apt
    3. 上記リンクの通りに実行
    4. 公開鍵のsyntacエラーが出るので、gptに相談
    5. 打ち直したらエラーは解決
    6. NVIDIA HPC SDK 25.3 Downloads
    7. https://developer.nvidia.com/nvidia-hpc-sdk-253-downloads
    8. Linux x86_64
    9. Bundled with CUDA version 12.8
    10. curl 
https://developer.download.nvidia.com/hpc-sdk/ubuntu/DEB-GPG-KEY-NVIDIA-HPC-SDK
 | sudo gpg --dearmor -o 
/usr/share/keyrings/nvidia-hpcsdk-archive-keyring.gpg
    11. echo 'deb 
[signed-by=/usr/share/keyrings/nvidia-hpcsdk-archive-keyring.gpg] 
https://developer.download.nvidia.com/hpc-sdk/ubuntu/amd64 /' | sudo tee
 /etc/apt/sources.list.d/nvhpc.list
    12. sudo apt-get update -y
    13. sudo apt-get install -y nvhpc-25-3
    14. Intel OneAPI Base Kitをインストールした場合、基本的にVASPをコンパイルするために必要なBLAS、LAPACK、ScaLAPACKはすべてIntel MKL（Math Kernel Library）に含まれているため、別途インストールする必要はありません。ただし、FFTW（Fast Fourier Transformのライブラリ）はIntel MKLに含まれていないため、別途FFTWをインストールする必要があります。
    
d. MPIの設定
    1. .bashrcの一番下に、
    2. source /opt/intel/oneapi/setvars.sh
    3. を追加

e. FFTW
    i. https://www.fftw.org/download.html
    ii. Download fftw-3.3.10.tar.gz
    iii. 参考URL：http://www.fftw.org/fftw2_doc/fftw_6.html
        i. フォルダをhomeに移動
        ii. tar -xvzof fftw-3.3.8.tar.gz（解凍）
        iii. cd fftw-3.3.10
        iv. (./configure)
        v. ./configure --enable-mpi --enable-openmp --enable-shared
        vi. make
        vii. fftw-wisdom.c 
        ファイル内の bench_main 関数で、snprintf 関数の使用に関する警告が複数回表示されています。具体的には、フォーマット文字列にある %s が想定よりも大きなデータを書き込もうとして、バッファがオーバーフローする可能性があるという警告です。
        viii. sudo make install

f. Install VASP
    i. Boxからダウンロードして解凍
        i. Vasp.6.5.1.tgz
        ii. tar -xzvf vasp.6.5.1.tgz
    ii. cd vasp.6.5.1
    iii. cp arch/makefile.include.intel  ./makefile.include
    iv. https://www.vasp.at/wiki/index.php/Makefile.include.oneapi
    v. を参考に、make.includeを修正
        i. FC          = mpiifort -fc=ifx     #2024年からifortはifxに変更
        ii. FCL         = mpiifort -fc=ifx
        iii. CC_LIB      = icx                    #2024にiccから変更
        iv. CXX_PARS    = icpx             #icpcから変更
        v. MKLROOT    ?= /opt/intel/oneapi/mkl/latest
    vi. パスを修正
        i. export PATH=/opt/intel/oneapi/mpi/latest//bin:$PATH
        ii. export LD_LIBRARY_PATH=/usr/lib/x86_64-linux-gnu:$LD_LIBRARY_PATH
    vii. 
    viii. Make.includeに以下を追加
    ix. 
        i. MKLROOT    = /opt/intel/oneapi/mkl/latestについてパスを入力
        ii. LLIBS      += -L$(MKLROOT)/lib/intel64 -libmkl_scalapack_lp64 -libmkl_blacs_intelmpi_lp64
        iii. LLIBS += -L/usr/lib/x86_64-linux-gnu -lstdc++
    x. 
    xi. make DEPS=1 -j12 all ->エラーが出てしまう。
    xii. nano ~/.bashrc
        i. source /opt/intel/oneapi/setvars.sh
        ii. 
    xiii. 失敗した場合、sudo make veryclean
    xiv. make DEPS=1 -j18 all
    xv. Make test (takes 30-60 min)
    xvi. ==================================================================
    xvii. SUMMARY:
    xviii. ==================================================================
    xix. The following tests failed, please check the output file manually:
    xx. bulk_InP_SOC_G0W0_sym bulk_InP_SOC_G0W0_sym_RPR bulk_SiO2_LOPTICS bulk_SiO2_LOPTICS_RPR bulk_SiO2_LPEAD bulk_SiO2_LPEAD_RPR H2Ostretch_efor SiC8_GW0R Tl_x Tl_x_RPR Tl_y Tl_y_RPR Tl_z Tl_z_RPR
    xxi. make[1]: *** [makefile:21: test] Error 1
    xxii. make[1]: Leaving directory '/home/rc/vasp.6.5.1/testsuite'
    xxiii. make: *** [makefile:36: test] Error 2
    xxiv. インストール完了

g. MAELAS install
    i. https://github.com/pnieves2019/MAELAS
    ii. Clone > HTTPS > Download zip
    iii. python3 –version
    iv. sudo apt update
    v. sudo apt install -y python3-setuptools python3-pip
    vi. chmod +x install-requirements.sh
    vii. python3 setup.py install --user –install_reqs
    viii. export PATH=/home/rc/.local/bin/:$PATH in .bashrc

h. Phonopy install
    i. https://phonopy.github.io/phonopy/install.html
    ii. git clone https://github.com/phonopy/phonopy.git
    iii. cd vasp.6.5.1/phonopy
    iv. sudo apt update
    v. sudo apt install -y python3-venv python3-pip
    vi. python3 -m venv ~/venv-phonopy
    vii. source ~/venv-phonopy/bin/activate
    viii. pip install . -vvv
    ix. システム Python には一切触らず、
 ~/venv-phonopy の中だけに phonopy（と依存パッケージ）が入ります。
    x. 以後、phonopy を使うときは
        i. source ~/venv-phonopy/bin/activate
        ii. phonopy --version     # 動くか確認

Vaspkit install
https://vaspkit.com/installation.html

Barder charge analysis
https://theory.cm.utexas.edu/henkelman/code/bader/

