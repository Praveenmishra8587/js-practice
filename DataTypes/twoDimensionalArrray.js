let num = [
    [1, 2, 3],
    [10, 20, 30],
    [100, 200, 300],
    [11,22,33]
]
//3x3 matrix:2D Array: [row][column]
// console.log(num[0][0]);
// console.log(num[2][2]);

//Index: normal loop

// for (let i = 0; i < num.length; i++) {
//     for (let j = 0; j < num[0].length; j++) {
//         console.log(num[i][j]);
//     }
// }
for (let i = 0; i < num.length; i++) {
    for (let j = 0; j < num[i].length; j++) {
         process.stdout.write(`${num[i][j]} `);
    }
    process.stdout.write('\n')
}
console.log("-------------------");
//Jagged array

let marks=[
    [1, 2, 3],
    [10],
    [23, 44, 55, 67],
    [90, 80]
];
console.log(marks);

for( let i=0; i < marks.length; i++){
    for(let j=0; j< marks[i].length; j++){
        process.stdout.write(`${marks[i][j]} `);
    }
    process.stdout.write('\n')
}
