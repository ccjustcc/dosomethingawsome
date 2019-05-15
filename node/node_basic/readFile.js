// read => 读取文件的部分内容
// readFile => 读取文件的全部内容

const fs = require('fs')
const file = fs.readFileSync('./README')

function copy(){
  fs.writeFileSync('./copyoutput/',fs.readFileSync('./README'))
}
copy()
console.log('running',file)