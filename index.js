
// // Importing app.js file here
// const app = require('./app')

// const fs = require ('fs')  // Since file system has so many functions. So if we do not need all the functions then we can import only the function that we need. Eg : const fs = require ('fs').writeFileSync;

// // using the installed package "colors"
// const colors = require('colors')

// const chalk =  require('chalk')

// console.log(chalk.blue('Testing the chalk package'))

// console.log("Testing the installed package".bgMagenta)


// console.log(app)

// var a = 5
// var b = 10

// console.log(a+b);
// console.warn('It is another function in Node js')
// // console.error(new error('This is error function in Node js'))


// const arr = [5,6,3,7,9,3,2,6,3,8]


// const result = arr.filter((item)=>{
//     return item === 3
// })
// console.log(`Checking how many times 3 is repeated`,result)

// fs.writeFileSync("hello.txt", "created a new file hello.txt through file sharing system")

// console.log(__dirname)  // This is to check the directory in which we are working







/**** Express js below */

// const express = require ('express')

// const app = express();

// // creating "get" api for displaying any page. Express has, by default, a function "get" which provides ROUTES to us , which takes 2 parameters - 1st will be the route of the page we want to diisplay and 2nd parameter is the call back function which contains request and response as the parameters.

// app.get('', (req, res)=>{ // using html tag and linking another page
//     res.send(`<h1>Hello, this is the Home page</h1>
//         <a href="/about">Go to about page!</a> `)  
// })
// app.get('/about', (req, res)=>{ 
//     // how to pass the value in the parameter and display them ?

//     res.send(`
//         <input 
//         type = "text"
//         placeholder = "This is an input box in the about page"   
//         value = "${req.query.name}"
//         />                                              

//         <button>Click me</button>
//        <a href='/'>Go to home page!</a>`)   // handling input tags
// })
// app.get('/help', (req, res)=>{ 

//     // sending JSON 
//     res.send({
// name : "Deepali",
// email : "deepali@test.com"
//     }
//  )
// })

// app.listen(5000)



// How to access a folder ?  Remember :  When you access the folder, you do not need to require the access of the files inside the folder. It will automatically be accessed.

const express = require ('express')
const app = express();

const path = require('path')
const publicPath = path.join(__dirname,'public')   // path of public folder

//app.use(express.static(publicPath))    // This will access all the static data in the public folder by giving the path with .html extension

app.get('',(req,res)=>{
res.sendFile(`${publicPath}/index.html`)
})
app.get('/about',(req,res)=>{
res.sendFile(`${publicPath}/about.html`)
})
app.get('/help',(req,res)=>{
res.sendFile(`${publicPath}/help.html`)
})

console.log(publicPath);
app.listen(5200)
