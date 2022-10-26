const fs = require('fs');
const path = require('path');
const svgStrokeToFill = require('oslllo-svg-fixer');

let iconsSource;
let iconsDestination;
const options = {
  showProgressBar: false,
  traceResolution: 100,
};

const transform = (source, destination) => {
  iconsSource = path.resolve(path.join(__dirname, source));
  iconsDestination = path.resolve(path.join(__dirname, destination));

  if (!fs.existsSync(iconsDestination)) {
    fs.mkdirSync(iconsDestination, { recursive: true });
  }

  return new Promise(resolve => {
    svgStrokeToFill(iconsSource, iconsDestination, options).fix((err) => {
      if (err) throw err;
      resolve();
    });
  });
};

module.exports = {
  transform,
};
