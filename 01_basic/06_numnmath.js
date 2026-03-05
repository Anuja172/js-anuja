const score=400
console.log(score);

const balance = new Number(20)   //see output after explicitely define the type
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));
console.log(balance.toPrecision());

// +++++++++++++++++ Maths ++++++++++++++++++++++

//Math is a built-in object that provides mathematical
//constants and functions.

console.log(Math);
console.log(Math.abs(-7));  //7
console.log(Math.round(4.6));  //5
console.log(Math.floor(4.9)); // 4
console.log(Math.ceil(4.2)); // 5
console.log(Math.sqrt(25)); // 5
console.log(Math.min(5, 2, 9, 1));
console.log(Math.max(5, 2, 9, 1));

//imp
console.log(Math.random());  //between 0 to 1

console.log((Math.random()*10) + 1); //we do this to make value in between 1 to 10
const min =10
const max =20
console.log(Math.floor(Math.random() * (max-min+1)) + min);



