//1. simple function: No input and no output
//simpleTest(); // function Hoisting is allowed in JS, so we can call the function before its declaration

function simpleTest() {
    console.log("simple Test function");
    //No output: No return keyword
}
//call the function
simpleTest();

console.log("--------------------");

//2. No input but some return value

function getName() {
    console.log("getName function");
    return "shikha";
}
let name = getName(); //function call
console.log(name);
console.log(getName());

//3. some input and some return value

/**
 * Adds two numbers
 * @param {number} a 
 * @param {number} b 
 * @returns {number} 
 */

function add(a, b) {
    console.log("add function");
    let c = a + b;
    return c;
}
//add(10,20); //function call
let sum = add(10, 20);
console.log(sum);

console.log("----------------------------");
/**
 * 
 * @param {String} studentName 
 * @returns {number}  this function return the student marks based on the student name
 */

function getStudentMarks(studentName) {
    console.log('getting mark for student : ' + studentName);
    let marks=-1;

    if (studentName == "shikha") {
        //return 90;
        marks = 90;
    }
    else if (studentName == "praveen") {
       // return 100;
        marks = 100;
    }

    else if (studentName == "ravi") {
        //return 80;
        marks = 80;
    }
    else {
        console.log(`${studentName} not found`);
    }
    return marks;
}
let marks = getStudentMarks(1000);
console.log(marks);

console.log("======================");


function getTotalBilling(ProductPrice, quantity, tax) {
    console.log("calculating the final billing.....");
    return ProductPrice * quantity + tax;
    

};
let amt = getTotalBilling(100, 2, 10);
console.log(amt);
console.log(typeof getTotalBilling);
console.log(getTotalBilling.name);
console.log(getTotalBilling.arguments);
console.log(getTotalBilling.length);
