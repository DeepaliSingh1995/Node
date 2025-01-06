* Node is a **"SERVER ENIVRONMENT"** not a programming language !
* Why server environment ?
>  - **Node JS internally uses the code of "JAVASCRIPT"** like JS runs on browser in the **V8 engine** just like Crome's V8 engine but Node has inbuilt V8 engine to execute the code.

> - We can connect Database in Node ; handles file system as well  and it runs on server.

> - It is open source (i.e. we can contribute directly to node community).

* Node is mostly used for API
* Node is written in C, C++ and Javascript.
* Current version : 21.0.0

* **<u>Global and Non-Global modules</u>**
> * Both of them are Core modules.

> * The modules that we need to import are non Global modules and the modules that are inbuilt or we do not need to import are Global modules.

* We have to use a function **require()** under which we have to mention which file we need to import withing single inverted commas, and assign this function to a variable to import anything in Node.js

* **<u>Nodemon package</u>**
> * nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.

> * nodemon does not require any additional changes to your code or method of development.

> - Then for execution of code we do not have to write "node ./file.js" infact we need to write **"nodemon ./file.js"** , the changes will then automatically gets reflected.


* Node js is an **async language** and also a **single threaded** one!!!