<template>
  <section class="hero d-mnt16 d-bgr-none">
    <div class="hero--inner-wrapper d-d-flex d-jc-space-between d-mx-auto d-wmx1340 d-pl16 d-pr16">
      <div class="hero--content d-d-flex d-fd-column d-jc-center">
        <h1 class="d-headline42 d-lh6 d-mb12">
          Improve your UI's reception with Dialtone
        </h1>
        <p class="d-fs-300 d-lh-400 d-mb8">
          Documented styles, utility classes, and components to help you quickly design
          and build unified experiences across Dialpad and Dialpad Meetings.
        </p>
        <div class="d-mb48">
          <a
            class="d-td-unset"
            href="https://github.com/dialpad/dialtone/"
          >
            <img
              alt="Dialtone CSS version number"
              src="https://img.shields.io/github/package-json/v/dialpad/dialtone?color=AB7EFF&label=CSS"
            >
          </a>
          <a
            class="d-td-unset d-ml4"
            href="https://github.com/dialpad/dialtone-vue"
          >
            <img
              id="dialtone-vue-badge"
              alt="Dialtone Vue version number"
              :src="`https://img.shields.io/badge/Vue-v${version}-AB7EFF`"
            >
          </a>
        </div>
        <router-link
          v-slot="{ navigate }"
          to="/guides/getting-started/installation.html"
          custom
        >
          <button
            class="d-btn d-btn--primary d-btn--lg"
            role="link"
            @click="(e) => { sendAnalyticsEvent(); navigate(e); }"
            @keypress.enter="(e) => { sendAnalyticsEvent(); navigate(e); }"
          >
            Get Started
          </button>
        </router-link>
      </div>
      <img
        alt=""
        class="hero--image d-w50p d-as-flex-start"
        :src="$withBase('/assets/images/home-hero.png')"
      >
    </div>
  </section>
  <section class="links d-d-grid d-gg16 d-g-cols12 d-wmx1340 d-mx-auto">
    <div class="d-gc3 link d-px32 d-ta-center">
      <img
        alt=""
        class="link--image d-h96 d-mb24"
        :src="$withBase('/assets/images/home-design.svg')"
      >
      <h2 class="link--headline d-fs-400 d-lh4 d-mb12">
        Design
      </h2>
      <p class="link--paragraph d-fs-200 d-lh6 d-mb8">
        Foundational color, iconography, and spacing guidelines
      </p>
      <router-link
        class="d-link link--link"
        to="/design/colors/color-palette"
      >
        Browse design guidelines
      </router-link>
    </div>
    <div class="d-gc3 link d-px32 d-ta-center">
      <img
        alt=""
        class="link--image d-h96 d-mb24"
        :src="$withBase('/assets/images/home-components.svg')"
      >
      <h2 class="link--headline d-fs-400 d-lh4 d-mb12">
        Components
      </h2>
      <p class="link--paragraph d-fs-200 d-lh6 d-mb8">
        Presentational UI components offered in CSS and Vue
      </p>
      <div class="d-d-inline-flex d-fd-column">
        <router-link
          class="d-link link--link"
          to="/components/avatar"
        >
          Browse CSS components
        </router-link>
        <a
          class="d-link link--link"
          href="https://vue.dialpad.design/"
          target="_blank"
          rel="noopener noreferrer"
        >Browse Vue components</a>
      </div>
    </div>
    <div class="d-gc3 link d-px32 d-ta-center">
      <img
        alt=""
        class="link--image d-h96 d-mb24"
        :src="$withBase('/assets/images/home-utilities.svg')"
      >
      <h2 class="link--headline d-fs-400 d-lh4 d-mb12">
        Utilities
      </h2>
      <p class="link--paragraph d-fs-200 d-lh6 d-mb8">
        Atomic CSS utility classes so you don't have to write custom CSS
      </p>
      <router-link
        class="d-link link--link"
        to="/utilities/backgrounds/attachment"
      >
        Browse utility classes
      </router-link>
    </div>
    <div class="d-gc3 link d-px32 d-ta-center">
      <img
        alt=""
        class="link--image d-h96 d-mb24"
        :src="$withBase('/assets/images/home-utilities.svg')"
      >
      <h2 class="link--headline d-fs-400 d-lh4 d-mb12">
        Guides
      </h2>
      <p class="link--paragraph d-fs-200 d-lh6 d-mb8">
        Atomic CSS utility classes so you don't have to write custom CSS
      </p>
      <div class="d-d-inline-flex d-fd-column">
        <router-link
          class="d-link link--link"
          to="/guides/getting-started/installation.html"
        >
          Getting started
        </router-link>
        <router-link
          class="d-link link--link"
          to="/guides/content/principles.html"
        >
          Writing Guidelines
        </router-link>
        <router-link
          class="d-link link--link"
          to="/guides/accessibility/fundamentals.html"
        >
          Accessibility
        </router-link>
      </div>
    </div>
  </section>
  <section class="d-bgc-purple-500 d-py64 d-ta-center">
    <p class="d-fc-white d-fs-300 d-fw-bold d-px48">
      Don't see something? Want to contribute?
    </p>
    <a
      class="d-btn d-btn--inverted d-btn--primary d-mt16"
      href="https://forms.monday.com/forms/8a9a6ff69d7e9f95caee029c2806e2c1?r=use1"
      target="_blank"
      rel="noopener noreferrer"
    >Make a request</a>
  </section>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue';
import axios from 'axios';

const version = ref('0.0.0');

onBeforeMount(async () => {
  const response = await axios.get('https://vue.dialpad.design/version.txt');
  version.value = response.data;
});

function sendAnalyticsEvent () {
  if (!window.gtag) return;
  window.gtag('event', 'click', { event_name: 'get_started_button_clicked' });
}
</script>
