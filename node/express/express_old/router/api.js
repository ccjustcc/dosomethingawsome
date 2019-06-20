const express = require('express')
const router = express.Router()
const { getBaiduNews } = require('../feature/getBaiduNews')
const UserModel = require('../model/User')

router.use((req, res, next) => {
  console.log('res')
  next()
})
router.get('/getBaiduNews', (req, res) => {
  getBaiduNews().then(data => {
    res.send(data)
  }).catch((e) => {
    res.status(500).end()
  })
})

router.post('/setUser', (req, res) => {
  const user = new UserModel({

  })
  // console.log('saving....')
  // user.save((error) => {
  //   if (error) {
  //     res.sendStatus(500)
  //     console.log(error)
  //   }
  //   console.log('end')
  //   res.write('success')
  //   res.end()
  // })
  // res.json({
  //   code: 0,
  //   data: 'data',
  //   msg: 'success'
  // })
})

router.get('/getUser', (res, req, next) => {
  next(new Error('something wrong'))
})
// eslint-disable-next-line no-undef
router.use((error, req, res, next) => {
  console.error(error.stack)
  console.error(error)
  console.log('res')
  res.status(500).send('something wrong')
})

module.exports = router
