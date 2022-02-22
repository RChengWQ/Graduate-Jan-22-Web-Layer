//Everything in JavaScript is a function
console.log("Meep");

//global variable
g = 10;

//local variable
//global variale when run on a web browser
var i = 20;

function call() {
  console.log("g: ", g);
  console.log("i ", i);
}

call();

i = "hello";
console.log("outside function:", g, i);
