var fs = require('fs');

const readTextFile = (fileName) => {
  return fs.readFileSync(fileName, 'utf8', (err, data) => {
    if (err) throw err;
    return data;
  })
}

const writeTextFile = (fileName, data) => {
  return fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    return "Successfully written to " + fileName;
  })
}

module.exports = {
  readTextFile, 
  writeTextFile
};