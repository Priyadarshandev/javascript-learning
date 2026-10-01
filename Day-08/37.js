// difference between dot and bracket notaion
const key = "gmail"

const person = {
    name : "shivam",
    age : 22,
   "person hobbies": ["guitar", "sleeping","listening muice"]
}

// console.log(person["person hobbies"]);
person[key] = prompt("enter your email id");
console.log(person)

