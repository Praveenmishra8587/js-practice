let num1 =[10,20,30,40]; 

//print all the value of array using for loop
//if we are writing num.lenth -1 write equal to (i<=num.length-)

for(let i=0; i<num1.length; i++){
    console.log(num1[i]); //10,20,30,40
}
console.log("--------------------");

//for of loop

for (let pm of num1){
    console.log(pm);  
}
console.log("--------- for .. in loop -----------");
// for .. in loop -- in means index and it iterate the index

for( let p in num1){ //p is in string format means index of array are stored in string format
    console.log(p + "=" + num1[p]);
}
console.log("--------------------");
let empData=["Praveen",1000,"QA",true];
for(let e of empData){
    if(e === "QA"){
        console.log("10% hike");
        break;
    }
}
//in the reverse order
for(let l=empData.length-1 ; l>=0 ; l--){
    console.log(empData[l]);
    
}