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
    },
    devices:["phone", "laptop", "keyboard"],
};
//for in loop
for(let key in user){
    console.log(key, ':', user[key]);
}

//count of properties in object
console.log(user.devices.length);

