let num=[1,2,3,4,5,];
for(e of num){
    let count = num.length -num.indexOf(e)-1;
    console.log(num[count]);
    
}

console.log("-------------------");

let counter = num.length-1;
for(let e in num){
    e= counter;
    console.log(num[e]);
    counter--;
}

