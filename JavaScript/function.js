function add(x, y) {
  return x + y;
}

console.log(add(2, 5));

//local function expression
var multi = function (x, y) {
  return x * y;
};

console.log(multi(2, 5));

//arrow function
var div = (x, y) => {
  return x / y;
};

console.log(div(2, 5));

var twenty = (string) => {
  return `${string} 2022`;
};

console.log(twenty("hello"));

var upper = (string) => {
  return string.toUpperCase();
};

console.log(upper("make me money"));
