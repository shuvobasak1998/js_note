const sum = function add(a, b) {
  return a + b;
};
console.log("Sum of two numbers: ", sum(10, 20));
//arrow function
const arrow_fun_add = (a, b) => a + b;
console.log("Arrow function sum of two numbers: ", arrow_fun_add(10, 20));

//square of a number using arrow function and store in variable
const square_arrow = (number) => number * number;
console.log("Square of a number using arrow function: ", square_arrow(25));

//square root of a number using arrow function and store in variable
const square_root_arrow = (number) => Math.sqrt(number);
console.log(
  "Square root of a number using arrow function: ",
  square_root_arrow(25),
);

//CHECKING ADULT OR NOT
const check_adult = (age) => (age >= 18 ? "adult" : "minor");
console.log("Is this person adult or minor...?  : ", check_adult(20));

//EVEN OR ODD
const check_even_or_odd = (number) => (number % 2 === 0 ? "even" : "odd");
console.log("Is this number even or odd...? : ", check_even_or_odd(10));

const users = [
  { id: 1, name: "Shuvo" },
  { id: 2, name: "Rahim" },
  { id: 3, name: "Karim" },
];

const user_name = users.map((user) => user.name);
console.log("User names: ", user_name);
