---
title: Installation
desc: A quick start guide to adding Dialtone to your project.
prev:
  text: About - Contributing
  link: /about/contributing
---

## Adding Dialtone To Your Project

To take advantage of Dialtone's customizations, classes, and variables in your project, you will want to install Dialtone via <a href="https://www.npmjs.com/" target="_blank">npm</a>.

```bash
npm install @dialpad/dialtone
```

Add the following line in your Less file:

```less
@import "your/path/to/dialtone.less";
```

If you only need access to Dialtone's variables and customizations to build a file and don't need the whole library exported, use this line instead in your Less file:

```less
@import (reference) "your/path/to/dialtone.less";
```

## Theming

To customize your Dialtone installation, create a new Less file in the `/lib/build/less/themes/` folder. By default this will compile during build, which can be added as an additional CSS file in your page `head`.

```less
@import "your/path/to/dialtone.less";
```

If you only need access to Dialtone's variables and customizations to build a file and don't need the whole library exported, use this line instead in your Less file:

```less
@import (reference) "your/path/to/dialtone.less";
```
