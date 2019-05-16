let data = [
  'a20190513test\\css\\index.css',
  'a20190513test\\index.html',
  'a20190513test\\js\\index.js',
  'a20190513test\\js\\js\\index.js',
  'ccdd\\css',
  'ccdd\\index.html',
  'ccdd\\js\\index.js',
  'ccdd\\jgg\\js\\index.js',
  'hel',
  'a20190513test\\js\\js\\js\\js\\js\\js'
]
const obj = {
  title: 'a20190513test',
  children: [
    {
      title: 'css',
      children: [
        'index.css'
      ]
    },
    {
      title: 'index.html',
    },
    {
      title: 'js',
      key: 'index.js',
      children: [
        {
          title: 'js',
          children: [{
            title: 'index.js'
          }]
        }
      ]
    },
  ]
}
let all = []
data.forEach(el => {
  const show = el.split('\\')
  console.log(show)
  let parentPath = el
  show.forEach((e, i) => {
    let parent = show[i - 1] && show[i - 1]
    let child = show[i + 1] && show[i + 1]
    let obj = {}
    obj.title = e
    if (child) {
      obj.children = []
    }
    if (!all[i]) { //总数组没有就添加相应层级对象
      all[i] = {}
      if (!all[i][generateUnionPropoty(parentPath, e)]) { //还没有文件对象 TODO 唯一性有问题
        all[i][generateUnionPropoty(parentPath, e)] = obj
        if (parent) {
          all[i - 1][generateUnionPropoty(parentPath, show[i - 1])].children.push(obj)
        }
      }
      else { // 假如说有这个文件对象了
      }
    } else {
      if (!all[i][generateUnionPropoty(parentPath, e)]) { //还没有文件对象 TODO 唯一性有问题
        all[i][generateUnionPropoty(parentPath, e)] = obj
        if (parent) {
          all[i - 1][generateUnionPropoty(parentPath, show[i - 1])].children.push(obj)
        }
      }
      else { // 假如说有这个文件对象了
      }

    }
  })
})
console.log('result', all)

function generateUnionPropoty(fullString, partString) {
  return fullString.slice(0, fullString.indexOf(partString) + partString.length)
}

// console.log(generateUnionPropoty('a20190513test\\css\\index.css','css'))
