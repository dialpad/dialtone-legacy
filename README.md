# Dialtone

This is the home for Dialtone, Dialpad's design system. It includes the resources needed to create consistent, predictable interfaces that conform to Dialpad’s design principles, language, styles, and best practices.

## Install Dialtone via NPM

To add Dialtone into your project, you can install it via NPM:

```
npm install @dialpad/dialtone
```

Once installed, add the following line in your CSS/LESS file:
```
@import "node_modules/@dialpad/dialtone/lib/dist/css/dialtone.css";
```

And dialtone's theme class to the `<body>`

**Light mode**
```html
<body class="dialtone-theme-light">...</body>
```

**Dark mode**
```html
<body class="dialtone-theme-dark">...</body>
```

It is important to add either of those classes in order to make dialtone work, as CSS variables
definition change according to the selected mode (light, dark). 

If the class is not added, the CSS variables aren't going to be defined.

## Building Dialtone locally

To build Dialtone locally, visit our [installation instructions](https://dialpad.design/guides/getting-started/#build-dialtone-locally).

## Contributing

If you're interested in contributing to Dialtone, please read our [contributing docs](https://github.com/dialpad/dialtone/blob/master/.github/CONTRIBUTING.md) **before submitting a pull request**.

## Requesting features / reporting bugs

Requesting a feature or reporting a bug? Please do so at the below links:

- [Request Feature](https://dialpad.atlassian.net/secure/CreateIssue.jspa?issuetype=10901&pid=12428)
- [Report Bug](https://dialpad.atlassian.net/secure/CreateIssue.jspa?issuetype=10878&pid=12428)


Please also feel free to contact us via the [#dialtone Slack channel](https://dialpad.slack.com/messages/dialtone/) with any questions
