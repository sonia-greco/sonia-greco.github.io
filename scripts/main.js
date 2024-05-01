console.log("Task 1");
for (let i = 1; i <= 10; i++) {
    let product = i * i;
    console.log(product);
}

console.log("Task 2");
for (let i = 5; i > 0; i--) {
    console.log(i);
}
    console.log("Blastoff!");

console.log("Task 3");
//for (let i = 1; i <= 25; i++) {
//    let even = i * 2;
//    console.log(even);
//}
for(let i = 2; i <= 50; i+=2){
    console.log(i);
}

console.log("Task 4");
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum = sum + i;
}
console.log(sum);
//loop through 1 to 100 and add them to sum
//print sum

console.log("Task 5");
//loop through 1 to 10
let iFactorial = 1;
for (let i = 1; i <= 10; i++) {
    iFactorial = iFactorial * i;
    console.log(iFactorial);
}
//loop through 1 to i
//multiply ifactorial by your new number
//printifactorial

console.log("Task 6");
let arr = [3, 1, 4, 1, 5];
for (let i = 1; i <= 5; i++) {
}
console.log(arr);

console.log("Task 7");
for (let i = 0; i < arr.length; i++) {
    console.log(arr.at(-i - 1));
}

console.log("Task 8");
let cubed = [];
for (let i = 1; i <= 10; i++) {
    cubed.push(i ** 3);
    console.log(cubed);
}

console.log("Task 9");
let fib = [];
for (let i = 0; i <= 9; i++){
    fib.push(i + i--);
    console.log(fib);
}

    //document.getelement.id
console.log("Task 10");