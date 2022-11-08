---
title: Build Dialtone Locally
desc: A more thorough guide for installing Dialtone locally.
next:
  text: Writing guidelines - Principles
  link: /guides/content/principles.html
---

We're excited you want to install Dialtone locally as this most likely means you'll be contributing soon! Before you get to get started though,  **please make sure you've read our [contributing docs](https://github.com/dialpad/dialtone/blob/master/.github/CONTRIBUTING.md)**.

## Install Node & npm

To run Dialtone locally, you must have Node and NPM (Node Packet Manager) installed. [Click here to download Node](https://nodejs.org/en/). The recommended Node version is fine. NPM is included with Node. If you already have Node installed, you may move onto the next step.

Once Node finishes installing, ensure it is installed properly by typing the following command in your Terminal window:

```bash
node -v
```

You should see the following response:

```bash
v14.16.1
```

## Clone project

Download the project:

```bash
// SSH
git clone git@github.com:dialpad/dialtone.git

// HTTPS
git clone https://github.com/dialpad/dialtone.git
```

Then `cd` into the Dialtone directory:

```bash
cd ./path/to/dialtone
```

## Install dependencies

Dialtone uses [Gulp](https://gulpjs.com/) to automate its various workflows. Run the following command to install Gulp and all other project dependencies:

```bash
    npm install
```

## Building Dialtone

You're now ready to build Dialtone! To build and run the development server:

```bash
    npm start
```

Once finished, visit `http://localhost:4000/`.
