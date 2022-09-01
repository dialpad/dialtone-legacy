---
title: Word Break
desc: Utilities for controlling the way words break within an element.
next:
  text: Components - Avatar
  link: /components/avatar
---

## Normal

Use `d-wb-normal` to reset an element's line break rule.

<code-well-header class="d-fl-center d-p24 d-bgc-purple-100 d-bgo50 d-w100p d-hmn102" custom>
  <div class="d-bgc-purple-200 d-py8 d-px16 d-bar8 lg:d-w216 d-w332">
    <p class="d-fs18 d-wb-normal">Here's an example sentence to show how word-break works. Vivamus ullamcorperatduiaultrices eu lobortis nulla, sed vulputate orci. 这是一个中文例句，以举例说明断字的工作方式。単語分割の動作の例を示す日本語のサンプル文は次のとおりです。다음은 단어 분리 작동 방식의 예를 제공하는 한국어 샘플 문장입니다.</p>
  </div>
</code-well-header>

```html
<p class="d-wb-normal">...</p>
```

## Break All

Use `d-wb-break-all` on an element to insert word breaks between any two characters (excluding Chinese, Japanese, or Korean text) to prevent text from overflowing.

<code-well-header class="d-fl-center d-p24 d-bgc-green-100 d-bgo50 d-w100p d-hmn102" custom>
  <div class="d-bgc-green-200 d-py8 d-px16 d-bar8 lg:d-w216 d-w332">
    <p class="d-fs18 d-wb-break-all">Here's an example sentence to show how word-break works. Vivamus ullamcorperatduiaultrices eu lobortis nulla, sed vulputate orci. 这是一个中文例句，以举例说明断字的工作方式。単語分割の動作の例を示す日本語のサンプル文は次のとおりです。다음은 단어 분리 작동 방식의 예를 제공하는 한국어 샘플 문장입니다.</p>
  </div>
</code-well-header>

```html
<p class="d-wb-break-all">...</p>
```

## Keep All

Use `d-wb-keep-all` on an element to not use word breaks for Chinese, Japanese, or Korean (CJK) text. Non-CJK text behavior is set to normal.

<code-well-header class="d-fl-center d-p24 d-bgc-magenta-100 d-bgo50 d-w100p d-hmn102" custom>
  <div class="d-bgc-magenta-100 d-py8 d-px16 d-bar8 lg:d-w216 d-w332">
    <p class="d-fs18 d-wb-keep-all">Here's an example sentence to show how word-break works. Vivamus ullamcorperatduiaultrices eu lobortis nulla, sed vulputate orci. 这是一个中文例句，以举例说明断字的工作方式。単語分割の動作の例を示す日本語のサンプル文は次のとおりです。다음은 단어 분리 작동 방식의 예를 제공하는 한국어 샘플 문장입니다.</p>
  </div>
</code-well-header>

```html
<p class="d-wb-keep-all">...</p>
```

## Classes

<utility-class-table>
  <template #content>
    <tbody>
      <tr v-for="i in ['normal', 'break-all', 'keep-all', 'unset']">
        <th scope="row" class="d-ff-mono d-fc-purple d-fw-normal d-fs12">.d-wb-{{ i }}</th>
        <td class="d-ff-mono d-fc-orange d-fs12">word-break: {{ i }} !important;</td>
      </tr>
    </tbody>
  </template>
</utility-class-table>
