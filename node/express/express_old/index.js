const express = require('express')
const path = require('path')
const app = express()
const port = 3000
const os = require('os')
const url = os.networkInterfaces()['本地连接'][1].address
const routes = require('./router')
const fs = require('fs')
const controller = require('./controller')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const db = require('./config/mongodb')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// 设置这个中间件才可以使用req.cookie 但是res.cookie()却可以用，迷，不知为何不默认集成
app.use(cookieParser())
// 静态资源服务器
app.use(express.static('./page/static'))
// 设置ejs引擎
app.set('views', path.join(__dirname, 'views'))
app.engine('.html', require('ejs').__express)
app.set('view engine', 'html')

function generateViewRouter(path) {
  app.get(`/${path}`, function(req, res) {
    controller[`${path}Controller`] ? controller[`${path}Controller`](req, res, path) : res.render(path)
  })
}

// api接口
app.use('/api', routes.apis)

app.get('/', function(req, res) {
  res.render('index')
})

// app.use('',function(req,res,next){ // 用来校验
//   console.log('req----')
//   next()
// })

// 获取视图文件，渲染视图
fs.readdir('./views', (err, files) => {
  if (err) {
    console.log(err)
  }
  files.forEach(file => {
    if (file.includes('.')) {
      generateViewRouter(file.split('.')[0])
    }
  })
})

app.set('view cache', false)

console.log(__dirname)

app.listen(port, function() {
  console.log(`running at:http://${url}:${port}`)
})
