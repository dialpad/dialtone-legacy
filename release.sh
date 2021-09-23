#!/bin/bash

# exit when any command fails
set -e

echo "Enter the name of the version segment you are incrementing (Ex/ major, minor, patch. 'npm version --help' in your cli for all possible args): "
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
