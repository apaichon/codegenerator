const featherGenerator = require('./featherGenerator');
const pgMasterTableGenerator = require('./postgresMasterTableGenerator');
const pgSeqGenerator = require('./postgresSeqGenerator');

const generate =(configs)=> {
  let feathers = configs.filter(c => c.provider == "feather")
  let postgresTables = configs.filter(c => c.provider == "postgres" && c.genType == "table"  )
  let postgresSequences = configs.filter(c => c.provider == "postgres" && c.genType == "sequence" )
  feathers.forEach(feather => featherGenerator(feather))
  postgresTables.forEach(table => pgMasterTableGenerator(table))
  postgresSequences.forEach(sequence => pgSeqGenerator(sequence))
}


module.exports = {
  generate
}