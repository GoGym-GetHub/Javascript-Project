let space1 = "x";
let space2 = "o";
let space3 = " ";
let space4 = "x";
let space5 = "o";
let space6 = " ";
let space7 = "x";
let space8 = "o";
let space9 = " ";

//if using more that a single sttement as in the word exerise (deveil = ex-wife)
//then use the ${ stuff to define the items needed.}

console.log(`    |    |     `);
console.log(` ${space1}  | ${space1}  | ${space1}  `);
console.log(`    |    |    `);
console.log(`---------------`);
console.log(`    |    |   `);
console.log(` ${space1}  | ${space2}  | ${space3}  `);
console.log(`    |    |   `);
console.log(`---------------`);
console.log(`    |    |   `);
console.log(` ${space2}  |  ${space2} |  ${space3} `);
console.log(`    |    |   `);

if(space1 == space2 == space3){
    console.log("player wins")
}
else{
    console.log("you have failed")
}