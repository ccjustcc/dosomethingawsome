const { getBaiduNews } = require('./feature/getBaiduNews')
const express = require('express')
var path = require('path')
const app = express()
const port = 3000

// 静态资源服务器
app.use(express.static('./page/static'))
// 设置ejs引擎
app.set('views',path.join(__dirname , 'views') )
app.engine('.html', require('ejs').__express)
app.set('view engine', 'html')

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
