//join binds our array and also change from array to strings

let fruits = ["Apple", "Mango", "Banana"];
console.log(fruits);
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Mango

let arr = [1,2,3];
arr.push(4);
console.log(arr); // [1,2,3,4]

console.log(fruits.join());
console.log(fruits.join(" - "));

//slice() → copy part of array (original not changed)
let arr1 = [10, 20, 30, 40];
let result = arr1.slice(1, 3);

console.log(result); // [20, 30]
console.log(arr1);    // [10, 20, 30, 40]

//splice() → modify the original array
let r=arr1.splice(1, 2);
console.log(r);
console.log(arr1); 