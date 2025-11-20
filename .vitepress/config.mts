import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({

  base: '/yamazakilab-wiki/',
  srcDir: 'src',
  title: "Yamazakilab-wiki",
  description: "YNU山崎研究室における知見や経験をwikiとして共有します",
  head: [
    ['script', { async: true, src: 'https://www.googletagmanager.com/ns.html?id=GTM-M4Z2H3LQ' }],
    [
      'script',
      {},
      `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'GTM-M4Z2H3LQ');
      `
    ],
    ["link", { rel: "icon", href: "https://compphysschool.github.io/2026/images/compphys_icon.jpg" }],
    ["meta", { property: "og:image", content: "https://rd070672.github.io/yamazakilab-wiki/images/compphys_hp_top_1200.jpg" }],
    ["meta", { property: "og:site_name", content: "YNU山崎研究室" }],
    ["meta", { property: "twitter:card", content: "summary" }],
    ["meta", { property: "twitter:site", content: "@yamazakilab-ynu"}],
    ["meta", { property: "twitter:title", content: "YNU山崎研究室"}],
    ["meta", { property: "twitter:description", content: "YNU山崎研究室における知見や経験をwikiとして共有します"}],
    ["meta", { property: "twitter:image", content: "https://rd070672.github.io/yamazakilab-wiki/images/compphys_hp_top_1200.jpg" }]
  ],
  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: '計算', link: '/registration' },
      { text: '実験', link: '/timetable' },
      { text: '機械学習', link: '/about-sponsorship'},
      { text: 'ラボ運営', items: [
          { text: '2025年度', link: 'https://compphysschool.github.io/homepage2025/index.html'},
          { text: '2024年度', link: 'https://compphysspringschool2024.github.io/homepage2024/'},
          { text: '2023年度', link: 'https://hohno0223.github.io/comp_phys_spring_school2023/'}
      ]},
      { text: 'その他', link: '/others'},
    ],
    sidebar: [
      { text: 'Home', link: '/' },
      { text: '計算', link: '/registration' },
      { text: '実験', link: '/timetable' },
      { text: '機械学習', link: '/about-sponsorship'},
      { text: 'ラボ運営', items: [
          { text: '2025年度', link: 'https://compphysschool.github.io/homepage2025/index.html'},
          { text: '2024年度', link: 'https://compphysspringschool2024.github.io/homepage2024/'},
          { text: '2023年度', link: 'https://hohno0223.github.io/comp_phys_spring_school2023/'}
      ]},
      { text: 'その他', link: '/others'},
    ],
    socialLinks: [
      { icon: 'x', link: 'https://x.com/yamazakilab-ynu' },
      { icon: 'github', link: 'https://github.com/rd070672/yamazakilab-wiki' }
    ],
    footer: {
      copyright: '© 2026 Yamazakilab-ynu',
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
