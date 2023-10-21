// Converting JSON like string to JS Object

const jsonString =
  '{ "name": "John", "age": 13, "gender": "male", "bio": { "height": "age" }}';

console.log(jsonString.name); // accessing name in string which is wrong

// parse
// JSON.parse();

const obj = {
  name: "sanajy",
  role: "Developer",
};

const jsonObj = JSON.parse(jsonString);

console.log(jsonObj);

console.log(jsonObj.name, jsonObj.age); // accessing name in object

// apply destructure for name & age
const { name, age } = jsonObj;
console.log(name, age);

// console.log(jsonObj.age);
const xhr = new XMLHttpRequest();

xhr.open("GET", "https://restcountries.com/v3.1/all");

xhr.send();

xhr.onload = function () {
  console.log(xhr.responseText);

  const arr = JSON.parse(xhr.responseText);
  console.log(arr);
  for (const country of arr) {
    // console.log(country);
    // print
    // <country-name> flag
    console.log(country.flag, country.name.common); // with country name
  }
};

// JSON Object to String

const bioObj = {
  role: "Engineer",
  country: "India",
  location: "Bengaluru",
  experience: "25 Yrs",
  skills: ["Python", "JavaScript", "Java"],
};
const str = JSON.stringify(bioObj);
console.log(typeof str);

console.log(typeof JSON.parse(str));
