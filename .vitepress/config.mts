import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Eric Uldall",
  description: "Software engineer and co-founder of Frozen Crow. Twenty-five years of building applications, infrastructure, and the occasional game.",
  head: [
    [
      'script',
      {
        async: true,
        src: '/chroma.vendors.js'
      }
    ],
    // Crawlers don't run JS, so social preview tags stay literal here.
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Eric Uldall' }],
    ['meta', { property: 'og:title', content: 'Eric Uldall — Engineer & Founder' }],
    ['meta', {
      property: 'og:description',
      content: 'Software engineer and co-founder of Frozen Crow. Twenty-five years of building applications, infrastructure, and the occasional game.'
    }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Projects', link: '/projects' },
      { text: 'What do I know?', link: '/what-do-i-know' },
      { text: 'History', link: '/history' },
      { text: 'Open Source', link: '/open-source-contributions' },
      { text: 'Contact Me', link: 'mailto:ericuldall@gmail.com' }
      //{ text: 'For Fun', link: '/for-fun' }
    ],

    sidebar: [
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ericuldall/portfolio' }
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
