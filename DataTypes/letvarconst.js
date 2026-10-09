//var let const

//declaration - Var is used in old JS, while let and const are used in modern JS
//Re declaration is allowed in var, but not allowed in let and const
var x=10;
var x=20;
var x=30;
console.log(x);//30 - 3 variable created here with same name and last one is printed

//Reassignment - Var and let can be reassigned, while const cannot be reassigned
var y=10;
y=20;   
console.log(y); //20 - value of y is reassigned to 20

//Hoisting: 
console.log(t);//undefined - var is hoisted to the top of the scope, but its value is not assigned until the line where it is declared
var t=90; // 
console.log(t); //90 - value of t is assigned to 90

//2. let Re declaration is not allowed in let
let z=10;
//let z=20; // SyntaxError: Identifier 'z' has already been declared

//3. const Re declaration is not allowed in const
const a=10;
//const a=20; // SyntaxError: Identifier 'a' has already been declared
