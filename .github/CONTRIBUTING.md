# Contributing

Thanks for your interest in contributing to Dialtone. Please take a moment to review this document before submitting a pull request.

## Making a Pull Request

Before submitting a pull request, make sure to communicate what you wish to change to the dialtone team. The easiest way to do this is via the #dialtone slack channel. It's possible your change is already being worked on, has already been fixed, or maybe we just need to discuss the best solution to the problem. This prevents you from having to re-write your entire change, or even having to scrap it entirely.

After you have discussed your change with the dialtone team, follow these steps to submit it.

1. See [README.md](../README.md) for instructions on how to initially clone and run the project
2. First make sure you are on the staging branch with `git checkout staging`, and that it is up to date with `git pull`
3. Create a personal branch to make your change off of staging `git checkout -b my-change-branch`. We use kebab-case for branch names.
4. Make and commit your changes. Note our [commit message conventions](COMMIT_CONVENTION.md). If you have only a single commit on your branch your git commit message must follow the conventions. If you have multiple commits on your branch the github PR title must follow the commit message conventions. Your change will be automatically linted on commit
5. push your branch to remote. `git push -u origin my-change-branch`
6. Create a pull request into the staging branch, reviewers will be automatically added and notified of your PR
7. Once your changes have been approved, you may squash merge your branch into staging

Once your change is in staging it will go live with the next dialtone release. Releases are done on demand by the dialtone team, and are done fairly regularly. If you need your change to be released promptly, please ask in the #dialtone slack channel.

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
