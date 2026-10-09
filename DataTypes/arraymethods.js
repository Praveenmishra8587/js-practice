let num =[10,20,30,40 ];
console.log(num);
num.push(50); // add in the end
console.log(num);
//Unshift - add in the first
num.unshift(5)
console.log(num);

//Pop: 
num.pop(); //it will remove the last element
console.log(num);
let i=num.pop();
console.log(`removed value is = ${i}`);

//shift
num.shift(); //removed the first value
console.log(num);

//splice
let fruit=["apple","grapes","banana","cherry"]
console.log(fruit);
fruit.splice(0, 4,"water melon","berries") // remove grapes and add water melon and guwva
console.log(fruit);

console.log("----------------");

let marks=[1,2,3,4,5,6,1];
// console.log(marks.indexOf(1));
// console.log(marks.indexOf(5));
// console.log(marks.indexOf(1));
// console.log(marks.indexOf(20));//-1
console.log(marks.indexOf(1,1));

console.log(marks.indexOf(1, marks.indexOf(1)));



