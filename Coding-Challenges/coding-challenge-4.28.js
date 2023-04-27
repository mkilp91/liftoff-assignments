function FirstReverse(str) {

  // code goes here
  let reverseArray = str.split('');
  reverseArray.reverse();
  str = reverseArray.join('');
  return str;

}

// keep this function call here
console.log(FirstReverse(readline()));