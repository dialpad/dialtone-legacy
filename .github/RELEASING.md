# Releasing

In order to push the production branch to trigger a build to [npmjs](https://npmjs.com), you will need to either be an admin of the dialtone repository, be a user with the "Maintain" role or have manually been given permission on your user.

1. Make sure your staging and production branches are up-to-date locally. You should be in the `production` branch. Also it’s a good idea to stop your local server while versioning.
> Note if you would like to deploy a prerelease (alpha or beta). You would do this on a branch named `alpha` or `beta` instead of `production`. This will automatically tag the deployment to npm as a alpha or beta release so npm does not consider it to be the latest version. It could be installed with the command `npm i dialtone@beta`
2. `git merge staging` to merge staging into the production branch to cut a new release.
3. If bumping Dialtone-Vue version, update the badge manually in `/docs/index.html` and commit. (this will be automated soon)
4. In your CLI window, run `./release.sh` from the dialtone repository directory.
5. It will prompt you to enter a version number. Major versions are breaking changes. Minor versions are large changes but backward compatible. Patches are bug fixes to existing Dialtone items.
> Note on a prerelease our convention is major.minor.patch-prerelease.buildmetadata ex. `6.0.0-alpha.1`.
6. After entering your version number the package.json version numbers will be updated and committed with a git tag matching the version you entered. This will then be automatically pushed to the remote which will trigger a deploy
7. You should be able to see your deploy running at https://github.com/dialpad/dialtone/actions
8. When this has completed the new version of the package has been deployed to npm, and the documentation website (`dialpad.design`) is now updated.
9. Merge the production branch back to staging so they remain in sync.
10. Finally you need [draft a release on Github](https://github.com/dialpad/dialtone/releases/new). You can look at [past releases](https://github.com/dialpad/dialtone/releases/tag/v5.13.0) for reference, but generally I give it a title (What’s the update?) and then a short description of what was added, changed, or fixed.
11. Now you’re done.
