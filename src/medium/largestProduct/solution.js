function largestProduct(hugeNumber) {
  let max = 0;
  const digits = hugeNumber.toString().split('')
  console.log(digits);
  for (let i = 0; i < 1000 - 13; i++) {
    let sum = 1;
    for (let j = i; j < 13; j++) {
      sum *= parseInt(digits[j]);
    }
    if (sum > max) {
      max = sum;
    }
  }
  return max;
}
//this works, however when the input is an 1000 digit number the array has the value 'infinity'
console.log(largestProduct(731121112244988877));
