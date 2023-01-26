const fs = require('fs');
const iconRegex = /.*@dialpad\/dialtone\/(vue\/.*|.+\.svg)/gm;
let totalIconsCount = 0;

const main = (files, noLineNumbers) => {
  try {
    for (const file of files) {
      const data = fs.readFileSync(file, 'utf8');
      const lines = data.split('\n');
      let iconCount = 0;

      for (const [lineNumber, line] of lines.entries()) {
        const iconMatch = iconRegex.exec(line);
        // If import doesn't match or is a brand icon, continue
        if (!iconMatch || iconMatch.input.includes('/brand/')) continue;

        if (!noLineNumbers) {
          console.log(`\tdeprecated icon usage found on line ${lineNumber + 1}: ${iconMatch.input}`);
        }
        iconCount++;
        totalIconsCount++;
      }
      if (iconCount > 0) {
        console.log(`${file}: ${iconCount} Deprecated icons found`);
      }
    }
    console.log(`Found ${totalIconsCount} total deprecated icons usage in this directory.`);
  } catch (err) {
    console.error(err);
  }
};

module.exports = main;
