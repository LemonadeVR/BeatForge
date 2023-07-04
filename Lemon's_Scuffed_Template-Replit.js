// v1.2.0
const fs = require('fs');
const path = require('path');
const archiver = require('archiver');




// Edit these v   (check README.md for help)
const projectName = 'lemon';
const mapName = 'mangoParty';
const inputDif = 'ExpertStandard.dat';
const outputDif = 'ExpertPlusStandard.dat';




const mapFolder = `projects/${projectName}/${mapName}`;
const fullInput = `${mapFolder}/${inputDif}`;
const fullOutput = `${mapFolder}/${outputDif}`;

const {
  getRandomInt,
  getRandomNum,
  getRandomColor,
  createNote,
  createObstacle,
  createEvent,
  createCustomEvent,
  clamp,
  randElement,
  addNoodleRequirement,
  addChromaSuggestion,
  addChromaRequirement
} = require('./libraries/libhelpers.js');

fs.readFile(fullInput, 'utf8', (error, data) => {
  if (error) {
    console.log('File not found! Make sure inputDif and outputDif are correct.');
    return;
  }
 
  const map = JSON.parse(data);

	map._customData = { _environment: [], _customEvents: []}

  // YOUR CODE GOES HERE

	




	// END

  const outputJSON = JSON.stringify(map, null, 2);

  fs.writeFile(fullOutput, outputJSON, 'utf8', (error) => {
    if (error) {
      console.error('An error occurred:', error);
      return;
    }
    console.log('Success!');
  });
});

const zipOutput = fs.createWriteStream(path.join(mapFolder, 'finishedMap.zip'));

const archive = archiver('zip', {
  zlib: { level: 9 } 
});

archive.pipe(zipOutput);

fs.readdir(mapFolder, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  const filesToZip = files.filter(file => path.extname(file) !== '.zip');

  filesToZip.forEach(file => {
    archive.file(path.join(mapFolder, file), { name: file });
  });

  archive.finalize();
});
