// node REPL
//Enter node in the terminal you will have environment like browser console

// node CLI

// const greetings = (name) => {
//     return `Hello ${name}`;
// }

// console.log(greetings("Suresh"));

// const {add, sub} = require('./calculator');

// console.log(sub(6,3));
// console.log(add(4,6));

// const path = require('path');

// const filePath = path.join("users","files","inf.txt");
// console.log(filePath);

const addDays = require('date-fns/addDays');

const result = addDays(new Date(2019,0,1), 3);
console.log(result);
