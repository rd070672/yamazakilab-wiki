# mumaxのインストール方法

作成日：2025年11月19日

    a. Mumax3 install
        a. https://mumax.github.io/download.html
        b. Linux > Driver ≥ 525.60.13 & 7.5 ≤ CC ≤ 12.0 (CUDA 12.9)
        c. cd mumax3.11.1_linux_cuda12.9
        d. export PATH=$PATH:/home/rc/mumax3.11.1_linux_cuda12.9 in .bashrc
        e. https://github.com/mumax/3/?tab=readme-ov-file
        f. 必要なコンポネント：NVIDIA driver, Go, CUDA, and C
    
    
    b. Install Go
        a. https://go.dev/doc/install
        b. export PATH=$PATH:/usr/local/go/bin in .bashrc
        c. export PATH=$PATH:/home/rc/go1.25.4.linux-amd64/go/
        d. Download go1.25.4.linux-amd64
        e. Locate on home/rc
    
    
    c. mkdir -p ~/go-packages
    
    d. .bashrcの修正
        a. # Go (for mumax3)
        b. export GOROOT="$HOME/go1.25.4.linux-amd64/go" 
        c. export GOPATH="$HOME/go-packages"
        d. export PATH="$PATH:$GOROOT/bin:$GOPATH/bin"
    e. source ~/.bashrc
    
    f. mkdir -p $GOPATH/src/github.com/mumax
    g. cd $GOPATH/src/github.com/mumax
    h. git clone https://github.com/mumax/3.git
    i. cd 3
    j. go mod init github.com/mumax/3
    k. go mod tidy
    l. export CUDA_CC=89
    m. make realclean
    n. make
    
    o. インストールの確認
        a. $GOPATH/bin/mumax3
        b. which -a mumax3
            i. /home/rc/go-packages/bin/mumax3
        c. mumax3 -test
            i. //mumax 3.11.1 [linux_amd64 go1.25.4(gc) CUDA-12.8]
            ii. //commit hash: 797c22bd
            iii. //CPU info: INTEL(R) XEON(R) SILVER 4516Y+, Cores: 24, MHz: 799.674
            iv. //GPU info: NVIDIA GeForce RTX 4090(24088MB), CUDA Driver 12.8, cc=8.9, using cc=89 PTX
            v. //OS  info: Ubuntu 24.04.3 LTS, Hostname: ty2025
            vi. //Timestamp: 2025-11-19 18:07:57
            vii. //(c) Arne Vansteenkiste, Dynamat LAB, Ghent University, Belgium
            viii. //This is free software without any warranty. See license.txt
            ix. //********************************************************************//
            x. //  If you use mumax in any work or publication,                      //
            xi. //  we kindly ask you to cite the references in references.bib        //
            xii. //********************************************************************//
            xiii. 
    
    
    p. Mumax+ install
    q. https://mumax.github.io/plus/install.html
    r. Cuda/c++/Conda/Git/CPython/pip/miniconda install
    s. git clone --recursive https://github.com/mumax/plus.git mumaxplus
    t. cd mumaxplus
    u. conda env create -f environment.yml
    v. 2つのToSへの同意（accept）
    w. conda activate mumaxplus
    x. pip install .
    y. 確認
        a. python examples/standardproblem4.py




