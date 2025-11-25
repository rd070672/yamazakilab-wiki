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

    // editLink: {
    //   pattern: 'https://github.com/rd070672/yamazakilab-wiki/edit/main/src/:path',
    //   text: 'Edit this page on GitHub'
    // },

    nav: [
      { text: 'ホーム', link: '/' },
      { text: '計算', link: '/#計算' },
      { text: '実験', link: '/#実験' },
      { text: 'データサイエンス', link: '/#データサイエンス'},
      { text: '情報基盤', link: '/#情報基盤'},
      { text: 'ラボ運営', link: '/#ラボ運営'},
      { text: 'その他', items: [
        { text: 'About', link: '/about' },
        { text: 'Changelog', link: '/changelog' },
        { text: 'Website', link: 'https://tyamazaki.com' },
        { text: 'Github', link: 'https://github.com/rd070672/yamazakilab-wiki' },
      ]},
    ],
    sidebar: [
      { text: '計算', collapsed: false, items: [
        { text: '第一原理計算', collapsed: false, items: [
          { text: '第一原理計算の原理', link: '/calc/vasp' },
          { text: 'VASP のインストールメモ', link: '/calc/vasp-install' },
          { text: 'VASP の計算例', link: '/calc/vasp-dft' },
          { text: 'vaspkit メモ', link: '/calc/vaspkit' },
          { text: 'phonopy メモ', link: '/calc/phonopy' },
          { text: 'MAELAS メモ', link: '/calc/maelas' },
          { text: 'Bader 電荷解析メモ', link: '/calc/bader' },
          { text: 'Wien2k のインストールメモ', link: '/calc/wien2k-install' },
          { text: 'Wien2k の計算例', link: '/calc/wien2k' },
          { text: 'KKR の基本', link: '/calc/kkr' },
          { text: 'Akai-KKR のインストールメモ', link: '/calc/akaikkr-install' },
          { text: 'Akai-KKR の計算例', link: '/calc/akaikkr' },
          { text: 'SPR-KKR のインストールメモ', link: '/calc/sprkkr-install' },
          { text: 'SPR-KKR の計算例', link: '/calc/sprkkr' },
          { text: '第一原理計算 MD 計算の原理', link: '/calc/aimd' },
          { text: 'AIMD によるアモルファスの計算例', link: '/calc/aimd-amorphous' },
          { text: '第一原理計算フェーズフィールド計算の原理', link: '/calc/dft-pf' },
        ]},
        { text: 'MD 計算', collapsed: true, items: [
          { text: 'MD の原理', link: '/calc/md' },
          { text: 'MD 計算における古典的・機械学習ポテンシャルの選定', link: '/calc/md-potential' },{ text: '機械学習ポテンシャルの基礎', link: '/calc/ml-potential' },
          { text: 'LAMMPS のインストールメモ', link: '/calc/md-lammps-install' },
          { text: 'LAMMPS を用いた MD 計算', link: '/calc/md-lammps' },
          { text: 'ASE を用いた MD 計算', link: '/calc/md-ase' },
          { text: 'JAX / JAX-MD を用いた MD 計算', link: '/calc/md-jax' },
        ]},
        { text: 'モンテカルロ計算', collapsed: true, items: [
          { text: 'モンテカルロ計算の原理', link: '/calc/mc' },
          { text: 'マルコフ連鎖 MC 法', link: '/calc/mcmc' },
          { text: 'インバース MC 法', link: '/calc/mc-inverse' },
          { text: '運動論的 MC 法', link: '/calc/mc-kinetic' },
          { text: 'クラスター展開', link: '/calc/mc-cluster' },
          { text: 'MC計算による磁性体の計算例', link: '/calc/mc-mag' },
        ]},
        { text: 'フェーズフィール計算', collapsed: true, items: [
          { text: 'フェーズフィール計算の原理', link: '/calc/pf' },
          { text: 'Allen-Cahn 法に基づく計算例', link: '/calc/pf-allen-cahn' },
          { text: 'Cahn-Hilliard 法に基づく計算例', link: '/calc/pf-cahn-hilliard' },
        ]},
        { text: 'マルチフィジックス計算', collapsed: true, items: [
          { text: 'FEM と FDM の原理', link: '/calc/fem-fdm' },
          { text: '常微分方程式 (ODE) の基礎', link: '/calc/ode' },
          { text: '偏微分方程式 (PDE) の基礎', link: '/calc/pde' },
          { text: 'ボロノイ分割法', link: '/calc/volonoi' },
          { text: 'mumax3 のインストールメモ', link: '/calc/mumax3-install' },
          { text: 'mumax3 を用いた LLG 計算', link: '/calc/mumax3-llg' },
          { text: '拡張版 mumax+ による磁気弾性計算', link: '/calc/mumaxplus' },
          { text: 'COMSOL Multiphysics のインストールメモ', link: '/calc/comsol-install' },
          { text: 'COMSOL を用いた LLG 計算', link: '/calc/comsol-llg' },
          { text: 'COMSOL を用いた 電磁場-LLG 連成計算', link: '/calc/comsol-maxwell-llg' },
          { text: 'COMSOL を用いた 弾性場-LLG 連成計算', link: '/calc/comsol-maelas-llg' },
          { text: 'COMSOL を用いた 相変化解析', link: '/calc/comsol-pf' },
        ]},
      ]},

      { text: '実験', collapsed: true, items: [
          // { text: '装置類の引っ越し', link: '/'},
          // { text: '土禁・フロアマット', link: '/'},
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
      copyright: '© 2026- tyamazaki.com',
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
      // KaTeX を外部バンドルしないように
      noExternal: ['katex']
    }
  }
})
