function syncdoSomething(){
  throw new Error('mother fucker')
}
function asyncdoSomething(){
  setTimeout(() => {
      console.log('hellow')
      throw new Error('father fucker')
  }, 1000);
}
try {
  syncdoSomething()
  // asyncdoSomething()
} catch (error) {
  console.log("test error",error)
}