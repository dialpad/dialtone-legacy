# Releasing
Before you can publish anything to [npmjs](https://npmjs.com), you will need an account, with [2FA enabled](https://docs.npmjs.com/configuring-two-factor-authentication), and be a part of the Dialpad npmjs org.

1. Make sure you are up-to-date locally and in the `staging` branch. Also it’s a good idea to stop your local server while versioning.
2. In your CLI window, run `npm version [major | minor | patch]`. Major versions are breaking changes. Minor versions are large changes but backward compatible. Patches are bug fixes to existing Dialtone items.
3. Run `git push --tags`. This creates a `git` version tag based on the new `npm` version number. **Note:** It does not actually push anything to the `remote` server.
4. Run `gulp version`. This is a custom script I created that reads the current version number out of the `package.json`, copies it into `/docs/_includes/version.html`, and creates a commit. This file is what’s used to render the current version number on the website.
5. Run `git push` to push it all up to staging.
6. Run `npm publish`.
7. Dialtone has been updated on npm now
8. Switch your branch to `production` .
9. Run `git pull` to make sure you have the latest updates.
10. Run `git merge staging` to merge in the latest changes to `production`.
11. Take care of any potential merge issues you might have. Then run `git push`.
12. The documentation website (`dialpad.design`) is now updated.
13. Finally you need [draft a release on Github](https://github.com/dialpad/dialtone/releases/new). You can look at [past releases](https://github.com/dialpad/dialtone/releases/tag/v5.13.0) for reference, but generally I give it a title (What’s the update?) and then a short description of what was added, changed, or fixed.
14. Now you’re done.

## Pre-releasing

For `alpha` and `beta` releases:

1. Make sure you are up-to-date locally and in the appropriate next version branch. Also it’s a good idea to stop your local server while versioning.
2. In your CLI window, run `npm version [major | minor | patch]`. The unofficial standard naming convention for this is `major.minor.patch-prerelease.buildmetadata`. For instance, `6.0.0-alpha.1`.
3. Run `npm publish --tag prelease` For instance, `npm publish --tag beta`. It can then be installed in another project using the specific version number or the tag (i.e. `npm i packagename@beta`).
