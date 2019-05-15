const express = require('express')
const router = express.Router()
const { getBaiduNews } = require('../feature/getBaiduNews')
const UserModel = require('../model/User')

router.get('/getBaiduNews', (req, res) => {
  getBaiduNews().then(data => {
    res.send(data)
  }).catch((e) => {
    res.status(500).end()
  })
})

router.get('/setUser', (req, res) => {
  const user = new UserModel({
    username: 'i am a test +1'
  })
  console.log('saving....')
  user.save((error) => {
    if (error) {
      res.sendStatus(500)
      console.log(error)
    }
    console.log('end')
    res.write('success')
    res.end()
  })
})

module.exports = router
