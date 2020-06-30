# Dialpad Design

Dialpad Design is the home for Dialtone, Dialpad's design system. It includes the resources needed to create consistent, predictable interfaces that conform to Dialpad’s design principles, language, styles, and best practices.

## Building Dialtone locally

Here's how to build Dialtone locally:

### Install Ruby via Homebrew:

In order to run Jekyll, you will need a full Ruby development environment. If you already have a Ruby environment installed, move on to the next step.

If you don't have Ruby installed, it's recommended you use Homebrew to install Ruby. First you must [install Homebrew](https://brew.sh/). Enter the following command from a Terminal window:

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
This will take a few minutes to install. Once Homebrew has installed, run the following commands to install Ruby:

```
brew install ruby
brew install brew-gem
brew gem install bundler
```

### Install Node & NPM

To run Dialtone locally, you must have Node and NPM (Node Packet Manager) installed. [Click here to download Node](https://nodejs.org/en/). The recommended Node version is fine. NPM is included with Node. If you already have Node installed, you may move onto the next step.

Once Node finishes installing, ensure it is installed properly by typing the following command in your Terminal window:

```
node -v
```
You should see the following response:
```
v12.13.1
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
cd ./path/to/dialtone
```

### Install Gulp

Dialtone uses [Gulp](https://gulpjs.com/) to automate our development workflow.

```
npm install --global gulp-cli
```

### Install Bundler & Jekyll

The Dialtone documentation website is built using Jekyll, a static HTML generator. To install Jekyll and its dependencies, do the following steps:

- Switch to the `docs` folder in the Dialtone directory. `cd docs`
- Install Bundler and Jekyll locally: `gem install bundler jekyll`
- Install the Bundle: `bundle install`

### Building Dialtone

Once everything is installed, navigate back out of the `docs` folder (`cd ../`). You can now run any of the following commands:

| Command | Run this command if you want to… |
| --- | --- |
| `$ gulp` |  …compile the site **only** (CSS, SVG, HTML). |
| `$ gulp watch` | …compile and **run** the website locally. It should be available at [`http://localhost:4000`](http://localhost:4000) |
| `$ gulp version` | …update the version number on the doc site. |

Dialtone uses [Browsersync](https://www.browsersync.io/) to serve the compiled Jekyll website locally. This means you can have multiple browser windows open that sync actions together. This allows you to test media queries quickly from different window sizes.

### Adding SVG Icons
To add an SVG icon into Dialtone, you must add the SVG file into the `/lib/build/svg` folder.

Next, to ensure that the documentation stays in sync, update the `/docs/_data/icons.yml` file with the following information:

- **icon:** This is a readable name of the icon. _This is used only on the documentation website._
- **file:** This is the SVG file need. This needs to match **exactly**.
- **vue:** This should be the filename, but with **Icon** added to the beginning and with the name in [PascalCase](https://techterms.com/definition/pascalcase).
- **description:** This should provide information about what the SVG communicates and when it is typically used. This should _always_ be wrapped in "quotes".

This information can be added to the bottom of the file. Jekyll sorts this information alphabetically during the build, so there's no need to place it in the correct alphabetical place. Here's an example of the above information in the file:
```
 - icon: Arrow, Backwards
   file: arrow-backwards
   vue: IconArrowBackwards
   desc: "Arrow used to communicate direction. This can be rotated via CSS to point in other directions."
```

## Questions?

If you have a question, please feel free to [open an issue](https://github.com/dialpad/dialtone/issues/new).
