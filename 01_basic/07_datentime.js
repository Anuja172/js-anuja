//In JavaScript, Date is a built-in object used to work with date and time.

let d = new Date();    //type is object imp for interview
console.log(d.toString());
console.log(d.toDateString());
console.log(d.toLocaleDateString());
console.log(d.toLocaleString());
console.log(d.getMonth());  //2 bcoz moth started from 0
console.log(d.getDate());
console.log(d.getHours());
console.log(d.getMinutes());

//In JavaScript, a timestamp is the number of milliseconds that have passed since January 1, 1970 (UTC).
//This starting point is called the Unix Epoch.

let ts = Date.now();
console.log(ts);

 let tss = new Date().getTime();
 console.log(tss);