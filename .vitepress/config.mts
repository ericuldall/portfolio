import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Creative Engineering",
  description: "An online portfolio for an easy insight in to my developemnt experience over the years.",
  head: [
    [
      'script',
      {
        async: true,
        src: '/chroma.vendors.js'
      }
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'What do I know?', link: '/what-do-i-know' },
      { text: 'History', link: '/history' },
      { text: 'Open-Source Contributions', link: '/open-source-contributions' },
      { text: 'Contact Me', link: 'mailto:ericuldall@gmail.com' }
      //{ text: 'For Fun', link: '/for-fun' }
    ],

    sidebar: [
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ericuldall' }
    ],
    footer: {
      message: 'Built by me, using VitePress and Tailwind',
      copyright: 'Copyright © Eric Uldall'
    }
  },
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPNavBarTitle\.vue$/,
          replacement: fileURLToPath(
            new URL('./components/Title.vue', import.meta.url)
          )
        }
      ]
    }
  }
})
