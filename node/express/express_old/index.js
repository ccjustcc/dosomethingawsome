const { getBaiduNews } = require('./feature/getBaiduNews')
const express = require('express')
const app = express()
const data = getBaiduNews()
const port = 3000
app.use(express.static('./page/static'))
app.get('/', (req, res) => {
  // res.send(data)
  res.send('motherfucker')
})

app.listen(port,  function () {
  console.log(`running in port:${port}`)
})
