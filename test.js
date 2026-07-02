const name="sheefa";
console.log(`Hello, ${name}! Welcome to the JavaScript world.`);

console.log(`Hello ${name}`);
let a=10;
const b=5;
console.log(a+b);

var x=10;
let y=20;
const c=30;
if(true){
    var x=99;
    let y=88;
    console.log(y);
}
console.log(x);
console.log(y);
console.log(c);



var name1="Varname";
let age=20;
const country="india";
if(true){
    var name1="Changed";
    let age=25;
    console.log("inside block:",name1,age,country);
}
console.log("Outside block:",name1,age,country);

const os = require("os");
console.log(os.platform());
console.log(os.freemem());


function greet(name){
    console.log("Hello"+name);
}
greet("Sheefa");

setTimeout(function () {
  console.log("Hello after 2 seconds!");
}, 2000);


function normalFunc() {
  console.log("Normal function", this); // in Node.js, this = {}
}
normalFunc();

// Function expression
const exprFunc = function() {
  console.log("Function expression", this);
};
exprFunc();

// Arrow function
const arrowFunc = () => {
  console.log("Arrow function", this); // arrow does NOT have its own 'this'
};
arrowFunc();

// Default parameters
function greet(name = "Guest") {
  console.log("Hello,", name);
}
greet("Navya");
greet(); // Uses default

(function () {
  console.log("I run immediately!");
})();


function sayHello() {
  return "Hello!";
}

function greetUser(fn) {
  console.log(fn()); // call the passed function
}

greetUser(sayHello); // Output: Hello!


const greet1=function(name){
    return 'hello ${name}';
}
console.log(greet1('sheefa'));
const greet2=(name)=>{
    return `hello ${name}`;}
console.log(greet2('navya'));

const arr=[1,2,3,4,5];
for(let n of arr) console.log(n);
for(let n in arr) console.log(n);
const doubled=arr.map(n=>n*2);
console.log(doubled);
const filtered=arr.filter(n=>n>3);
console.log(filtered);
const sum=arr.reduce((total,n)=>total+n,0);
console.log(sum);
const sum2=arr.filter(n=>n>3).reduce((total,n)=>total+n,0);
console.log(sum2);