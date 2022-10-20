const fs = require('fs');
const path = require('path');
const SVGFixer = require('oslllo-svg-fixer');

let iconsSource;
let iconsDestination;
const options = {
  showProgressBar: true,
  throwIfDestinationDoesNotExist: false,
  traceResolution: 400,
};

const transformAsync = async (source, destination) => {
  iconsSource = path.resolve(path.join(__dirname, source));
  iconsDestination = path.resolve(path.join(__dirname, destination));

  if (!fs.existsSync(iconsDestination)) {
    fs.mkdirSync(iconsDestination, { recursive: true });
  }

  return new Promise(resolve => {
    SVGFixer(iconsSource, iconsDestination, options).fix(async (err) => {
      if (err) throw err;
      resolve();
    });
  });
};

const transform = (source, destination) => {
  iconsSource = path.resolve(path.join(__dirname, source));
  iconsDestination = path.resolve(path.join(__dirname, destination));

  if (!fs.existsSync(iconsDestination)) {
    fs.mkdirSync(iconsDestination, { recursive: true });
  }

  SVGFixer(iconsSource, iconsDestination, options).fix((err) => {
    if (err) throw err;
  });
};

module.exports = {
  transform,
  transformAsync,
};
