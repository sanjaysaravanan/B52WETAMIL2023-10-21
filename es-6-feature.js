// Object Property Shortend

const fname = "Sanjay";
const role = "Engineer";
const skills = ["Python", "JavaScript", "Java"];

// create a new object with keys fname, role and skills
// const obj = {
//   fname: fname,
//   role: role,
//   skills: skills,
// };

// Object Property Shorthand
// below is same as above object creation
const obj = {
  fname, // fname: 'Sanjay'
  role, // role: 'Engineer'
  skills, // skills: ['Python', 'JavaScript', 'Java']
};

// Templated Literals
// use the above variables fname, role, skills
// display "Sanjay is Engineer with skillset Python, Javascript, Java"

// without template literals
console.log(fname + " is " + role + " with skillset " + skills.join(", "));

// using template literals using back tick
// ${} to use variable/expression values
console.log(`${fname} is ${role} with skillset ${skills.join(", ")}`);

// using template literals using obj
console.log(
  `${obj.fname} is ${obj.role} with skillset ${obj.skills.join(", ")}`
);

// Default function values
function simpleFunction(val1 = 88, val2 = 99) {
  console.log(val1, val2);
}

// what will be value printed
simpleFunction(); // no values given at function calling
// O/P: 88 99

// function call with arguments
simpleFunction(10, 20);
