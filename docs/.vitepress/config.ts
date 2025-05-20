import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "DataWay BR",
  description: "Guia de estudos para dominar a IA",
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
            text: 'Cursos',
            link: '/courses/getting-started',
            items: [
              { text: 'Essencial', link: '/courses/essential' },
              { text: 'IA', link: '/courses/ai' },
              { text: 'Especialização', link: '/courses/specialization' },
            ]
          },
          {
            text: 'Playlists do Youtube',
            link: 'https://www.youtube.com/@datawaybr',
            items: [
              { text: 'Engenharia de Dados', link: 'https://www.youtube.com/@datawaybr/streams' },
              { text: 'Engenharia de IA', link: 'https://www.youtube.com/@datawaybr/streams' },
            ]
          }
        ]
      }
    ]
  }
})