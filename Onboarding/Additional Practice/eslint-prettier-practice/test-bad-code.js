const unused = 5;  // unused variable
const name = "Kai"  // missing semicolon (Prettier fixes this)

function test() {
  var x = 10;  // using 'var' instead of 'const'/'let'
  return x
}

if (name = "Kai") {  // assignment instead of comparison
  console.log("hello")
}