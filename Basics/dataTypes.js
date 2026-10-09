//Primitive
//1. Number - 8bytes
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);
//2. String - 2bytes
let str="Hello World";
console.log(str.length);
console.log(String.MAX_SAFE_INTEGER);
console.log(String.MIN_SAFE_INTEGER);
//3. Boolean - 1byte
let isTrue=true;
let isFalse=false;
console.log(isTrue);
console.log(isFalse);
//4. BigInt -Ending with n, used for large integers
let bigInt=9007199254740991n;
console.log(typeof bigInt);

//5.Null - represents the intentional absence of any object value
let nullValue=null;
console.log(nullValue);
console.log(typeof null);
//6. Undefined - represents a variable that has been declared but has not yet been assigned a value
let undefinedValue;
console.log(undefinedValue);
console.log(typeof undefinedValue);