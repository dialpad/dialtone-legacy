#!/bin/bash

# exit when any command fails
set -e

echo "Enter the version number of this release Ex/ 6.0.2 or 6.0.0-beta.16: "
read version
branch=$(git branch --show-current)

echo "Committing new npm version and setting git tag"
npmcmd="npm version $version"
echo "$npmcmd"
$npmcmd

echo "Pushing new commit and tag to remote"
pushcmd="git push --atomic origin $branch v$version"
echo "$pushcmd"
$pushcmd
