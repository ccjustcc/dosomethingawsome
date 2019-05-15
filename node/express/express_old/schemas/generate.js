const mongoose = require('mongoose')
const Schema = mongoose.Schema
/**
 * @param  {Object} config Schema generate config
 * @return {Schema} schema
 */
exports.generateSchema = (config) => {
  return new Schema(config)
}

exports.generateModel = (documentname, schema) => {
  return mongoose.model(documentname, schema)
}
