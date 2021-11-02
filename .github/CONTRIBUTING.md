# Contributing

Thanks for your interest in contributing to Dialtone. Please take a moment to review this document before submitting a pull request.

## Pull Requests

Before submitting a pull request, **please ask first in [a new issue](https://github.com/dialpad/dialtone/issues/new)**. It's always discouraging to have a pull request declined after putting in the time. To avoid this, outline the problem and proposed solution. This includes a rough example of how you might compose the styles.

## Commit message convention

Dialtone uses [Conventional Commits specification](https://www.conventionalcommits.org/en/v1.0.0/) to have commit messages that can be used as part of the [semantic release process](RELEASING.md). For more information, see [COMMIT_CONVENTION.md](COMMIT_CONVENTION.md).

### Git hooks

To enforce your commit message on the release branches (`production`, `staging`, `alpha` and `beta`) are correct according to the Conventional Commits specification, there is a `commit-msg` git hook that will be invoked by `git commit`.

## Versioning

Dialtone follows [SemVer](https://semver.org/) for versioning and the commit message convention used in the project is aligned with SemVer by describing the features, fixes, and breaking changes made in commit messages.
