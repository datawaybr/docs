import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "DataWay BR",
  description: "Guia de estudos para dominar a IA",
  base: '/docs/',
  themeConfig: {
    nav: [
      { text: 'Página Inicial', link: '/' },
      { text: 'Plataforma', link: 'https://datawaybr.short.gy/website-header-acesso-plataforma' },
    ],
    sidebar: [
      {
        text: 'Guia',
        items: [
          { text: 'Dataway Prime', link: '/dataway-prime/getting-started' },
          { text: 'Engenharia de dados', link: '/data-engineering/getting-started' },
          { text: 'Engenharia de IA', link: '/ai-engineering/getting-started' },
          {
            text: 'Playlists do Youtube',
            link: 'https://www.youtube.com/@datawaybr',
            items: [
              { text: 'Engenharia de IA', link: 'https://www.youtube.com/playlist?list=PLLddHoFK19tCThtz50bBMs3E7qgMBkI3y' },
              { text: 'Engenharia de Dados', link: 'https://www.youtube.com/playlist?list=PLLddHoFK19tDK-vIWv_cxjuShWxg88t8A' },
            ]
          }
        ]
      }
    ]
  }
})