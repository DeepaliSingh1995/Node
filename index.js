
// Importing app.js file here
const app = require('./app')

const fs = require ('fs')  // Since file system has so many functions. So if we do not need all the functions then we can import only the function that we need. Eg : const fs = require ('fs').writeFileSync;

// using the installed package "colors"
const colors = require('colors')

const chalk =  require('chalk')

console.log(chalk.blue('Testing the chalk package'))

console.log("Testing the installed package".bgMagenta)


console.log(app)

var a = 5
var b = 10

console.log(a+b);
console.warn('It is another function in Node js')
// console.error(new error('This is error function in Node js'))


const arr = [5,6,3,7,9,3,2,6,3,8]


const result = arr.filter((item)=>{
    return item === 3
})
console.log(`Checking how many times 3 is repeated`,result)

fs.writeFileSync("hello.txt", "created a new file hello.txt through file sharing system")

console.log(__dirname)  // This is to check the directory in which we are working