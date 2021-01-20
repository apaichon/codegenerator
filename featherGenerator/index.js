let appPath = __dirname;
let codeGenerator = require('./scripts');
let configs = require('./config.json');

let templates = configs.templates.map((c) => {
    c.templateFile = appPath+c.templateFile;
    c.outputFile = configs.outputFolder + c.outputFile;
    return c
  })


codeGenerator.generate(templates)




