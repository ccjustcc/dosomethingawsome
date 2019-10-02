/**
   * @param  {Object req} req
   * @param  {Object res} res
   * @param  {String} path render name
   */
const cookieController = (req, res, path) => {
  const data = {
    // cookies: req.cookies
    cookies: 'this is a test'
  }
  res.render(path, data)
}
const requestController = (req, res, path) => {
  const data = {
    req
  }
  res.render(path, data)
}

const loginController = (req, res, path) => {

}

const registerController = (req, res, path) => {

}
module.exports = {
  cookieController,
  requestController
}
