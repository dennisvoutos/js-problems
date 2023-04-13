function coins(number) {
  let coin1 = 0;
  let coin5 = 0;
  let coin10 = 0;
  let coin25 = 0;
  let coin100 = 0;
  console.log('Original number: ',number);
  if (number <= 0) return 0;
  while (number !== 0) {
    if (number >= 100) {
      number -= 100;
      coin100++;
    } else if (number >= 25) {
      number -= 25;
      coin25++;
    } else if (number >= 10) {
      number -= 10;
      coin10++;
    } else if (number >= 5) {
      number -= 5;
      coin5++;
    } else if (number >= 1) {
      number--;
      coin1++;
    }
  }
  
  console.log(
    "100 * " +
      coin100 +
      "\n25 * " +
      coin25 +
      "\n10 * " +
      coin10 +
      "\n5 * " +
      coin5 +
      "\n1 * " +
      coin1
  );
}
coins(102)
