//data types are divided into 2 type which will be divided on the basis of
//call by value and call by reference, means on the way of accessing it

//a.primitive=7 (call by value)
//1.string,2.number,3.null,4.undefined,5.boolean,
//6.symbol(to make unquie),7.bigint

//b.non primitive (reference type)
//array ,objects,functions

//array
const heros=["salman","shahid","ranbir"];

//object
let myObj={
    name:"anuja",
    age:21,
}

//function
const myfunction=function()
{
    console.log("hello world");
}



/*to master javascript master object and browser event*/
//JavaScript is a dynamically typed language.

const id= Symbol('172')
const anoid=Symbol('172')

console.log(id===anoid);

/*Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function(object function)
       Object  =>  object*/




