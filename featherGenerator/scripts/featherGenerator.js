const file = require('../libs/fileUtil');
let items = require('../generateList/itemList.json');

function toFeatherDataType(dataType) {

  if (dataType.match(/varchar/)) {
    let length = dataType.substring(dataType.indexOf('('))
    return `DataTypes.STRING${length}`;
  }
  switch(dataType) {
    default:
      return "DataTypes.STRING";
    case "int":
      return "DataTypes.INTEGER";
    case "smallint":
      return "DataTypes.INTEGER";
      case "timestamp":
        return "DataTypes.DATE";
  }
}
const genModels = (config) => {
  let template = file.readTextFile(config.templateFile);
  
  Object.keys(items.models)
    .forEach(a => {
      let fields = ""
      let text = template.replace(/<name>/g,a);
      items.models[a].forEach(field => {
        let dataType = toFeatherDataType(field.dataType)
       
        let allowNull = (field.isRequired=== 'Y'? false:true)
        let aField = 
        `"${field.field}": {
          "type": ${dataType},
          "allowNull": ${allowNull}
        }`;
        fields += aField + ",\n\t\t";
      })
      fields = fields.substring(0,fields.length-1)
      text = text.replace(/<fields>/g,fields);
      file.writeTextFile(config.outputFile + "\\" +a +".model.js" , text)

    })
}

const genClasses = (config) => {
  let template = file.readTextFile(config.templateFile);
  
  items.objects.forEach(a => {
    let outputs = "";
    let text = template.replace(/<name>/g,a);
    outputs +=text ;
    file.writeTextFile(config.outputFile + "\\" +a +".class.js" , outputs)
  })
}

const genHooks = (config) => {
  let template = file.readTextFile(config.templateFile);
  
  items.objects.forEach(a => {
    let outputs = "";
    let text = template.replace(/<name>/g,a);
    outputs +=text ;
    file.writeTextFile(config.outputFile + "\\" +a +".hook.js" , outputs)
  })
}

const genServices = (config) => {
  let template = file.readTextFile(config.templateFile);
  
  items.objects.forEach(a => {
    let outputs = "";
    let text = template.replace(/<name>/g,a);
    outputs +=text ;
    file.writeTextFile(config.outputFile + "\\" +a +".service.js" , outputs)
  })
}

const genConfigure = (config) => {

  let template = file.readTextFile(config.templateFile);
  let requireText ='';
  let configureText = '';

  items.objects.forEach(a => {
    requireText += "const <name> = require('./appSetting/<name>.service')".replace(/<name>/g,a) + '\n';
    configureText += "app.configure(<name>);".replace(/<name>/g,a) + '\n';    
  })
  template = template.replace(/<require>/g, requireText);
  template = template.replace(/<configure>/g, configureText);

  file.writeTextFile(config.outputFile  , template)
}

const generator = (config) => {
  switch(config.genType) {
    case "model":
      genModels(config);
      break;
    case "class":
      genClasses(config);
    break;

    case "hook":
      genHooks(config);
    break;
    case "service":
      genServices(config);
    break;
    case "configure":
      genConfigure(config);
    break;
  }
}

module.exports = generator;