# Releasing

## Requirements to run `semantic-release`, which is used in this guide https://semantic-release.gitbook.io/semantic-release/#requirements

`semantic-release` uses the commit messages to determine the consumer impact of changes in the codebase. In Dialtone we use [conventional commits specification](https://www.conventionalcommits.org/en/v1.0.0/#specification) for commit messages, so semantic-release automatically determines the next semantic version number, generates a changelog and publishes the release.

| Commit Type                 | Release type  |
|-----------------------------|:-------------:|
| Commit with breaking change | Major release |
| Commit with type feat       | Minor release |
| Commit with type fix        | Patch release |
| Commit with type perf       | Patch release |

## Steps

In order to push the `production` branch to deploy the documentation site and/or trigger a release to [npmjs](https://npmjs.com) and Github Releases, you will need to either be an admin of the Dialtone repository, be a user with the "Maintain" role or have manually been given permission on your user.

### Production release:

1. Make sure your `staging` and `production` branches are up-to-date locally.
2. Checkout to `staging` branch.
3. Stop your local server and keep your working directory clean before versioning.
4. In your CLI window, run `npm run release` from the Dialtone repository directory.
5. If there are changes that should trigger a release:
   - The script will update the `package.json` and `package-lock.json` files with the version number according to the types of changes introduced since the last release and will add release notes in the `CHANGELOG.MD` file. 
   - A release commit and a git tag associated with this commit will be created and pushed to the remote.
6. If there are no relevant changes to trigger a release, you can still deploy changes to the documentation site.
7. We are ready to deploy the release. Switch to the `production` branch: `git checkout production`.
8. Merge the release commits from `staging` using [`fast-forward` strategy](https://git-scm.com/docs/git-merge#Documentation/git-merge.txt---ff-only): `git merge staging --ff-only`.
9. If the commits merged correctly, we can now push to the remote: `git push`.
10. If there were changes to the library, GitHub Actions will now deploy a new release of Dialtone to npm.
11. Github Actions will now deploy the documentation site to our GitHub Pages site: [dialpad.design](https://dialpad.design).
12. You should be able to see your deployment running at [Dialtone Github actions](https://github.com/dialpad/dialtone/actions).
13. When the Github Actions have been completed, the new version of the package should have been deployed to Github releases, npm, and the documentation website (`dialpad.design`) is now updated (if it was a production release).
14. Now you’re ready to update your projects to use the latest Dialtone version 🎉.

### Pre-release (`alpha` or `beta`):

1. Merge your feature branch to `beta` or `alpha`.
2. Checkout to `beta` or `alpha` branch.
3. Stop your local server and keep your working directory clean before versioning.
4. In your CLI window, run `npm run release` from the Dialtone repository directory.
5. If there are changes that should trigger a release:
   - The script will update the `package.json` and `package-lock.json` files with the version number according to the types of changes introduced since the last release and will add release notes in the `CHANGELOG.MD` file. 
   - A release commit and a git tag associated with this commit will be created and pushed to the remote.
6. If there are no relevant changes to trigger a release, you can still deploy changes to the documentation site.
7. Since your pre-release branch was pushed to the remote, the deploy Github Action should have been triggered.
8. Merge the release you have made on `beta` or `alpha` branch into your feature branch so you have the release commit in sync:
   - Replace `$FEATURE_BRANCH` with your feature branch name and `$RELEASED_BRANCH` with the branch name you have released `beta` or `alpha`:
      ```
      git checkout $FEATURE_BRANCH
      git merge --ff-only $RELEASED_BRANCH
      ```
9. Push to the remote: `git push`.
10. You should be able to see your deployment running at [Dialtone Github actions](https://github.com/dialpad/dialtone/actions).
11. When the Github Actions have been completed, the new version of the package should have been deployed to Github releases, npm.
12. Now you’re ready to update your projects to use the recently deployed Dialtone version 🎉.
