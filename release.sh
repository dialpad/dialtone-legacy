#!/bin/bash

# exit when any command fails
set -e

echo "Enter the name of the version segment you are incrementing (Ex/ major, minor, patch. 'npm version --help' in your cli for all possible args): "
read npmVersionArgument
branch=$(git branch --show-current)

echo "Committing new npm version and setting git tag"
npmcmd="npm version $npmVersionArgument"
echo "$npmcmd"
$npmcmd

version=$(git describe --tags --abbrev=0)

echo "Pushing new commit and tag to remote"
pushcmd="git push --atomic origin $branch $version"
echo "$pushcmd"
$pushcmd
