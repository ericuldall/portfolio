import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Eric Uldall",
  description: "Creative Engineering",
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
      //{ text: 'For Fun', link: '/for-fun' }
    ],

    sidebar: [
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ericuldall' }
    ],
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
