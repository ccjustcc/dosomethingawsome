/**
   * @param  {Object req} req
   * @param  {Object res} res
   * @param  {String} path render name
   */
const cookieController = (req, res, path) => {
  const data = {
    cookies: req.cookies
  }
  res.render(path, data)
}
const requestController = (req, res, path) => {
  const data = {
    req
  }
  res.render(path, data)
}
module.exports = {
  cookieController,
  requestController
}
