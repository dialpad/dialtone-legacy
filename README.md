# Dialpad Design

Dialpad Design is the home for Dialtone, Dialpad's design system. It includes the resources needed to create consistent, predictable interfaces that conform to Dialpad’s design principles, language, styles, and best practices.

**This is under construction.**

## Building Dialtone locally

Here's how to build Dialtone locally:

### Install Ruby via Homebrew:

In order to run Jekyll, you will need a full Ruby development environment. If you don't have this, install Ruby using Homebrew with the steps below. If you already have a Ruby environment installed, move on to the next step.

```
brew install ruby
brew install brew-gem
brew gem install bundler
```

### Clone the repo

First download the repo to your machine:

```
// SSH
git clone git@github.com:dialpad/dialtone.git

// HTTPS
git clone https://github.com/dialpad/dialtone.git
```

Then `cd` into the Dialtone directory:
```
cd /dialtone
```

### Install Gulp

This assumes Node and NPM are already installed. If you don't have these installed, *please install those first.* If you do have Node and NPM installed, proceed with installing gulp:

```
npm install gulp
```

### Install Bundler & Jekyll

Dialtone currently uses Jekyll, a static HTML generator, to build its documentation. Use Bundler to install Jekyll and its dependencies.

- Switch to the `docs` folder in the Dialtone directory. `cd docs`
- Install Bundler and Jekyll: `gem install jekyll bundler`
- Install the Bundle: `bundle install`

### Building Dialtone

Once everything is installed, navigate back out of the `docs` folder (`cd ../`) and start your server by typing the following command:

```
gulp
```

Dialtone should now be available at `http://localhost:4000`

## Questions?

If you have a question, please feel free to [open an issue](https://github.com/dialpad/dialtone/issues/new).
