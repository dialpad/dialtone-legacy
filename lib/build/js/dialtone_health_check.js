#!/usr/bin/env node

/* Will search the files in the provided directory for any properties that are not set to dialtone values.
   It does this by simply checking whether the property is set to a less @variable or CSS var such as var(--val).
   It does not compare to an actual list of dialtone token values so it is not perfect, and sometimes gives false
   positives. This will however give a pretty good idea of where dialtone values aren't being used that should.

   Searches some key properties by default as shown in the defaultSearch array below. You are however not limited to
   this, you can make this application search any css property you wish. See the below options or run this application
   with the -h switch for more details. */

const path = require('path');
const fs = require('fs');
const { docopt } = require('docopt');
const { exit } = require('process');

const doc = `
Usage:
  ./dialtone_health_check <path> [options]

Options:
  <path>                    The directory to recursively search all files in.
  -h --help                 Show this screen.
  -p --property=<property>  CSS Property to search. Default properties if this is not set:
                            color,background-color,border-color,font-family
  --ext=<ext>               Filter by file extension. comma separate to filter multiple. ex: js,vue
  --no-line-numbers         Only output files and their total count, do not output individual instances and their line
                            number.
`;

const options = docopt(doc);

const defaultSearch = [
  'color',
  'background-color',
  'border-color',
  'font-family',
];

const extensionFilters = options['--ext']?.split(',') ?? [''];
let properties = options['--property']?.split(',');
if (!properties) properties = defaultSearch;

function fromDir (startPath, fileExtension) {
  if (!fs.existsSync(startPath)) {
    console.error('Directory not found');
    exit(1);
  }

  const results = [];
  const files = fs.readdirSync(startPath);
  for (let i = 0; i < files.length; i++) {
    const filename = path.join(startPath, files[i]);
    const stat = fs.lstatSync(filename);
    if (stat.isDirectory()) {
      results.push(...fromDir(filename, fileExtension)); // recurse
    } else if (filename.endsWith(fileExtension)) {
      results.push(filename);
    }
  }
  return results;
}
const files = [];
extensionFilters.forEach(extension => {
  files.push(...fromDir(options['<path>'], extension));
});
if (files.length <= 0) { console.error('No files found in directory'); exit(1); }

const regex = properties.map(property => {
  return new RegExp(`^\\s*${property}:\\s(?:(?!var\\(--))(?:(?!@)).*`, 'gm');
});

let totalCount = 0;

try {
  for (const file of files) {
    const data = fs.readFileSync(file, 'utf8');
    const lines = data.split('\n');
    let match;
    let matchCount = 0;
    for (const [lineNumber, line] of lines.entries()) {
      regex.forEach(re => {
        // eslint-disable-next-line no-cond-assign
        while (match = re.exec(line)) {
          if (!options['--no-line-numbers']) {
            console.log(`\tnon-dialtone property found on line ${lineNumber}: ${match}`);
          }
          matchCount++;
          totalCount++;
        }
      });
    }
    if (matchCount > 0) {
      console.log(`${file}: ${matchCount}`);
    }
  }
  console.log(`Found ${totalCount} total ${properties.join(', ')} \
   CSS properties that are not dialtone in this directory.`);
} catch (err) {
  console.error(err);
}
