const { getBaiduNews } = require('./feature/getBaiduNews')
const express = require('express')
const app = express()
const port = 3000
app.use(express.static('./page/static'))
app.get('/', (req, res) => {
  getBaiduNews().then(data=>{
    res.send(data)
  }).catch((e)=>{
    res.status(500).end()
  })
})

app.listen(port,  function () {
  console.log(`running in port:${port}`)
})
