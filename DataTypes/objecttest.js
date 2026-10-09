let u1={
    name:"shikha",
    age:30,
    city:"New York",
};
let u2={
    name:"shikha",
    age:30,
    city:"delhi",
    country:"India"
};
console.log(u1.country);//undefined

u1=u2;
console.log(u1.name);
console.log(u1.age);
console.log(u1.city);
console.log(u1.country);

console.log(typeof u1);
console.log("----------------------");

let u3={}
u3=u1;
console.log(u3.name);
console.log(u3.age);
console.log(u3.city);
console.log(u3.country);
console.log(u3);
// let u3={}
// u1=u3;
// console.log(u1);

