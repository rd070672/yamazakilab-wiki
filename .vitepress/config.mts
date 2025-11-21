import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({

  base: '/yamazakilab-wiki/',
  srcDir: 'src',
  title: "Wiki | Yamazaki Lab",
  description: "山崎研究室における知見や経験をwikiとして共有します",
  head: [
    
    ['script', {}, `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-M4Z2H3LQ');`
    ],

    ["link", { rel: "icon", href: "https://rd070672.github.io/yamazakilab-wiki/images/favicon.png" }],
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
    nav: [
      { text: 'Home', link: '/' },
      { text: '計算', link: '/#計算' },
      { text: '実験', link: '/#実験' },
      { text: 'データサイエンス', link: '/#データサイエンス'},
      { text: '情報システム', link: '/#情報システム'},
      { text: 'ラボ運営', link: '/#ラボ運営'},
      { text: 'Website', link: 'https://tyamazaki.com' },
      { text: 'Github', link: 'https://github.com/rd070672/yamazakilab-wiki' },
    ],
    sidebar: [
      { text: '計算', link: '/calc', items: [
          { text: 'VASP v6.5.1のインストールメモ',  link: '/calc/vasp-install' },
          { text: 'VASPを用いたDFT計算',           link: '/calc/vasp-dft' },
          { text: 'vaspkit v1.5 メモ',             link: '/calc/vaspkit' },
          { text: 'phonopy v2.44.0 メモ',          link: '/calc/phonopy' },
          { text: 'MAELAS v3.0 メモ',              link: '/calc/maelas' },
          { text: 'Bader charge analysis メモ',    link: '/calc/bader-charge' },
          { text: 'SPR-KKR v8.6.0 のインストールメモ', link: '/calc/sprkkr-install' },
          { text: 'Wien2k v23.2 のインストールメモ',   link: '/calc/wien2k-install' },
          { text: 'mumax3 v3.11 のインストールメモ',   link: '/calc/mumax3-install' },
          { text: 'mumax3 を用いた LLG 計算',          link: '/calc/mumax3-llg' },
          { text: '拡張版 mumax+ による磁気弾性計算',   link: '/calc/mumaxplus' },
          { text: 'COMSOL Multiphysics v6.4 のインストールメモ', link: '/calc/comsol-install' },
          { text: '固体力学計算',                      link: '/calc/comsol-solid' },
          { text: 'AC/DC計算',                        link: '/calc/comsol-ac-dc' },
          { text: 'LLG計算',                          link: '/calc/comsol-llg' },
          { text: 'LLG連成計算',                      link: '/calc/comsol-multiphys' },
          { text: 'Linux-PC 初期設定メモ',            link: '/calc/linux-setup' },
          { text: 'Masamune-II 利用メモ',             link: '/calc/masamune' },
      ]},

      { text: '実験', link: '/exp', items: [
          { text: '装置類の引っ越し', link: '/'},
          { text: '土禁・フロアマット', link: '/'},
      ]},

      { text: 'データサイエンス', link: '/data', items: [
          { text: '装置類の引っ越し', link: '/'},
          { text: '土禁・フロアマット', link: '/'},
      ]},
      { text: 'ラボ運営', link: '/lab', items: [
          { text: '装置類の引っ越し', link: '/'},
          { text: '土禁・フロアマット', link: '/'},
          { text: '机・椅子（居室）', link: '/'},
          { text: '机・椅子（実験室）', link: '/'},
          { text: 'Wi-Fiのセットアップ', link: '/'},
        
          { text: '家電類', link: '/'},
          { text: 'サーバールーム', link: '/'},
          { text: 'クリーンベンチ', link: '/'},
          { text: 'シンク周り', link: '/'},
      ]},
      { text: 'Website', link: 'https://tyamazaki.com' },
      { text: 'Github', link: 'https://github.com/rd070672/yamazakilab-wiki' },
    ],
    socialLinks: [
      { icon: 'x', link: '/' },
      { icon: 'github', link: 'https://github.com/rd070672/yamazakilab-wiki' }
    ],
    footer: {
      copyright: '© 2026 Yamazaki Lab Wiki',
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
    }
  },

})
