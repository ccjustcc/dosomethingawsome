const { generateModel } = require('../schemas/generate')
const UserSchema = require('../schemas/userSchema')
module.exports = generateModel('Customer', UserSchema)
