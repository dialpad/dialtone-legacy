<template>
  <ParentLayout>
    <template #page>
      <Home v-if="$frontmatter.home" />
        <div v-else class="main-content">
          <Transition
            name="fade-slide-y"
            mode="out-in"
            @before-enter="onBeforeEnter"
            @before-leave="onBeforeLeave"
          >
            <Page :key="$page.path">
              <template #top>
                <PageHeader :path="$page.path" :frontmatter="$frontmatter">
                  <template #content-bottom>
                    <PageToc v-if="isMobile" :headers="$page.headers" />
                  </template>
                </PageHeader>
              </template>
            </Page>
          </Transition>
          <PageToc v-if="!isMobile" :headers="$page.headers" class="d-pr32 d-pt24" />
        </div>
    </template>
  </ParentLayout>
</template>

<script setup>
  import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue';
  import Home from '@theme/Home.vue';
  import Page from '@theme/Page.vue';
  import PageToc from '@theme/PageToc.vue';
  import PageHeader from '@theme/PageHeader.vue';

  import { useScrollPromise } from '@vuepress/theme-default/lib/client/composables'
  import { ref, watch, getCurrentInstance } from 'vue';

  const defaultHeaderSize = 64;
  const mobileHeaderSize = 128;
  const mobileBreakpoint = 980;

  const scrollPromise = useScrollPromise();
  const onBeforeEnter = scrollPromise.resolve;
  const onBeforeLeave = scrollPromise.pending;
  const app = getCurrentInstance();

  const evaluateWindowWidth = () => window.innerWidth <= mobileBreakpoint;
  const isMobile = ref(evaluateWindowWidth());
  window.addEventListener('resize', () => {
    isMobile.value = evaluateWindowWidth();
  });

  watch(isMobile, (current) => {
    app.appContext.config.globalProperties.$headerSize = (
      current
      ? mobileHeaderSize
      : defaultHeaderSize
    );
  }, { immediate: true });
</script>

<style lang="less">
  .main-content {
    display: flex;
    width: 100%;
  }

  .page {
    padding-top: var(--su24);
    width: 100%;
    min-width: 0;
  }

  .toc {
    position: sticky;
    top: var(--su64);
    align-self: flex-start;
    background-color: var(--base--background-color);
    z-index: 10;
  }

  @media screen and (max-width: 980px) {
    .main-content {
      flex-wrap: wrap;
      flex-direction: column-reverse;
    }

    .page {
      padding-top: var(--su64) !important;
    }

    .toc {
      position: initial;
      top: initial;
      width: 100%;
    }

    .toc-item {
      display: inline-block;
    }

    .toc-item > a {
      color: var(--primary-color);
      text-decoration: underline;
    }

    .toc-item > a:hover {
      color: var(--primary-color-hover);
      text-decoration: underline;
      background-color: transparent;
    }

    .toc a.active::before {
      display: none;
    }
  }
</style>
