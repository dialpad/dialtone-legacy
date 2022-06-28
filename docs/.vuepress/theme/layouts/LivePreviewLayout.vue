<template>
  <div class="preview-code">
    <div>
      <slot name="preview"></slot>
    </div>
    <div>
      <slot name="editor"></slot>
    </div>
  </div>
</template>

<style lang="less">
.preview-code {
  margin-top: var(--su16);
  display: block;
  border-radius: var(--su8);
}
.preview-code > div:first-child {
  border-radius: 6px 6px 0 0;
  padding: 30px;
  background-color: var(--black-025);
  text-align: center;
}
.preview-code > div:last-child {
  background-color: hsla(var(--black-600-h) var(--black-600-s) var(--black-600-l) ~' / ' var(--bgo));
  color: white;
  padding: var(--su16);
  overflow: hidden;
  border-radius: 0 0 6px 6px;
}
/* optional class for removing the outline */
.prism-editor__textarea:focus {
  outline: none;
}
</style>
