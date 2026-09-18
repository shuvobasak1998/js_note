const student = {
  'id': 1,
  'name': 'shuvo',
  'email': 'shuvo@gmail.com',
  'age': 28,
};

console.log('Students Name:'+student.name); //bad practice
console.log(`Student Name: ${student.name}`); //good practice
console.log(`Student id: ${student.id}, Student name: ${student.name}, Student age: ${student.age}`); //good practice



//second practice
const product = {
    name: "Laptop",
    price: 80000,
    quantity: 5
};

product.quantity = 4;

console.log(product);


//Exercise 3

product.category = "Electronics";

console.log(product);


//Exercise 4
const user = {
    name: "Shuvo",
    address: {
        city: "Dhaka",
        country: "Bangladesh"
    }
};

console.log(user.address.city);

//Exercise 5
const user_info = {
    name: "Shuvo",
    skills: ["Laravel", "React", "JavaScript"]
};

console.log(user_info.skills[1]);

//Exercise 6
const order = {
    id: 1001,
    customer: {
        name: "Shuvo"
    },
    products: [
        {
            name: "Chair",
            price: 5000
        },
        {
            name: "Table",
            price: 8000
        }
    ]
};

console.log(order.customer.name);
console.log(order.products[1].price);
