//JS object : JSON : serialization
//JSON JS object : de-serialization
let user={
    name:"John",
    age:30,
    isActive:true,
    city:"New York",
};

//JS object to JSON : serialization
let userJson = JSON.stringify(user,null,4); //serialization
console.log(userJson);
console.log(typeof userJson);

console.log("----------------------");

//JSON String to JS object : de-serialization
let parsedUser = JSON.parse(userJson); //de-serialization
console.log(parsedUser);
console.log(typeof parsedUser);

console.log(parsedUser.name === user.name);

//

let customer={
    name:"Ravi",
    age:30,
    isActive:true,
    city:"New York",

    address:{
        falt:502,
        zip:10001,
        lat:40.7128,
        long:-74.0060
    },
    devices:["phone", "laptop", "keyboard"],
}

//Js to JSON : serialization
let customerJson= JSON.stringify(customer,null,2);
console.log(customerJson);
console.log(typeof customerJson);

//call an API and send JSON data to server

//JSON to JS object : de-serialization

let parsecustomer= JSON.parse(customerJson);
console.log(parsecustomer);
console.log(typeof parsecustomer);

