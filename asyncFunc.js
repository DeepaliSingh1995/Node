// Problem in Async function is shown below

let a = 10
let b = 0

// setTimeout(() => {
//     b = 30
// }, 2000);

// console.log(a+b)     // Problem here is since setTimeout is async function and we are changing the value of b in async function. We can see that the console is still printing the initial value of b instead of the updated one and when the async function is executed then also we are not getting correct answer. This issue can be resolved by using "Promise".


const waitingResponse = new Promise ((resolve, reject)=>{
setTimeout(() => {
    resolve(30)
}, 2000);
})

waitingResponse.then((data)=>{
    console.log(a + data)
})