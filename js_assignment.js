//1.

let cakes = ["carrot", "sponge", "chocolate", "red velvet"];

//a. find()
let c = cakes.find((cake) => cake != "chocolate");

//b. filter()
c = cakes.filter((cake) => cake != "chocolate");

//c. map()
c = cakes.map((cake) => cake != "chocolate");

//d. reduce()
let num = [1, 2, 3, 4, 5];

c = num.reduce((prev, curr) => {
  return prev + curr;
}, 0);

//e. slice()
c = cakes.slice(1, 3);

// f. splice()
c = cakes.splice(2, 1, "lemon");

//2. Closure
function divide(x) {
  return function (y) {
    return y / x;
  };
}

var half = divide(2);
var third = divide(3);
console.log(half(20));

//3. Merge and remove duplicates
function merge_array(arr1, arr2) {
  let new_arr = arr1.concat(arr2);
  return new_arr.filter((ele, index) => new_arr.indexOf(ele) === index);
}
var array1 = [1, 2, 3];
var array2 = [2, 30, 1];
console.log(merge_array(array1, array2));

//4. email pattern matching
const pattern =
  /^[a-zA-Z0-9\/!#^$%_&'=*+?-`{|}~]+[.]*[a-zA-Z-9\/!#^$%_&'=*+?-`{|}~]+@[a-zA-Z0-9-]+.[a-zA-Z0-9]+$/;

//5. form values
function getFormValue() {
  let first_name = document.forms["form1"]["fname"].value;
  let last_name = document.forms["form1"]["lname"].value;
}

//6. remove dropdown list items
function removecolor() {
  let color = document.getElementById("colorSelect");
  color.remove(color.selectedIndex);
}

//7. hightlight bold on mouseover
document.querySelector("a").addEventListener("mouseover", function (event) {
  document.querySelector("strong").style.backgroundColor = "yellow";
});

//8. month from date
function month_name(date) {
  let month_name = date.toLocaleString("default", { month: "long" });
  return month_name;
}

//9. is weekend?
function is_weekend(date) {
  let d = new Date(date);

  if (d.getDay() == 0 || d.getDay() == 6) {
    return "weekend";
  }
}

//10. library status
var library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
    libraryID: 1254,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
    libraryID: 4264,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
    libraryID: 3245,
  },
];

library.forEach((book) =>
  console.log(
    `Title: ${book.title} Author: ${book.author} Reading Status: ${book.readingStatus}`
  )
);

//11. clock
function clock() {
  setInterval(() => {
    const now = new Date();
    console.log(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);
  }, 1000);
}

//12. sort library
function sortLibrary() {
  library.sort((a, b) => a["libraryID"] - b["libraryID"]);
  return library;
}

console.log(sortLibrary());

//13. promises
const promise = new Promise((resolve, reject) => {
  let rand = Math.floor(Math.random() * 51);

  if (rand % 2 == 0) {
    resolve(`${rand} Yay, It's even`);
  } else {
    reject(`${rand} Boo, It's odd`);
  }
});

promise
  .then((message) => {
    console.log(message);
  })
  .catch((message) => {
    console.log(message);
  });
