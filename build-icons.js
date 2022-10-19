const fs = require('fs');
const path = require('path');
const SVGFixer = require('oslllo-svg-fixer');

const iconsSource = path.resolve(path.join(__dirname, './lib/build/svg/new/'));
const iconsDestination = path.resolve(path.join(__dirname, './lib/dist/svg/new/'));

const options = {
  showProgressBar: true,
  throwIfDestinationDoesNotExist: false,
  traceResolution: 200,
};

if (!fs.existsSync(iconsDestination)) {
  fs.mkdirSync(iconsDestination, { recursive: true });
}

SVGFixer(iconsSource, iconsDestination, options).fix((err, fixer) => {
  if (err) throw err;
});
