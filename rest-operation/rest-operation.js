// rest operation --> operator ...

const arr = ["sanjay", "surya", "Ajith", "Vijay", "Vikram"];

// destructure sanjay value
const [a] = arr;

console.log(a);

// collect all the values from arr expect sanjay into new array callled args witout slice method

// array rest operation possible only to collection last few rest elements

const [, , ...args] = arr;

console.log(args); // args is an array containing all the elements except sanjay, surya

// function definition
function simpleFunc(arg1, arg2, arg3, arg4, arg5) {
  console.log(arg1, arg2, arg3, arg4, arg5);
}

//  function calling
simpleFunc("sanjay", "surya", "Ajith", "Vijay", "Vikram");

function simpleFuncTwo(arg1, arg2, ...args) {
  // rest operations
  console.log(args);
}

//  function calling
// simpleFuncTwo(arr[0], arr[1], arr[2], arr[3], arr[4]); // spread

// below is same as line 32
simpleFuncTwo(...arr);

// Object Rest operation
const obj = {
  name: "John",
  age: 13,
  gender: "male",
};

const { age, ...restObj } = obj;

console.log(age); // 13

console.log(restObj); // an object containing elements except age { name: "John", gender: "male}
