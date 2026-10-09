//addition - will work as contatenation if one of the operand is string
console.log(1+1);//2
console.log("1"+1);//"11"
console.log("1"+"1");//11
console.log(1+"1");//11
console.log(1+1+"1");//21

//Subtraction
console.log(1-1);   //0
console.log("1"-1);//0
console.log("1"-"1");//0
console.log("5"-2);//3
console.log("5"-"2");//3
console.log(5-'Hello');//NaN - Not a Number
console.log('hello' -10);//NaN - Not a Number
console.log('hello' -'10');//NaN - Not a Number

//Multiplication
console.log(1*"1");//1*1=1
console.log(-1 +"1"*1);//-1+1=0

//division
console.log(10/"2");//5
console.log("10"/"2");//5
console.log(10+ "10"/"2");//15
console.log(10+ "10"+ "10");//101010
console.log(10 -"10"- "10");//-10

//unary plus operator - converts string to number
console.log(+"10" +5);//15
console.log(+"10" + +"5");//15
let billAmount="100";
console.log(+billAmount +100);//200


//Unary minus operator - converts string to number and negates it
console.log(-"10" +5);//-5
console.log(-billAmount+200);//100

//ParseInt() - converts string to number
console.log(parseInt("10")+5);

console.log(-"42" + "5"); // -425








