# Contributing

Thanks for your interest in contributing to Dialtone. Please take a moment to review this document before submitting a pull request.

## Pull Requests

Before submitting a pull request, **please ask first in [a new issue](https://github.com/dialpad/dialtone/issues/new)**. It's always discouraging to have a pull request declined after putting in the time. To avoid this, outline the problem and proposed solution. This includes a rough example of how you might compose the styles.

## Commit message convention

Dialtone use [Conventional Commits specification](https://www.conventionalcommits.org/en/v1.0.0/) for the commit messages in the release branches: `production`, `staging`, `alpha` and `beta`. Make sure every commit you want to include in the release notes is meeting this specification.

### Git hooks

To enforce your commit on the release branches are correct according to the commit specification, install the `commit-msg` hook.

In the Dialtone root directory run:

```
npm run prepare
```

## Versioning

Dialtone follows [SemVer](https://semver.org/) for versioning and the commit message convention used in the project is aligned with SemVer by describing the features, fixes, and breaking changes made in commit messages.
