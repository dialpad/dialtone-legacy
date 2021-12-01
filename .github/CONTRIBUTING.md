# Contributing

Thanks for your interest in contributing to Dialtone! Please take a moment to review this document before submitting a pull request.

## Overview

### What is Dialtone?

Dialtone is a design system by Dialpad comprised of CSS components, [Vue components](https://vue.dialpad.design/), utility classes, visual assets, documentation and examples which strives to:

- Create a consistent design language between all Dialpad products.
- Create a suite of well-documented, flexible and intuitive UI components that are easy for designers, developers and users to use.
- Document and promote accessible development and design across Dialpad.

Though part of the design system, Dialtone's Vue components are distributed as a separate package and therefore have their own [repository](https://github.com/dialpad/dialtone-vue) and contribution guidelines.

### What is a contribution?

A contribution is any proposal, design, code, or documentation completed by someone not on the core Dialtone team, and released through Dialtone for other people to use. It can be created by anyone who'd like to help make Dialtone better.

Types of contributions:

- Fix: fixes a technical defect, documentation typo, or Figma symbol defect.
- Enhancement: extends an existing style or component without changing the underlying architecture or behavior.
- New feature: adds something new, like a component.

### What belongs in Dialtone?

There are a couple important considerations when thinking about contributing to Dialtone. The first is to remember that Dialtone strives to offer styles, components, or patterns intended to be shared by multiple teams or features. Generally, one-off or first-time elements (i.e. snowflakes) aren't a great fit, though there may be the occasional exception.

The second is to check with the Dialtone team (in [#dialtone](https://dialpad.slack.com/messages/dialtone/)) to ensure the contribution isn't already requested, planned, or even complete.

### Roles

- Contributor: Has the ability to create PRs and merge their change into staging after at least one approving review.
- Maintainer: A trusted contributor with the ability to release Dialtone.
- Admin: Has the ability to change any configuration on the Dialtone repository and release Dialtone. Usually for members of the Dialtone team.

## Making a Pull Request

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

### Immutable Utility Classes
All of our utility classes are set to `!important`. This is because they are designed to be immutable, and `!important` is the best way we have of achieving immutability in css.

### Internal classes
While most of the classes you find in `lib/build/less` are available to users and documented on the doc site, one exception to this is d-internals. d-internals definitions are found in [utilties/internals.less](../lib/build/less/utilities/internals.less). These are definitons we use within dialtone to generate classes, and are not meant for use by consumers of dialtone.

### Naming Conventions
All dialtone classes available to users are prefixed with `d-` example: `d-input`, `d-stack8`. Note that variables are not classes, and do not follow this naming convention. Examples: `@purple-300`, `@fw-normal`.

#### Utility Classes
Utility classes are named in the following format `d-[PROPERTY_ACRONYM]-[VALUE]`.

Examples: `d-ai-center` (align-items) `d-c-pointer` (cursor)

#### Components
Components are named using the [BEM (Block Element Modifier)](http://getbem.com/naming/) methodology. Use '__' to specify a sub-element and '--' to specify the modification of a specific property.

Examples:
- `d-banner` - (Block) Referencing the root banner element
- `d-banner__dialog` - (Element) Referencing the dialog element within the banner
- `d-banner--success` - (Modifier) Setting the success styling variation for the banner

### CSS Vars
If we are working with values that need to be reused within a class or between classes in a component we store them in css vars. Here is a simple example using avatar size:

```css
.d-avatar {
    --avatar--size: var(--su12);
    width: var(--avatar--size);
    height: var(--avatar--size);
}
```

We set the `--avatar--size` css var to 12, and set both the width and the height to reference this variable.

Now we have a size variation of avatar `d-avatar--sm`, all we have to do is simply set the `--avatar--size` var to the new value and the width and height of this new variation will be set for you.

```css
.d-avatar--sm {
  --avatar--size: var(--su24);
}
```

### Linting

We lint our code with [stylelint](https://stylelint.io/) and [lesshint](https://github.com/lesshint/lesshint). You may see our rule configuration in [stylelint.config.js](../stylelint.config.js) and [.lesshintrc.js](../.lesshintrc.js). Note that we use lesshint only for the utilities folder and stylelint for everything else. Due to some unsupported syntax limitations we cannot use stylelint on our utilities folder.

You may manually lint your code with `npm run lint`. If you would like to autofix you can run `npm run lint:fix`. Code will also be automatically linted on commit, so you generally don't have to worry about manually linting.

### Folder Structure

The code for the dialtone library is stored in the `lib/build` folder. When you build the library via `npm run build` the code and assets from `lib/build` are processed bundled and output to the `lib/dist` folder. Within `lib/build` there are some subdirectories.

- `lib/build/fonts`: Fonts we wish to bundle with dialtone. Fonts in this folder must be in woff2 format and are automatically output in the bundle if they exist in this folder.
- `lib/less`: Less files defining our styles. they are processed and transpiled to css on build. Subdirectories exist to categorize our less into components, themes, utility classes and variables.
- `lib/svg`: SVGs used for icons and spot illustrations. There is a subdirectory for each different category of svg as shown on the [dialtone doc site](https://dialpad.design/design/). See [adding icons](https://dialpad.design/design/icons/adding/) for instructions on how to add icons into dialtone.

For folder structure of the doc site see the Eleventy section under Tooling.

### Testing

Because dialtone is purely a css library we do not perform any automated testing. You will need to visually test all your changes on the dialtone doc site by running the local server via `npm start`. Keep in mind that [dialtone-vue](https://github.com/dialpad/dialtone-vue) uses dialtone as a dependency and you may need to verify any changes you have made are working there as well. If you do not want to wait for a release of dialtone to test your change in dialtone vue, you can link your local changes via npm link:

1. Run `npm link` in your local dialtone repository root
2. Run `npm run build` in your local dialtone repository root
3. Run `npm link @dialpad/dialtone` in your local dialtone-vue repository root
4. Run dialtone-vue's local storybook server to test the changes

This will make your local dialtone-vue project reference your local build of dialtone rather than the dialtone dependency on npm. Note that you must re-run `npm run build` on dialtone whenever you make a change, and also if you run `npm install` in dialtone-vue it will overwrite the linked dependency to reference the npm dependency again.

### A11y Standards

Dialtone adopts the [WCAG 2.1 AA](https://www.w3.org/WAI/standards-guidelines/wcag/glance/) Web Content Accessibility Guidelines.

## Commit message convention

Dialtone uses [Conventional Commits specification](https://www.conventionalcommits.org/en/v1.0.0/) to have commit messages that can be used as part of the [semantic release process](RELEASING.md). For more information, see [COMMIT_CONVENTION.md](COMMIT_CONVENTION.md).

### Git hooks

To enforce your commit message on the release branches (`production`, `staging`, `alpha` and `beta`) are correct according to the Conventional Commits specification, there is a `commit-msg` git hook that will be invoked by `git commit`.
`pre-commit` git hook will lint your code.

## Versioning

Dialtone follows [SemVer](https://semver.org/) for versioning and the commit message convention used in the project is aligned with SemVer by describing the features, fixes, and breaking changes made in commit messages.

## Tooling

### Eleventy

[Eleventy](https://www.11ty.dev/) also known as 11ty, is used as a static site generator for our documentation site. Eleventy's root folder is within the folder `docs` in the Dialtone repository. `.eleventy.js` within this folder is the core configuration for eleventy. If you look in this file you can see we have defined many [shortcodes](https://www.11ty.dev/docs/shortcodes/) which can be used in eleventy templates. Our templates use the [Liquid Template Language](https://www.11ty.dev/docs/languages/liquid/). Here are some short descriptions of the folders within `docs` and what they are responsible for.

- `docs/_includes`: Contains reusable template segments that can be inserted into other templates.
- `docs/_site`: Where the compiled build is output to when you run `npm run build`.
- `docs/assets`: Contains images, javascript utilities and doc site specific less/css. **Note:** the css and fonts folders within `docs/assets` are output by the Dialtone build and any manual changes will be overwritten.
- `docs/components`: Contains templates for the "Components" section of the website. (Form inputs, Avatar, Banner etc).
- `docs/design`: Contains templates for the "Design" section of the website. (Colors, Icons, etc).
- `docs/getting-started`: Contains templates for the "Getting Started" section of the website. (Installation, Usage).
- `docs/utilities`: Contains templates for the "Utilities" section of the website. (Utility classes).

### Gulp

[Gulp](https://gulpjs.com/) is the task runner we use to build Dialtone. It's configuration can be found in `.gulpfile.js`. The following tasks are handled within the gulp build

- Compilation, minification and output of less to css.
- Processing svg files for themability, and outputting them as vue files.
- Compilation and output of the eleventy doc site.
- Bundling and output of fonts.
- Running the local development server.
- Caching for faster local build performance.

### Netlify

[Netlify](https://www.netlify.com/) is where our documentation site is hosted. If you need to configure any netlify options you can see the file `netlify.toml` in the repository root and the corresponding [documentation](https://docs.netlify.com/configure-builds/file-based-configuration/). You may not be able to change all options from here some options may require login to our netlify account on the web. If this level of configuration is needed please contact a Dialtone admin.

### Github Actions

[Github Actions](https://docs.github.com/en/actions) is what we use for our CI/CD solution. All GHA workflows are in the `.github/workflows` directory. Currently we use Github Actions for the following:

- Deploying to production `.github/workflows/deploy.yml`, See [RELEASING](RELEASING.md) for instructions on how to do this.
- Linting our less files on pull request `.github/workflows/lint-pr.yml`.
- Validating commit messages `.github/workflows/lint-commit-message.yml`, see [COMMIT_CONVENTION](COMMIT_CONVENTION.md) for our commit message conventions.
