// object - Non primitive data type
//refrence type
//key value pair

let user={
    name:"John",
    age:30,
    isActive:true,
    city:"New York",

    address:{
        falt:502,
        zip:10001,
        lat:40.7128,
        long:-74.0060
    }
}
console.log(user);
console.log(user.name);
console.log(user.age);
console.log(user.isActive);
console.log(user.city);
console.log(user.tel);//undefined
console.log(user['city']);

console.log(user.address);
console.log(user.address.falt);
console.log(user.address.zip);
console.log(user.address.lat);
console.log(user.address.long);
//add new property
user.email="b@gmail.com";
console.log(user);
//update property
user.name="Jane";
console.log(user);
//delete property
delete user.age;
console.log(user);

