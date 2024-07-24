// Variable can be declared in 3 ways in javascript

const name1 = [];
console.log(name1);
name1.push("Samantha")
console.log(name1);


let myName = "Mark";
console.log(myName);
myName = 5;
console.log(myName);

{
    var num = 5;
    console.log(num);
}


//String Interpolation
let firstName = "Json";
let lastName = "Andrew";
console.log(firstName + " " + lastName);


let firstName1 = "Sam";
let lastName2 = "Monica";
let fullName = '${firstName} ${lastName}';
console.log(fullName);
console.log(firstName1);


//Default paramas
// let addTwoNumbers(num1, num2) {
//     return num1 + num2;
// }
// console.log(addTwoNumbers(1,2));

// let addTwoNumbers = (num1 + num2) => {
//     console.log(num1);
//     console.log(num2);
//     return num1 + num2;
// };

console.log(addTwoNumbers(1,2));


//Rest and Spread operator are applicable in Arrays and Object in Javascript
//Rest -> ...
//spread -> ...
let array = [5,10,15,20,25];
let newArray = [ ...array];
console.log(array);

//For object
let obj = {
    name: "John",
    age: "24",
    city: "New York",
};
let obj2 = {...obj, country: "USA"};
console.log(obj2);


let object = {
    name: "John",
    age: "24",
    address: {
        city: "New York",
        state: "NY",
        country: "USA",
    },
};
let object2 = JSON.parse(JSON.stringify(object));
object2.address.city = "Newark";
console.log(object2);