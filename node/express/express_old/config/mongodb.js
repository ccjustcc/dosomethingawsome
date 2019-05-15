const mongoose = require('mongoose')
const config = require('./mongodbconfig')
mongoose.connect(config.db)
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  console.log(`connet to mongodb ${config.db} successfully`)
})
module.exports = db
