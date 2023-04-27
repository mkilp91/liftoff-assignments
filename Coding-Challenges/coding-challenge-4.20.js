function minMax(arr) {
let minMaxArr = [];
arr.sort(function (a, b) {  return a - b;  });
let first = arr[0];
let last = arr[arr.length-1];
minMaxArr.push(last);
minMaxArr.unshift(first);
return minMaxArr;
}
