//Post increment and decrement operators
let x = 5;
let y =x++;
console.log(y);//5
console.log(x);//6

let a=-99
let b=a++;
console.log(b); 
console.log(a);

let total =10;
console.log(total++);//10
console.log(total);//11

//2. Pre increment and decrement operators
let c = 5;  
let d = ++c;
console.log(d); 
console.log(c);

//3. Post decrement operator
let e = 5;
let f = e--;
console.log(f); 
console.log(e);

//4. Pre decrement operator
let g = 5;
let h = --g;
console.log(h); //4
console.log(g);//4

let billAmount = 100;
console.log(--billAmount);//99
console.log(billAmount);//99

let amt =10;
console.log(amt--);//10
console.log(amt);//9

console.log("---------------------------------------");

let u=11;
let j = u++ + ++u;
console.log(u);
console.log(j);

let l=11; 
let m=22;

let k = l+m+l++ + m++ + ++l + ++m;
console.log(k);
console.log(l);
console.log(m);

let o=10n;
console.log(++o);//11n

