const { generateSchema } = require('./generate')
module.exports = generateSchema({
  username: String,
  password: Number,
  name: String,
  createTime: Date,
  loginInTime: Date
})
