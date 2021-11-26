# Contributing

Thanks for your interest in contributing to Dialtone! Please take a moment to review this document before submitting a pull request.

## Overview

### What is Dialtone?

Dialtone is a design system by Dialpad comprised of CSS components, utility classes, visual assets, documentation and examples which strives to:

- Create a consistient design language between all Dialpad products.
- Create a suite of well documented, flexible and intuitive UI components that are easy for designers, developers and users to use.
- Document and promote accessible development and design across Dialpad.

Note that the dialtone-vue components are also part of the Dialtone project, but have their own repository and contribution guide at https://github.com/dialpad/dialtone-vue, so they will not be mentioned much in this guide.

### What is a contribution?

A contribution can be created by anyone who'd like to help make Dialtone better.

Types of contributions:

- request - you are proposing a change to dialtone.
- bug fix - you are fixing something that is currently not working correctly.
- new feature - you are implementing a new feature into dialtone.

These three types of contributions can be made across any of the following areas that dialtone is made up of
- documentation site
- less/css components
- utility classes
- assets (icons, fonts, spot illustrations)

### What belongs in Dialtone?

The first question to ask is, would this contribution be used by multiple teams or multiple features in a product? If the answer is no, then it probably does not belong in Dialtone.

We put components into dialtone based on a few factors:
- frequency of use
- priority / demand
- effort

Creating a ui component used in only 2 places hidden deep in some configuration menus is going to be much lower priority than a core input component that's used in 45 different places around the site.

Another question to ask is does my contribution already exist, or is it already in our backlog or being worked on?

You can see our [Jira Backlog](https://switchcomm.atlassian.net/jira/software/projects/DT/boards/187/backlog) to check if your idea for a contribution already exists in there. If not the next step is to propose your contribution to the dialtone team in the #dialtone channel on slack!

### Roles

- Contributor - Has the ability to create PRs and merge their change into staging after at least one approving review.
- Maintainer - Has the ability to release Dialtone, generally given to members of the Dialtone team.
- Admin - Has the ability to change any configuration on the Dialtone repository.

## Pull Requests

Before submitting a pull request, **please ask first in [a new issue](https://github.com/dialpad/dialtone/issues/new)**. It's always discouraging to have a pull request declined after putting in the time. To avoid this, outline the problem and proposed solution. This includes a rough example of how you might compose the styles.

## Code style

Make sure your code lints with `npm run lint`. If you need to format your code, you can do this with `npm run lint:fix`.

## Commit message convention

Dialtone uses [Conventional Commits specification](https://www.conventionalcommits.org/en/v1.0.0/) to have commit messages that can be used as part of the [semantic release process](RELEASING.md). For more information, see [COMMIT_CONVENTION.md](COMMIT_CONVENTION.md).

### Git hooks

To enforce your commit message on the release branches (`production`, `staging`, `alpha` and `beta`) are correct according to the Conventional Commits specification, there is a `commit-msg` git hook that will be invoked by `git commit`.
`pre-commit` git hook will lint your code.

## Versioning

Dialtone follows [SemVer](https://semver.org/) for versioning and the commit message convention used in the project is aligned with SemVer by describing the features, fixes, and breaking changes made in commit messages.

## Tooling

### Eleventy

[Eleventy](https://www.11ty.dev/) also known as 11ty, is used as a static site generator for our documentation site. Eleventy's root folder is within the folder `docs` in the dialtone repository. `.eleventy.js` within this folder is the core configuration for eleventy. If you look in this file you can see we have defined many [shortcodes](https://www.11ty.dev/docs/shortcodes/) which can be used in eleventy templates. Our templates use the [Liquid Template Language](https://www.11ty.dev/docs/languages/liquid/). Here are some short descriptions of the folders within `docs` and what they are responsible for.

- `docs/_includes`: Contains reusable template segments that can be inserted into other templates.
- `docs/_site`: Where the compiled build is output to when you run `npm run build`
- `docs/assets`: Contains images, javascript utilities and doc site specific less/css.\
    **note:** the css and fonts folders within `docs/assets` are output by the dialtone build and any manual changes will be overwritten.
- `docs/components`: Contains templates for the "Components" section of the website. (Form inputs, Avatar, Banner etc)
- `docs/design`: Contains templates for the "Design" section of the website. (Colors, Icons, etc)
- `docs/getting-started`: Contains templates for the "Getting Started" section of the website. (Installation, Usage)
- `docs/utilities`: Contains templates for the "Utilities" section of the website. (Utility classes)

### Gulp

[Gulp](https://gulpjs.com/) is the task runner we use to build dialtone. It's configuration can be found in `.gulpfile.js`. The following tasks are handled within the gulp build

- Compilation, minification and output of less to css
- Processing svg files for themability, and outputting them as vue files
- Compilation and output of the eleventy doc site
- Bundling and output of fonts
- Running the local development server
- Caching for faster local build performance

To build and run gulp locally, use the command `npm run start`. This will build dialtone and the doc site and run a local web server at http://localhost:4000/ which can be used for development. When running dialtone in this way any changes to dialtone less files or eleventy templates will be automatically updated in the browser upon saving.

To just build dialtone and the docsite in production mode without running the server do `npm run build`. This will build the dialtone library by reading input from `lib/build`, and then outputting the bundle to `lib/dist`. It will also build the eleventy doc site which reads input files from `docs` and then outputs to `docs/_site`. Minification will be performed when building in production mode.

### Netlify

[Netlify](https://www.netlify.com/) is where our documentation site is hosted. If you need to configure any netlify options you can see the file `netlify.toml` in the repository root and the corresponding [documentation](https://docs.netlify.com/configure-builds/file-based-configuration/). You may not be able to change all options from here some options may require login to our netlify account on the web. If this level of configuration is needed please contact a dialtone admin.

### Github Actions

[Github Actions](https://docs.github.com/en/actions) is what we use for our CI/CD solution. All GHA workflows are in the `.github/workflows` directory. Currently we use Github Actions for the following:

- Deploying to production `.github/workflows/deploy.yml`, See [RELEASING](RELEASING.md) for instructions on how to do this
- Linting our less files on pull request `.github/workflows/lint-pr.yml`
- Validating commit messages `.github/workflows/lint-commit-message.yml`, see [COMMIT_CONVENTION](COMMIT_CONVENTION.md) for our commit message conventions
