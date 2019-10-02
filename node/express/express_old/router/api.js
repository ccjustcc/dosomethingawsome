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

router.get('/cookies', (req, res) => {
  res.send(req.cookies)
})

router.get('/session', (req, res) => {
  if (req.session.views) {
    req.session.views++
    res.setHeader('Content-Type', 'text/html')
    res.write('<p>views: ' + req.session.views + '</p>')
    res.write('<p>expires in: ' + (req.session.cookie.maxAge / 1000) + 's</p>')
    console.log('seesion', req.session)
    res.end()
  } else {
    req.session.views = 1
    // let bigString = ''
    // for (let i = 0; i < 1000; i++) {
    //   bigString = bigString + '1000101001010011010101010110000'
    // }
    // req.session.bigString = bigString
    res.end('welcome to the session demo. refresh!')
  }
})

router.post('/setUser', (req, res) => {
  const user = new UserModel({

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
  res.json({
    code: 0,
    data: 'data',
    msg: 'success'
  })
})
router.post('/register', (req, res) => {
  const {
    name,
    password
  } = req.body
  const user = new UserModel({
    name,
    password,
    username: name
  })
  console.log('user', user.name = name)
  user.save().then((doc, len, err) => {
    console.log(`result :${doc}`)
    console.log(`err: ${err}`)
    console.log(`three : ${len}`)
    if (err) {
      res.sendStatus(500)
    } else {
      console.log('success---------')
      res.redirect('/login')
    }
  })
})
router.post('/login', (req, res) => {
  const {
    name,
    password
  } = req.body
  UserModel.findOne({
    name
  }).where('password').equals(password).exec((err, result) => {
    if (err) {
      console.log('login query error', err)
    }
    if (result) {
      res.json({
        code: 200,
        data: result,
        msg: 'success'
      })
    } else {
      res.json({
        code: 200,
        data: result,
        msg: 'fail'
      })
    }
  })
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
