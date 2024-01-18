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

