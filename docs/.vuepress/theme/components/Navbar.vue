<template>
  <header ref="navbar"
          class="d-ps-sticky d-t0 d-x0 d-d-flex d-ai-center d-w100 d-pl8 d-pr12 d-h128 d-hmx64 d-bb d-bc-black-100 d-bgc-white d-zi-navigation js-navigation-header">
    <router-link class="js-header-logo d-btn d-py0" title="Go back to the homepage" to="/">
      <img alt="" :src="brandLogo">
    </router-link>
    <nav class="d-ml64 d-flow8 md:d-d-none" role="navigation">
      <router-link v-for="link in navbarLinks" v-bind:key="link.text" :to="link.link" class="d-link">{{
          link.text
        }}
      </router-link>
    </nav>
    <div class="d-ml-auto js-header-content d-flow8 d-d-flex">
      <div class="d-d-flex d-flow4 md:d-d-none">
        <a alt="GitHub repo" class="d-btn d-btn--muted d-tooltip--hover" href="https://github.com/dialpad/dialtone">
          <svg aria-hidden="true" class="d-svg d-svg--system d-svg--Github d-svg--size20" height="24" viewBox="0 0 18 18"
               width="24">
            <path
              d="M9 1a8 8 0 00-2.53 15.59c.4.07.55-.17.55-.38l-.01-1.49c-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.42 7.42 0 014 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48l-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 009 1z"></path>
          </svg>
          <div class="d-tooltip d-tooltip__arrow--top-center d-ps-absolute d-ws-nowrap">
            GitHub Repo
          </div>
        </a>
        <a alt="Codepen Template" class="d-btn d-btn--muted d-tooltip--hover"
           href="https://codepen.io/pen/?template=BajJpwW">
          <svg aria-hidden="true" class="d-svg d-svg--system d-svg--Codepen d-svg--size20" height="24" viewBox="0 0 18 18"
               width="24">
            <path
              d="M12.67 8.17l-2.98-2v-3.2l5.38 3.6-2.4 1.6zM13.9 9l1.73-1.15v2.3L13.9 9zm-4.2 2.82l2.98-2 2.4 1.62-5.38 3.59v-3.2zm-4.36-2l2.98 2v3.2l-5.38-3.58 2.4-1.61zM4.1 9l-1.73 1.15v-2.3L4.1 9zm4.2-2.82l-2.98 2-2.4-1.62L8.3 2.97v3.2zm.7 4.45L6.57 9 9 7.37 11.43 9 9 10.63zm7.99-4.19l-.01-.05-.01-.04-.02-.05-.02-.03a.6.6 0 0 0-.02-.05l-.02-.03a.69.69 0 0 0-.15-.17L16.7 6h-.02L9.4 1.11a.69.69 0 0 0-.77 0L1.3 5.99h-.02c0 .02-.02.02-.03.03a.81.81 0 0 0-.12.13.69.69 0 0 0-.03.04l-.02.03-.02.05-.02.03-.02.05v.04L1 6.44v.03a.7.7 0 0 0-.01.1v4.87a.7.7 0 0 0 0 .09l.01.03.01.05.01.04.02.05.02.03a.51.51 0 0 0 .07.12.53.53 0 0 0 .08.1c.02 0 .03.02.04.03l.03.02h.02l7.3 4.88a.69.69 0 0 0 .77 0l7.31-4.87h.02c0-.02.02-.02.03-.03a.72.72 0 0 0 .04-.04l.02-.02a.62.62 0 0 0 .13-.19l.02-.03a.6.6 0 0 0 .02-.05v-.04l.02-.05v-.03a.7.7 0 0 0 .01-.1V6.57a.7.7 0 0 0 0-.09l-.01-.03z"></path>
          </svg>
          <div class="d-tooltip d-tooltip__arrow--top-center d-ps-absolute d-ws-nowrap">
            Codepen Template
          </div>
        </a>
        <!-- <a href="#" class="d-btn d-btn--muted d-btn--sm d-tooltip--hover js-theme-switcher" title="Toggle dark and light modes">
            {% iconSystem "invert-colors", "d-svg--size20" %}
            <div class="d-tooltip d-tooltip__arrow--top-center d-ps-absolute d-w128">
                Toggle between dark and light color modes
            </div>
        </a> -->
      </div>
      <div id="algolia-search-container" />
    </div>
  </header>
</template>

<script>
import { useThemeLocaleData } from '@vuepress/theme-default/lib/client/composables'
import { useSiteLocaleData } from '@vuepress/client'

export default {
  name: "Navbar",
  data: () => ({
    navbarLinks: useThemeLocaleData().value.navbar || [],
    brandLogo: useThemeLocaleData().value.logo,
    brandLogoAlt: useSiteLocaleData().value.title
  }),
  mounted() {
    this.initialize()
  },
  methods: {
    initialize() {
      Promise.all([
        import(/* webpackChunkName: "docsearch" */ '@docsearch/js'),
        import(/* webpackChunkName: "docsearch" */ '@docsearch/css'),
      ]).then(([docsearch]) => {
        docsearch = docsearch.default
        docsearch({
          indexName: 'dialpad',
          apiKey: '6436ebddb959748daeec411eb388a99d',
          container: '#algolia-search-container',
          appId: 'Y5HG9UX6KM',
          placeholder: 'Search Dialtone',
        })
      })
    },
  }
}
</script>
