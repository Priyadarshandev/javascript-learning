// object reference type
// array are good but not sufficient
// for real world date 
// objects store key value pairs
// object don`t have index

// how to create object 

// const person = {Name : "Shivam", Age : 22};
// console.log(person);

const person = {
    name : "shivam",
    age : 22,
    hobbies : ["guitar", "sleeping","listening muice"]
}
console.log(person);


// how to access data from objects

// console.log(person.Name);
// console.log(person.Age);
// console.log(person.hobbies);



// how to add key value pair to objects
// person.gender = "male";
person["person"] = "male";
console.log(person);
