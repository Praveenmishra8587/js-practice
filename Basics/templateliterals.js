console.log('Hello' + 'Playwright');
let a=10;
let b=20;
let x='hello';
let y='Automation';

console.log(a+b+x+y);//30helloAutomation
console.log(x+y+a+b);//helloAutomation1020
console.log(x+y+(a+b));//helloAutomation30
console.log(a+b+x+y+a+b);//30helloAutomation1020

console.log('the value of a' + a) ;
console.log('the value of b' + b);
console.log('the value of a and b is ' + (a+b));

let para =`Hello this is template literal
I am learning template literals in JS
I am learning JS in 2026`;
console.log(para);

//op: I love 'Javascripy' coding
console.log('I love \'Javascripy\' coding');
console.log('I love \"Javascripy\" coding');
//with template literals we can use single and double quotes without escaping
console.log(`I love 'Javascripy' coding`);
console.log(`I love "Javascripy" coding`);

//dynamic values in template literals
let username='John';
console.log('hello ' + username);
console.log(`Hello, ${username}!`);

let n1=100;
let n2=200;
console.log(`addition of n1 and n2 is ${n1+n2}`);



