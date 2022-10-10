# Contributing

Thanks for your interest in contributing to Dialtone! Please take a moment to review this document before submitting a pull request.

## Overview

### What Is Dialtone?

Dialtone is a design system by Dialpad comprised of CSS components, [Vue components](https://vue.dialpad.design/), utility classes, visual assets, documentation and examples which strives to:

- Create a consistent design language between all Dialpad products.
- Create a suite of well-documented, flexible and intuitive UI components that are easy for designers, developers and users to use.
- Document and promote accessible development and design across Dialpad.

Though part of the design system, Dialtone's Vue components are distributed as a separate package and therefore have their own [repository](https://github.com/dialpad/dialtone-vue) and contribution guidelines.

### What Is a Contribution?

A contribution is any proposal, design, code, or documentation completed by someone not on the core Dialtone team, and released through Dialtone for other people to use. It can be created by anyone who'd like to help make Dialtone better.

Types of contributions:

- **Fix:** fixes a technical defect, documentation typo, or Figma symbol defect.
- **Enhancement:** extends an existing style or component without changing the underlying architecture or behavior.
- **New feature:** adds something new, like a component.

### What Belongs in Dialtone?

There are a couple important considerations when thinking about contributing to Dialtone. The first is to remember that Dialtone strives to offer styles, components, or patterns intended to be shared by multiple teams or features. Generally, one-off or first-time elements (i.e. snowflakes) aren't a great fit, though there may be the occasional exception.

The second is to check with the Dialtone team (in [#dialtone](https://dialpad.slack.com/messages/dialtone/)) to ensure the contribution isn't already requested, planned, or even complete. You may also see our [Jira board](https://switchcomm.atlassian.net/jira/software/projects/DT/boards/187/backlog) for upcoming work.

### Roles

- **Contributor:** Has the ability to create PRs and merge their change into `staging` after at least one approving review.
- **Maintainer:** A trusted contributor with the ability to release Dialtone.
- **Admin:** Has the ability to change any configuration on the Dialtone repository and release Dialtone. Usually for members of the Dialtone team.

## How to Contribute

### Feature Request

If you would like to request a new feature for Dialtone, please fill out and submit [this form.](https://forms.monday.com/forms/8a9a6ff69d7e9f95caee029c2806e2c1?r=use1)

### Bug Report

If you would like to report a bug, please post it in [#dialtone](https://dialpad.slack.com/messages/dialtone/). We will assist you in determining whether it is a Dialtone bug. Please give us a working example of the bug on a private beta or deploy preview link. A branch we can checkout is also helpful. If we have determined that this is a bug in Dialtone, then you may create a [Jira ticket](https://switchcomm.atlassian.net/jira/software/projects/DT/boards/187/backlog) for the bug. We will get to fixing the bug in the future, or you can fix the bug yourself by [Making a Pull Request](#making-a-pull-request)

### Making a Pull Request

Before submitting a pull request, make sure to communicate what you wish to change to the Dialtone team. The easiest way to do this is via the [#dialtone](https://dialpad.slack.com/messages/dialtone/) Slack channel. It's possible your change is already being worked on, has already been fixed, or maybe we just need to discuss the best solution to the problem. This prevents you from having to re-write your entire change, or even having to scrap it entirely.

After you have discussed your change with the Dialtone team, follow these steps to submit it:

1. See [README.md](../README.md) for instructions on how to initially clone and run the project.
2. First make sure you are on the `staging` branch with `git checkout staging`, and that it is up to date with `git pull`.
3. Create a personal branch to make your change off of `staging` with `git checkout -b my-change-branch`. We use kebab-case for branch names.
4. Make and commit your changes. Note our [commit message conventions](COMMIT_CONVENTION.md). If you have only a single commit on your branch, then your git commit message must follow the conventions. If you have multiple commits on your branch, then the github PR title must follow the commit message conventions. Your change will be automatically linted on commit.
5. Push your branch to remote. `git push -u origin my-change-branch`.
6. Create a pull request into the `staging` branch, reviewers will be automatically added and notified of your PR.
7. Once your changes have been approved, you may squash merge your branch into `staging`.

Once your change is in `staging` it will go live with the next Dialtone release. Releases are done on demand by the Dialtone team, and are done fairly regularly. If you need your change to be released promptly, please ask in the #dialtone slack channel.

## Coding Guidelines

### Naming Conventions

All Dialtone classes available to users are prefixed with `d-`.

```less
.d-input {}
.d-stack8 {}
```

Note that variables are not classes and do not follow this convention. For example: `@purple-300` (`LESS`) or `var(--su12)` (CSS Custom Property).

#### Utility Classes

Utility classes are named in the following format `d-[PROPERTY_ACRONYM]-[VALUE]`.

```less
.d-ai-center {} // align-items: center
.d-c-pointer {} // cursor: pointer
```

#### Component Classes

Component class names use the [Block Element Modifier (BEM)](http://getbem.com/naming/) naming standard.

```less
.d-banner {} // Block
.d-banner__dialog {} // Element
.d-banner--success {} // Modifier
```

### Generated Classes

While most of the classes you find in `lib/build/less` are available to users and documented on the doc site, one exception to this is d-internals. d-internals definitions are found in [utilties/internals.less](../lib/build/less/utilities/internals.less). These are definitons we use within Dialtone to generate classes, and are not meant for use by consumers of Dialtone.

### Immutable Utility Classes

All of our utility classes are set to `!important`. This is because they are designed to be immutable, and `!important` is the best way we have of achieving immutability in CSS.

### CSS Vars

We use CSS vars in our classes for better reusability. We try to always use CSS vars `var(--su12)` over less vars `@su12` in our code, however we often use LESS vars to help generate CSS vars.

Here we set the `--avatar--size` CSS var to `12`, and set both the width and the height to reference this variable.
```less
.d-avatar {
    --avatar--size: var(--su12);
    width: var(--avatar--size);
    height: var(--avatar--size);
}
```

Now in variation `d-avatar--sm`, we just set `--avatar--size`. Width and height will be set for you.

```less
.d-avatar--sm {
  --avatar--size: var(--su24);
}
```

### Linting

Our code is linted by:

- [stylelint](https://stylelint.io).
- [lesshint](https://github.com/lesshint/lesshint).
- [eslint](https://eslint.org).
- [markdownlint](https://github.com/DavidAnson/markdownlint).

Configuration can be found in:

- [stylelint.config.js](../stylelint.config.js), [.stylelintignore](../.stylelintignore)
- [.lesshintrc.js](../.lesshintrc.js)
- [.eslintrc.js](../.eslintrc.js), [.eslintignore](../.eslintignore)
- [.markdownlintrc](../.markdownlintrc), [.markdownlintignore](../.markdownlintignore)

Your code will be linted automatically on commit.

- **Lint manually:** `npm run lint`
- **With autofix:** `npm run lint:fix`

Note that we use lesshint only for the utilities folder and stylelint for everything else. Due to some unsupported syntax limitations we cannot use stylelint on our utilities folder.

### Folder Structure

Here are some important directories to know within the Dialtone repository

- `lib/build`: All source code and assets for the Dialtone library.
- `lib/dist`: The compiled bundle will be output here upon `npm run build`.
- `lib/build/fonts`: Fonts we wish to bundle with Dialtone (woff2 format).
- `lib/build/less`: LESS files defining our styles. they are processed and transpiled to CSS on build.
- `lib/build/svg`: SVGs used for icons and spot illustrations. See [adding icons](https://dialpad.design/design/icons/adding/) for instructions on how to add icons into Dialtone.

For folder structure of the doc site, see the [VuePress section](#vuepress) of this document.

### Testing

Because Dialtone is purely a CSS library we do not perform any automated testing. Please locally test your changes via `npm start` and visually verifying them.

### A11y Standards

Dialtone adopts the [WCAG 2.1 AA](https://www.w3.org/WAI/standards-guidelines/wcag/glance/) Web Content Accessibility Guidelines.

## Commit Message Convention

Dialtone uses [Conventional Commits specification](https://www.conventionalcommits.org/en/v1.0.0/) to have commit messages that can be used as part of the [semantic release process](RELEASING.md). For more information, see [COMMIT_CONVENTION.md](COMMIT_CONVENTION.md).

### Git Hooks

To enforce your commit message on the release branches (`production`, `staging`, `alpha` and `beta`) are correct according to the Conventional Commits specification, there is a `commit-msg` git hook that will be invoked by `git commit`.
`pre-commit` git hook will lint your code.

## Versioning

Dialtone follows [SemVer](https://semver.org/) for versioning and the commit message convention used in the project is aligned with SemVer by describing the features, fixes, and breaking changes made in commit messages.

## Tooling

### VuePress

[VuePress](https://v2.vuepress.vuejs.org/) Vue-powered static site generator, is used as a static site generator for our documentation site. VuePress's root folder is within the folder `docs` in the Dialtone repository. Here are some short descriptions of the folders within `docs` and what they are responsible for.

- `docs/.vuepress`: This is where all VuePress-specific files are placed.
  - `baseComponents`: These are components that might be reused across the documentation site.
  - `exampleComponents`: These are example components to be used in the `docs/components` section.
  - `public`: Contains public assets like images.
  - `styles`: Contains VuePress specific styling files.
    - `palette.scss`: This file should be used to override VuePress specific values like breakpoints and to unset undesired margins, paddings, etc... It has higher priority than any other styling file.
  - `theme`: Contains customized dialtone vuepress theme configurations, layouts and components.
    - `components`:  Contains Theme specific components like Navbar, Sidebar, etc.
    - `layouts`: Contains Theme specific [Layouts](https://vuepress.github.io/reference/theme-api.html#layouts).
  - `views`: Contains complex views that couldn't be created with Markdown only.
  - `client.js`: Contains VuePress [client configuration](https://vuepress.github.io/advanced/cookbook/usage-of-client-config.html).
  - `config.ts`: Contains VuePress [global configuration](https://vuepress.github.io/reference/config.html).
- `docs/_data`: Contains json files with data to populate tables, examples and the sidebar items.
- `doc/about`: Contains templates for the "About" section of the website. (About dialtone, Contributing).
- `docs/assets`: Contains doc site specific LESS/CSS and Fonts **Note:** the css and fonts folders within `docs/assets` are output by the Dialtone build and any manual changes will be overwritten.
  - `less/overrides.less`: This file should be used to override styling on documentation site, if you need to unset specific value, please add it to `docs/.vuepress/styles/palette.scss`.
  - `less/hljs-dialpad.less`: Contains code blocks styling rules.
- `docs/components`: Contains templates for the "Components" section of the website. (Form inputs, Avatar, Banner etc).
- `docs/design`: Contains templates for the "Design" section of the website. (Colors, Icons, etc).
- `docs/getting-started`: Contains templates for the "Getting Started" section of the website. (Installation, Usage).
- `docs/utilities`: Contains templates for the "Utilities" section of the website. (Utility classes).

### Gulp

[Gulp](https://gulpjs.com/) is the task runner we use to build Dialtone. It's configuration can be found in `.gulpfile.js`. The following tasks are handled within the gulp build

- Compilation, minification and output of LESS to CSS.
- Processing svg files for themability, and outputting them as vue files.
- Bundling and output of fonts.
- Caching for faster local build performance.

### GitHub Actions

[GitHub Actions](https://docs.github.com/en/actions) is what we use for our CI/CD solution. All GHA workflows are in the `.github/workflows` directory. Currently, we use GitHub Actions for the following:

- Deploying to `production` `.github/workflows/deploy.yml`, See [RELEASING](RELEASING.md) for instructions on how to do this.
- Linting our LESS files on pull request `.github/workflows/lint-pr.yml`.
- Validating commit messages `.github/workflows/lint-commit-message.yml`, see [COMMIT_CONVENTION](COMMIT_CONVENTION.md) for our commit message conventions.
