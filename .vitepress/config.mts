import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({

  base: '/yamazakilab-wiki/',
  srcDir: 'src',
  title: "tyamazaki | Wiki",
  description: "山崎研究室における知見や経験をwikiとして共有します",
  lastUpdated: {text: 'Last updated', formatOptions: {dateStyle: 'short', timeStyle: 'medium'}},
  cleanUrls: true,
  markdown: {
    math: true,
  },

  head: [
    
    ['script', {}, `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-M4Z2H3LQ');`
    ],

    ["link", { rel: "icon", href: "https://rd070672.github.io/yamazakilab-wiki/images/favicon.png" }],
    ['link', { 
      rel: 'stylesheet', 
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css'
    }],

    ["meta", { property: "og:image", content: "https://rd070672.github.io/yamazakilab-wiki/images/top.jpg" }],
    ["meta", { property: "og:site_name", content: "山崎研究室" }],
    ["meta", { property: "twitter:card", content: "summary" }],
    ["meta", { property: "twitter:site", content: "@yamazakilab"}],
    ["meta", { property: "twitter:title", content: "山崎研究室"}],
    ["meta", { property: "twitter:description", content: "山崎研究室における知見や経験をwikiとして共有します"}],
    ["meta", { property: "twitter:image", content: "https://rd070672.github.io/yamazakilab-wiki/images/top.jpg" }]
  ],

  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    search: {
      provider: 'local'
    },

    returnToTopLabel: 'Return to top',

    editLink: {
      pattern: 'https://github.com/rd070672/yamazakilab-wiki/edit/main/src/:path',
      text: 'Edit this page on GitHub'
    },

    nav: [
      { text: 'ホーム', link: '/' },
      { text: '計算', link: '/#計算' },
      { text: '実験', link: '/#実験' },
      { text: 'データサイエンス', link: '/#データサイエンス'},
      { text: '情報基盤', link: '/#情報基盤'},
      // { text: 'ラボ運営', link: '/#ラボ運営'},
      { text: 'その他', items: [
        { text: 'About', link: '/about' },
        { text: 'Changelog', link: '/changelog' },
        { text: 'Website', link: '/#' },
        { text: 'Github', link: 'https://github.com/rd070672/yamazakilab-wiki' },
      ]},
    ],

    sidebar: [
      { text: '計算', collapsed: false, items: [
        { text: '第一原理計算', collapsed: false, items: [
          { text: '量子力学とシュレーディンガー方程式', link: '/calc/dft-basis' },
          { text: 'ブラケット記法の体系', link: '/calc/bra-ket' },
          { text: 'バンドアンフォールディング', link: '/calc/dft-unfolding' },
          { text: 'ブリルアンゾーン積分のテトラヘドロン法', link: '/calc/tetrahedron' },
          { text: 'ワニエ関数と局在軌道', link: '/calc/dft-wannier' },
          { text: '応答理論入門', link: '/calc/response-theory' },
          { text: '摂動論の基礎と応用', link: '/calc/perturbation' },
          { text: '密度汎関数摂動論', link: '/calc/dfpt' },
          { text: '時間依存密度汎関数理論（TDDFT）', link: '/calc/dft-td' },
          { text: '量子電子動力学（QED）法の原理と活用', link: '/calc/qed' },
          { text: '虚数時間発展法（ITE）の基礎', link: '/calc/dft-imarginary' },
          { text: '非調和フォノン理論と有限温度物性', link: '/calc/self-consistent-phonon' },
          { text: '局在電子系の磁性', link: '/calc/localized-electron-magnetism' },
          { text: '遍歴電子系の磁性', link: '/calc/itinerant-electron-magnetism' },
          { text: '遍歴電子系のストーナー条件', link: '/calc/stoner' },
          { text: 'RKKY相互作用と磁気秩序', link: '/calc/rkky' },
          { text: 'RKKY起源スピングラスの数値モデル', link: '/calc/rkky-calc' },
          { text: 'スピン軌道相互作用と行列要素', link: '/calc/spin-orbit-coupling' },
          { text: 'マグノン-フォノン相互作用の計算', link: '/calc/magnon-phonon' },
          { text: 'ベリー位相とトポロジカル応答の計算', link: '/calc/berry' },
          { text: 'ベリー曲率に基づく異常ホール効果・異常ネルンスト効果の第一原理計算', link: '/calc/ahe-ane-calc' },

          { text: '第一原理計算の基本原理', link: '/calc/dft' },
          { text: '第一原理計算を支える数値解法', link: '/calc/dft-calc' },
          { text: '第一原理計算ソフトウェアと特徴', link: '/calc/dft-software' },
          { text: 'VASPによる第一原理計算', link: '/calc/vasp-dft' },
          { text: '仮想結晶近似', link: '/calc/vasp-vca' },
          { text: 'VASPKITによる前処理・後処理', link: '/calc/vaspkit' },
          { text: 'Phonopy によるフォノン計算', link: '/calc/phonopy' },
          { text: 'MAELAS による磁気弾性効果の計算', link: '/calc/maelas' },
          { text: 'Bader電荷解析', link: '/calc/bader-charge-analysis' },
          { text: 'Wien2k の計算例', link: '/calc/wien2k' },
          { text: 'グリーン関数とKKR法', link: '/calc/kkr' },
          { text: '線形応答理論とKubo–Greenwood法', link: '/calc/kkr-kubo' },
          { text: '非平衡グリーン関数（NEGF）と量子輸送', link: '/calc/negf' },
          { text: 'ダイソン方程式と多体電子状態の記述', link: '/calc/dyson-derivation' },
          { text: 'ファインマンダイアグラム入門', link: '/calc/feynman-diagram' },
          { text: 'AkaiKKRによる不規則系電子状態計算', link: '/calc/akaikkr' },
          { text: 'SPR-KKRによる磁性計算', link: '/calc/sprkkr' },
          { text: 'Ju-KKRによる局所電子状態計算', link: '/calc/jukkr' },
          { text: 'TOMBOによる全電子混合基底法', link: '/calc/tombo' },
          { text: '核量子効果（NQE）を扱う第一原理計算', link: '/calc/nuclear-quantum-effects' },
          { text: '格子ボルツマン法（LBM）入門', link: '/calc/lattice-boltzmann-method' },
          { text: 'カオス理論と非線形ダイナミクス', link: '/calc/chaos' },
          { text: '量子カオス理論', link: '/calc/chaos-quantum' },
          { text: '格子QCDシミュレーション入門', link: '/calc/lattice-qcd' },
          { text: 'テンソルネットワーク入門', link: '/calc/tensor-network' },
          { text: '量子アニーリング', link: '/calc/quantum-annealing' },
          { text: '量子コンピュータの物理', link: '/calc/quantum-computer' },
          { text: '量子コンピュータ開発動向と展望', link: '/calc/quantum-computer-trend' },

          { text: '第一原理分子動力学（AIMD）の原理', link: '/calc/aimd' },
          { text: 'AIMDによるアモルファス設計', link: '/calc/aimd-amorphous' },
          { text: 'アモルファスの距離秩序と物理', link: '/calc/amorphous' },
          { text: 'アモルファスの構造と物性の計算手法', link: '/calc/amorphous-calc' },
          { text: 'アモルファスの構造解析手法', link: '/calc/amorphous-analysis' },
          { text: 'アモルファス固体の力学', link: '/calc/amorphous-solid' },
          { text: 'アモルファス固体の力学の計算方法', link: '/calc/amorphous-solid-calc' },
          { text: 'アモルファスにおける局所磁気モーメント', link: '/calc/amorphous-moment' },

          { text: '第一原理計算に基づくフェーズフィールド計算', link: '/calc/dft-pf' },

          { text: 'CALPHAD法（計算熱力学）による状態図・相平衡予測', link: '/calc/calphad' },
          { text: '平衡状態図の読み方', link: '/calc/phase-diagram' },
          { text: 'ランダウ理論と自由エネルギー', link: '/calc/landau' },
          { text: 'Ginzburg–Landau理論による相転移と空間秩序の記述', link: '/calc/landau-gl-theory' },
          { text: 'ギブス自由エネルギーに基づく合金設計', link: '/calc/gibbs-alloy' },

          { text: 'MD の原理', link: '/calc/md' },
          { text: 'MD の数値解法', link: '/calc/md-calc' },
          { text: 'MD 計算における原子間ポテンシャル選定', link: '/calc/md-potential' },
          { text: 'MD 計算と機械学習', link: '/calc/md-machine-learning' },
          { text: 'LAMMPS による MD 計算', link: '/calc/md-lammps' },
          { text: 'ASE・JAX による MD 計算', link: '/calc/md-ase-jax' },

          { text: 'モンテカルロ法の基礎', link: '/calc/mc' },
          { text: 'モンテカルロ法の数値解法', link: '/calc/mc-calc' },
          { text: '密度行列繰り込み群法', link: '/calc/density-matrix' },
          { text: 'クラスター展開モデル', link: '/calc/mc-cluster' },
          { text: '原子論的スピンモデル', link: '/calc/atomic-spin-model' },
          { text: 'マルコフ連鎖モンテカルロ（MCMC）法', link: '/calc/mcmc' },
          { text: 'リバースモンテカルロ (RMC) 法', link: '/calc/mc-reverse' },
          { text: 'キネティックモンテカルロ（KMC）法', link: '/calc/mc-kinetic' },
          { text: '量子モンテカルロ（QMC）法', link: '/calc/mc-quantum' },
          { text: 'グランドカノニカルモンテカルロ（GCMC）法', link: '/calc/mc-grand-canonical' },
          { text: 'レプリカ交換モンテカルロ（REMC）法', link: '/calc/mc-replica' },
          { text: 'レプリカ交換モンテカルロ（REMC）法によるスピングラス解析', link: '/calc/spin-glass-remc' },
          { text: 'スピングラスの物理と応用', link: '/calc/spin-glass-phys' },
          { text: '計算科学で読み解くスピングラス', link: '/calc/spin-glass-calc' },
          { text: 'アモルファス磁性におけるスピングラス', link: '/calc/spin-glass-amorphous' },
          { text: '量子スピングラス', link: '/calc/spin-glass-quantum' },

          { text: 'フェーズフィールド計算の原理', link: '/calc/pf' },
          { text: 'フェーズフィールド法の数値解法', link: '/calc/pf-calc' },
          { text: 'Allen–Cahn 法で記述する金属組織シミュレーション', link: '/calc/pf-allen-cahn' },
          { text: 'デンドライト成長のPFシミュレーション', link: '/calc/dendrite' },
          { text: 'Cahn–Hilliard 方程式で記述する金属組織シミュレーション', link: '/calc/pf-cahn-hilliard' },
          { text: 'フェーズフィールドクリスタル（PFC）法の基礎と応用', link: '/calc/phase-field-crystal' },

          { text: '有限差分法の原理と数値解法', link: '/calc/fdm' },
          { text: '有限要素法の原理', link: '/calc/fem' },
          { text: '有限要素法の数値解法', link: '/calc/fem-calc' },
          { text: '離散化とスケーラブル解法', link: '/calc/scalable' },
          { text: 'ガウス・ザイデル法', link: '/calc/fem-gauss-seidel' },
          { text: 'ヤコビ法と並列計算', link: '/calc/fem-jacobi' },
          { text: '常微分方程式 (ODE)と偏微分方程式 (PDE) の基礎', link: '/calc/ode-pde' },
          { text: 'ボロノイ分割法', link: '/calc/volonoi' },
          { text: 'LLG方程式に基づくマイクロ磁化シミュレーション', link: '/calc/llg' },
          { text: '反磁界（長距離相互作用）の数値解法', link: '/calc/demag-calc' },
          { text: 'マクスウェル方程式に基づく電磁界解析', link: '/calc/maxwell' },
          { text: 'マクスウェル方程式の導出と物質応答', link: '/calc/maxwell-derivation' },
          { text: '動く磁壁が誘起する局所渦電流', link: '/calc/eddy-current' },
          { text: '弾塑性構成モデルの基本方程式', link: '/calc/elasto-plasticity' },
          { text: '磁気弾性効果の定式化', link: '/calc/magneto-elasticity' },
          { text: 'mumax による LLG マイクロ磁化・磁気弾性シミュレーション', link: '/calc/mumax3-llg' },
          { text: 'COMSOL を用いた LLG 計算と連成解析', link: '/calc/comsol-llg' },
          { text: '有限要素法によるマイクロマグ計算の自作コード', link: '/calc/fem-llg' },
          { text: '3次元線形弾性のHex8有限要素ソルバ', link: '/calc/fem-solver' },
          { text: '磁気弾性連成（磁歪）をFEM弾性ソルバへ', link: '/calc/fem-maelas' },
          { text: 'FEniCSによる変分形式ベース有限要素解析', link: '/calc/fenics' },
        ] },
      ] },


    // ],
    // sidebar: [
    //   { text: '計算', collapsed: false, items: [
    //     { text: '第一原理計算', collapsed: false, items: [
    //       { text: '量子力学入門とシュレーディンガー方程式', link: '/calc/dft-basis' },
    //       { text: '第一原理計算の基本原理', link: '/calc/dft' },
    //       { text: 'ワニエ関数と局所軌道', link: '/calc/dft-wannier' },
    //       { text: '第一原理計算を支える数値解法', link: '/calc/dft-calc' },
    //       { text: '第一原理計算の各種ソフトウェアと特徴', link: '/calc/dft-software' },
    //       // { text: 'VASP のインストールメモ', link: '/calc/vasp-install' },
    //       { text: 'VASP の計算例', link: '/calc/vasp-dft' },
    //       { text: 'VASP における仮想結晶近似', link: '/calc/vasp-vca' },
    //       { text: 'VASPKIT の活用ノート', link: '/calc/vaspkit' },
    //       { text: 'phonopy メモ', link: '/calc/phonopy' },
    //       { text: 'MAELAS メモ', link: '/calc/maelas' },
    //       { text: 'Bader 電荷解析', link: '/calc/bader-charge-analysis' },
    //       // { text: 'Wien2k のインストールメモ', link: '/calc/wien2k-install' },
    //       { text: 'Wien2k の計算例', link: '/calc/wien2k' },
    //       { text: 'グリーン関数と KKR法', link: '/calc/kkr' },
    //       { text: '線形応答理論とKubo–Greenwood 法', link: '/calc/kkr-kubo' },
    //       // { text: 'Akai-KKR のインストールメモ', link: '/calc/akaikkr-install' },
    //       { text: 'AkaiKKR（KKR-CPA）による不規則系電子状態計算', link: '/calc/akaikkr' },
    //       // { text: 'SPR-KKR のインストールメモ', link: '/calc/sprkkr-install' },
    //       { text: 'SPR-KKRによる磁性計算', link: '/calc/sprkkr' },
    //       { text: 'Ju-KKRによる電子状態計算', link: '/calc/jukkr' },
    //       { text: '第一原理分子動力学（AIMD）の原理', link: '/calc/aimd' },
    //       { text: 'アモルファス構造・生成のためのAIMD活用', link: '/calc/aimd-amorphous' },
    //       { text: '距離秩序で読み解くアモルファス', link: '/calc/amorphous' },
    //       { text: 'アモルファスの構造解析手法', link: '/calc/amorphous-analysis' },
    //       { text: '第一原理計算フェーズフィールド計算の原理', link: '/calc/dft-pf' },
    //     ]},
    //     { text: '熱力学計算', collapsed: true, items: [
    //       { text: 'CALPHAD法（計算熱力学）による状態図・相平衡予測', link: '/calc/calphad.md' },
    //       { text: '状態図の読み方', link: '/calc/phase-diagram' },
    //       { text: 'ランダウ理論と自由エネルギー', link: '/calc/landau' },
    //     ]},
    //     { text: 'MD 計算', collapsed: true, items: [
    //       { text: 'MD 法の原理', link: '/calc/md' },
    //       { text: 'MD 法の数値解法', link: '/calc/md-calc' },
    //       { text: 'MD 計算における原子間ポテンシャル選定', link: '/calc/md-potential' },
    //       { text: 'MD 計算と機械学習', link: '/calc/md-machine-learning' },
    //       // { text: 'LAMMPS のインストールメモ', link: '/calc/md-lammps-install' },
    //       { text: 'LAMMPS による分子動力学（MD）計算', link: '/calc/md-lammps' },
    //       { text: 'ASE/ JAX-MD を用いた MD 計算', link: '/calc/md-ase-jax' },
    //     ]},
    //     { text: 'モンテカルロ計算', collapsed: true, items: [
    //       { text: 'モンテカルロ計算の原理', link: '/calc/mc' },
    //       { text: 'モンテカルロ計算の数値解法', link: '/calc/mc-calc' },
    //       { text: '密度行列繰り込み群法', link: '/calc/density-matrix' },
    //       { text: 'クラスター展開モデル', link: '/calc/mc-cluster' },
    //       { text: '原子論的スピンモデル', link: '/calc/atomic-spin-model' },
    //       { text: 'テンソルネットワーク入門', link: '/calc/tensor-network' },

    //       { text: 'マルコフ連鎖モンテカルロ法', link: '/calc/mcmc' },
    //       { text: '逆モンテカルロ法', link: '/calc/mc-inverse' },
    //       { text: '運動論的モンテカルロ法', link: '/calc/mc-kinetic' },
    //       { text: '量子モンテカルロ法', link: '/calc/mc-quantum' },
    //       { text: 'グランドカノニカルモンテカルロ法', link: '/calc/mc-grand-canonical' },
    //       { text: 'レプリカ交換モンテカルロ法', link: '/calc/mc-exchange' },
    //       { text: 'MC計算による磁性体の計算例', link: '/calc/mc-mag' },
    //       { text: 'REMCによるスピングラス解析', link: '/calc/spin-glass' },
    //     ]},
    //     { text: 'フェーズフィールド計算', collapsed: true, items: [
    //       { text: 'フェーズフィールド計算の原理', link: '/calc/pf' },
    //       { text: 'フェーズフィールド法の数値解法', link: '/calc/pf-calc' },
    //       { text: 'Allen-Cahn 法に基づく計算例', link: '/calc/pf-allen-cahn' },
    //       { text: 'Cahn-Hilliard 法に基づく計算例', link: '/calc/pf-cahn-hilliard' },
    //       { text: 'デンドライト成長シミュレーション', link: '/calc/dendrite' },
    //     ]},
    //     { text: 'マルチフィジックス計算', collapsed: true, items: [
    //       { text: '有限差分法の原理と数値解法', link: '/calc/fdm' },
    //       { text: '有限要素法の原理と数値解法', link: '/calc/fem' },
    //       { text: '常微分方程式 (ODE)と偏微分方程式 (PDE) の基礎', link: '/calc/ode-pde' },
    //       { text: 'ボロノイ分割法', link: '/calc/volonoi' },
    //       // { text: 'mumax3 のインストールメモ', link: '/calc/mumax3-install' },
    //       { text: 'mumax3 を用いた LLG 計算', link: '/calc/mumax3-llg' },
    //       { text: '拡張版 mumax+ による磁気弾性計算', link: '/calc/mumaxplus' },
    //       // { text: 'COMSOL Multiphysics のインストールメモ', link: '/calc/comsol-install' },
    //       { text: 'COMSOL を用いた LLG 計算', link: '/calc/comsol-llg' },
    //       { text: 'COMSOL を用いた 電磁場-LLG 連成計算', link: '/calc/comsol-maxwell-llg' },
    //       { text: 'COMSOL を用いた 弾性場-LLG 連成計算', link: '/calc/comsol-maelas-llg' },
    //       { text: 'COMSOL を用いた 相変化解析', link: '/calc/comsol-pf' },
    //     ]},
    //   ]},

      { text: '実験', collapsed: true, items: [
          { text: '装置類の引っ越し', link: '/'},
          { text: '土禁・フロアマット', link: '/'},
      ]},

      { text: 'データサイエンス', collapsed: true, items: [
          // { text: '装置類の引っ越し', link: '/'},
          // { text: '土禁・フロアマット', link: '/'},
      ]},

      { text: '情報基盤', collapsed: true, items: [
          // { text: '装置類の引っ越し', link: '/'},
          // { text: '土禁・フロアマット', link: '/'},
      ]},

      { text: 'ラボ運営', collapsed: true, items: [
          // { text: '装置類の引っ越し', link: '/'},
          // { text: '土禁・フロアマット', link: '/'},
          // { text: '机・椅子（居室）', link: '/'},
          // { text: '机・椅子（実験室）', link: '/'},
          // { text: 'Wi-Fiのセットアップ', link: '/'},
          // { text: '家電類', link: '/'},
          // { text: 'サーバールーム', link: '/'},
          // { text: 'クリーンベンチ', link: '/'},
          // { text: 'シンク周り', link: '/'},
      ]},

      // { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Changelog', link: '/changelog' },
      // { text: 'Website', link: 'https://tyamazaki.com' },
      // { text: 'Github', link: 'https://github.com/rd070672/yamazakilab-wiki' },
    ],

    socialLinks: [
      { icon: 'x', link: '/' },
      { icon: 'github', link: '/' }
    ],

    footer: {
      copyright: '© 2025- tyamazaki.com',
    },
  },

  // https://vitepress.dev/guide/extending-default-theme#overriding-internal-components
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPHome\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/VPHome.vue', import.meta.url)
          )
        },
        {
          find: /^.*\/VPNavBarHamburger\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/VPNavBarHamburger.vue', import.meta.url)
          )
        }

      ]
    },
    ssr: {
      noExternal: ['katex']
    }
  }
})
