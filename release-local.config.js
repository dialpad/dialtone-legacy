module.exports = {
  branches: [
    'production',
    'staging',
    'DT-424-ci-deploy-website-independently-of-library',
    {
      name: 'beta',
      prerelease: true,
    },
    {
      name: 'alpha',
      prerelease: true,
    }
  ],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    ["@semantic-release/npm", {
      "npmPublish": false,
    }],
    ["@semantic-release/git", {
      "message": "chore(release): ${nextRelease.version} \n\n${nextRelease.notes}"
    }]
  ]
}
