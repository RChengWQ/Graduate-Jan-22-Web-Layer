const arr = [10, 56, 23, 89, 19];

const ten_thirty = (x) => {
  return x > 10 && x < 30;
};

console.log(arr.find(ten_thirty));

console.log(arr.filter((ele) => ele < 20 || ele > 40));
