const { getBaiduNews } = require('./feature/getBaiduNews')
const express = require('express')
const path = require('path')
const app = express()
const port = 3000
const os = require('os')
const interface = os.networkInterfaces()['本地连接'][1].address
const routes = require('./router')
const fs = require('fs')
// console.log(routes)

// 静态资源服务器
app.use(express.static('./page/static'))
// 设置ejs引擎
app.set('views',path.join(__dirname , 'views') )
app.engine('.html', require('ejs').__express)
app.set('view engine', 'html')

function generateViewRouter(path){
  app.get(`/${path}`,function(req,res){
    res.render(path)
  })
}

// api接口
app.use('/api',routes.apis)

app.get('/',function(req,res){
  res.render('index')
})

fs.readdir('./views', (err, files) => {
  files.forEach(file => {
    console.log(file)
    console.log(typeof file)
    if(file.includes('.')){
      console.log(file.split('.'))
      generateViewRouter(file.split('.')[0])
   }
  });
})

// fs.readFileSync(__dirname)
console.log(__dirname)

app.listen(port,  function () {
  console.log(`running at:http://${interface}:${port}`)
})
