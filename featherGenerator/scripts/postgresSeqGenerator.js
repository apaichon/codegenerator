const file = require('../libs/fileUtil');
let items = require('../generateList/itemList.json');


const generator = (config) => {
  let template = file.readTextFile(config.templateFile);
  let outputs = "";
  items.objects.forEach(a => {
    let text = template.replace(/<name>/g,a);
    text = text.replace(/<schema>/g,config.schema);
    text = text.replace(/<owner>/g,config.owner);
    outputs +=text +"\n";
  })

  file.writeTextFile(config.outputFile, outputs)
}

module.exports = generator;