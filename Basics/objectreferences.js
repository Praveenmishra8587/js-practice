let u1={
    name:"shikha",
    age:30,
    city:"New York",
};
let u2={
    name:"praveen",
    age:32,
    city:"bengaluru",
};
let u3={
    name:"Ankit",
    age:33,
    city:"Delhi",
};
console.log(u1);//shikha 
console.log(u2);//praveen
console.log(u3);//Ankit 

console.log("----------");
u1=u2;

console.log(u1);//Praveen
console.log(u2);//Praveen
console.log(u3);//Ankit

console.log("----------");
u2=u3;
console.log(u1);//praveen
console.log(u2);//Ankit
console.log(u3);//Ankit

console.log("----------");
u3=u1;
console.log(u1);//praveen
console.log(u2);//Ankit
console.log(u3);//praveen