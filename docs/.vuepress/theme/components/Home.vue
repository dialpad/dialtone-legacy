<template>
  <section class="hero d-mnt16 d-bgr-none">
    <div class="hero--inner-wrapper d-d-flex d-jc-space-between d-mx-auto d-wmx1340 d-pl32 d-pr32">
      <div class="hero--content d-d-flex d-fd-column d-jc-center">
        <h1 class="d-headline-extra-extra-large d-mb12">
          Improve your UI's reception with Dialtone
        </h1>
        <p class="d-fs-300 d-lh-400 d-mb16 d-fc-secondary">
          Documented styles, components, and utility classes to help you quickly design and build unified experiences
          across Dialpad and Dialpad Meetings.
        </p>
        <div class="d-mb48">
          <a
            class="d-td-unset"
            href="https://github.com/dialpad/dialtone/"
          >
            <img
              alt="Dialtone CSS version number"
              src="https://img.shields.io/github/package-json/v/dialpad/dialtone?color=D3BCFF&label=CSS"
            >
          </a>
          <a
            class="d-td-unset d-ml4"
            href="https://github.com/dialpad/dialtone-vue"
          >
            <img
              id="dialtone-vue-badge"
              alt="Dialtone Vue version number"
              :src="`https://img.shields.io/badge/Vue-v${version}-D3BCFF`"
            >
          </a>
        </div>
        <div class="d-d-flex">
          <router-link
            v-slot="{ navigate }"
            to="/guides/getting-started/"
            custom
          >
            <dt-button
              role="link"
              size="lg"
              @click="(e) => { sendAnalyticsEvent(); navigate(e); }"
              @keypress.enter="(e) => { sendAnalyticsEvent(); navigate(e); }"
            >
              Get started
            </dt-button>
          </router-link>
          <router-link
            v-slot="{ navigate }"
            to="/about/whats_new/"
            custom
          >
            <dt-button
              role="link"
              size="lg"
              importance="outlined"
              class="d-ml16"
              @click="(e) => { navigate(e); }"
              @keypress.enter="(e) => { navigate(e); }"
            >
              What's new?
            </dt-button>
          </router-link>
        </div>
      </div>
      <img
        alt=""
        class="hero--image d-w50p d-as-flex-start"
        :src="$withBase('/assets/images/home-hero.png')"
      >
    </div>
  </section>
  <section class="links d-d-grid d-gg16 d-g-cols12 d-wmx1340 d-mx-auto">
    <div class="link d-body-base d-gc3 d-px32 d-ta-center">
      <router-link
        class="d-fc-secondary h:d-fc-purple-400 d-d-block"
        to="/design/"
      >
        <img
          alt=""
          class="d-h96 d-mb24"
          :src="$withBase('/assets/images/home-design.svg')"
        >
        <h2 class="d-headline-extra-large d-mb8 d-baw0">
          Design language
        </h2>
      </router-link>
      <p class="d-mb8 d-body-compact d-fc-secondary">
        Foundational color, iconography, and spacing guidelines
      </p>
      <router-link
        class="d-link"
        to="/design/"
      >
        Browse design guidelines
      </router-link>
    </div>
    <div class="link d-body-base d-gc3 d-px32 d-ta-center">
      <router-link
        class="d-fc-secondary h:d-fc-purple-400 d-d-block"
        to="/components/"
      >
        <img
          alt=""
          class="d-h96 d-mb24"
          :src="$withBase('/assets/images/home-components.svg')"
        >
        <h2 class="d-headline-extra-large d-mb8 d-baw0">
          Components
        </h2>
      </router-link>
      <p class="d-mb8 d-body-compact d-fc-secondary">
        Presentational UI components offered in CSS and Vue
      </p>
      <div class="d-d-inline-flex d-fd-column d-stack4">
        <router-link
          class="d-link"
          to="/components/"
        >
          Browse CSS components
        </router-link>
        <a
          class="d-link"
          href="https://vue.dialpad.design/"
          target="_blank"
          rel="noopener noreferrer"
        >Browse Vue components</a>
      </div>
    </div>
    <div class="link d-body-base d-gc3 d-px32 d-ta-center">
      <router-link
        class="d-fc-secondary h:d-fc-purple-400 d-d-block"
        to="/utilities/"
      >
        <img
          alt=""
          class="d-h96 d-mb24"
          :src="$withBase('/assets/images/home-utilities.svg')"
        >
        <h2 class="d-headline-extra-large d-mb8 d-baw0">
          Utilities
        </h2>
      </router-link>
      <p class="d-mb8 d-body-compact d-fc-secondary">
        A utility-first CSS framework for building user interfaces.
      </p>
      <router-link
        class="d-link"
        to="/utilities/"
      >
        Browse utility classes
      </router-link>
    </div>
    <div class="link d-body-base d-gc3 d-px32 d-ta-center">
      <router-link
        class="d-fc-secondary h:d-fc-purple-400 d-d-block"
        to="/guides/"
      >
        <img
          alt=""
          class="d-h96 d-mb24"
          :src="$withBase('/assets/images/home-guides.svg')"
        >
        <h2 class="d-headline-extra-large d-mb8 d-baw0">
          Guides
        </h2>
      </router-link>
      <p class="d-mb8 d-body-compact d-fc-secondary">
        Reference guidelines for Accessibility, Writing, and more
      </p>
      <div class="d-d-inline-flex d-fd-column d-stack4">
        <router-link
          class="d-link"
          to="/guides/getting-started/"
        >
          Getting started
        </router-link>
        <router-link
          class="d-link"
          to="/guides/content/"
        >
          Writing guidelines
        </router-link>
        <router-link
          class="d-link"
          to="/guides/accessibility/"
        >
          Accessibility
        </router-link>
      </div>
    </div>
  </section>
  <section class="d-bgc-purple-500 d-py64 d-ta-center">
    <p class="d-fc-white d-fs-300 d-fw-semibold d-px48">
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
import { DtButton } from '@dialpad/dialtone-vue';
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
