//1 Given an array of objects, write a function that returns a new array with only the names of each object.
// const users = [
//   { id: 1, name: 'Alice', age: 30 },
//   { id: 2, name: 'Bob', age: 25 },
//   { id: 3, name: 'Charlie', age: 35 }
// ];

// const newarr = users.map((item)=>{return item.name})

// console.log(newarr);


//2 Given an array of objects, write a function that returns a new array with only the objects whose “completed” property is true.

// const users = [
//    { id: 1, name: 'Alice', age: 30, 'completed':true },
//    { id: 2, name: 'Bob', age: 25 , 'completed':false },
//    { id: 3, name: 'Charlie', age: 35 , 'completed':false },
//    { id: 4, name: 'Charlie', age: 35 , 'completed':true },
//    { id: 5, name: 'Charlie', age: 35 , 'completed':true }
// ];

// const newarr = users.filter((item)=>{return item.completed === true}).map((item)=>{return item})
// console.log(newarr);


//3 Given an array of objects, write a function that returns the total amount of money for all the objects.

// const users = [
//    { id: 1, name: 'Alice', age: 30, 'completed':true , money: 400 },
//    { id: 2, name: 'Bob', age: 25 , 'completed':false , money: 1400 },
//    { id: 3, name: 'Charlie', age: 35 , 'completed':false, money: 400  },
//    { id: 4, name: 'Charlie', age: 35 , 'completed':true , money: 200 },
//    { id: 5, name: 'Charlie', age: 35 , 'completed':true , money: 600 }
// ];

// const sum = users.reduce((c,item)=>{
//     return item.money + c
// },0)

// console.log(sum);

//4 Given an array of strings, return a new array with the length of each string.

// const arr = ["apple", "banana", "cherry"];

// const newarr = arr.map((item) =>{return item.length})

// console.log(newarr);


//5 Given an array of objects representing people, return a new array with the full names of each person.

// const people = [  
//                   { firstName: "John", lastName: "Doe" },
//                   { firstName: "Jane", lastName: "Doe" },  
//                   { firstName: "Bob", lastName: "Smith" }
//                ];

// const fname = people.map((item) =>{return `${item.firstName} ${item.lastName}`})

// console.log(fname);