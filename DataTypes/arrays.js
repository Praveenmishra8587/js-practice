//cllection of different and similar types of data in a single variable is called array. It is a collection of similar or different types of data. It is a data structure that can hold more than one value at a time. It is used to store multiple values in a single variable. It is a collection of elements, each identified by an index or key. The elements can be of any data type, including numbers, strings, objects, and even other arrays. Arrays are commonly used in programming to store and manipulate lists of data.
//arrays are dynamic in nature, meaning that their size can change during the execution of a program. They can grow or shrink as elements are added or removed. Arrays are zero-indexed, meaning that the first element is accessed using index 0, the second element using index 1, and so on. Arrays can be created using square brackets [] and can be initialized with values at the time of creation. They can also be created using the Array constructor.
let num=[10,20,30,40,50];
console.log(num[0]);
console.log(num[1]);
console.log(num[5]);//undefined
console.log(num.length);
console.log(num);

//Array methods
num.push(60);//add element at the end of the array
console.log(num);
console.log(num.length);

//add element at 10th index
num[10]=100;
num[8]=300;
console.log(num);
console.log(num[7]);
console.log(num[8]);
console.log(num[9]);
console.log(num[10]);

console.log("--------------------");

let StName=["Tom","Ravi"];

console.log(StName);
StName[0]="Praveen";
console.log(StName);
StName[5]="Shikha";
console.log(StName);

console.log("--------------------");

let empData=["Praveen",1000,"QA",true];
console.log(typeof empData);
console.log(empData);
console.log("--------------------");
//Redeclaration an assigment

const p=[10,20,30];

//const p=[12,23,45]; not allowed redeclaration of const variable
p=[12,23,45];//Not allowed to reassign the value of const variable
console.log(p);

let nm= Array.of(1,2,3,4,5);//creates a new array with the specified elements
console.log(nm);

let nm1= Array.from("Praveen");//creates a new array from an array-like or iterable object and only works for string
console.log(nm1);
