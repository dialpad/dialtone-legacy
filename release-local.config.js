module.exports = {
  branches: [
    'production',
    'staging',
    {
      name: 'beta',
      prerelease: true,
    },
    {
      name: 'alpha',
      prerelease: true,
    },
  ],
  plugins: [
    ['@semantic-release/commit-analyzer', {
      preset: 'angular',
      releaseRules: [
        { type: 'refactor', release: 'patch' },
      ],
    }],
    ['@semantic-release/release-notes-generator', {
      config: '@dialpad/conventional-changelog-angular',
    }],
    '@semantic-release/changelog',
    ['@semantic-release/npm', {
      npmPublish: false,
    }],
    ['@semantic-release/git', {
      /* eslint-disable-next-line no-template-curly-in-string */
      message: 'chore(release): ${nextRelease.version} \n\n${nextRelease.notes}',
    }],
  ],
};
