// Synchronous Function
// 1.
// function f1() {
//     console.log("f1");
//   }
//   function f2() {
//     console.log("f1");
//   }
//   function f3() {
//     console.log("f2");
//   }

//   f1();
//   f2();
//   f3();

// 2. Nested Functions

// function f1() {
//     console.log("last f1");
//   }
//   function f2() {
//     console.log("second f2");
//     f1();
//   }
//   function f3() {
//     console.log("first f3");
//     f2();

//   }
//   f3();





// Asynchronous Function

// 1.
// function f1() {
//     console.log('f1');
// }

// function f2() {
//     console.log('f2');
// }

// function main() {
//     console.log('main');

//     setTimeout(f1, 0);

//     f2();
// }

// main();

//2.
// function f1() {
//     console.log('f1');
// }

// function f2() {
//     console.log('f2');
// }

// function main() {
//     console.log('main');
//     setTimeout(f1,6000)
//     setTimeout(f1, 1000);

//     f2();
// }

// main();

// Callback Function

// const print = function(){
//     console.log("I m Callback");
// }

// setTimeout(print,2000)

// setTimeout(()=>{
//     console.log("Anonymous callback");
// },5000)




//Promise

//1.
// let value = 2
// const promise = new Promise((resolve,reject) =>{
//     if(value%2 == 0 ){
//         resolve("yeahhhh")
//     }else{
//         reject("nooooo")
//     }
// })

// console.log(promise);



//2.
// let value = 3
// let result = true
// const promise2 = new Promise((resolve,reject) =>{
//     if(value%2 == 0 ){
//                 resolve(result)
//             }else{
//                 reject(result = false)
//             }   
// })

// promise2.then(()=>{
//     console.log(result);
// })
// promise2.catch(()=>{
//     console.log(result);
// })


//async/await
const promise = new Promise(()=>{
    setTimeout(()=>{
        return "Await Success";
    },5000)
})
async function func(){
    result =  await promise
    console.log(result);
    console.log("first");
}
func()


//two doubts