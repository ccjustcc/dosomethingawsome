const express = require('express')
const router = express.Router()
const { getBaiduNews } = require('../feature/getBaiduNews')

router.get('/', (req, res) => {
  getBaiduNews().then(data=>{
    res.send(data)
  }).catch((e)=>{
    res.status(500).end()
  })
})

module.exports = router