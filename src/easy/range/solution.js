function range(numbers) {
  let max = 0;
  let min = numbers[0]; 
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
    if (numbers[i] > max) {
      max = numbers[i];
      //console.log(max);
    }
    //console.log(numbers[i]);

    //console.log("min", min);
  }
  return max - min;
}
console.log(range([10, 15, 2, 22, 11,1]));
