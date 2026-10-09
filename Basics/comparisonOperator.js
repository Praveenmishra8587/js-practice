// == : Loose equality operator - compares values only, does type coercion if types are different
// ===: Strict equality operator - compares values and types, no type coercion / case sensitive

console.log(10==10);
console.log(10== "10");
console.log(10 == '10');

console.log(10 === 10);
console.log(10 === "10");
console.log(10 === '10');
console.log('10' === 10);

//true =1
//false =0

console.log(true == 1);
console.log(1==true);
console.log(false == 0);
console.log(0==false);
console.log( 1=== true);
console.log(0=== false);
//Case sensitive
console.log('hello' == 'Hello');
console.log('hello' === 'Hello');