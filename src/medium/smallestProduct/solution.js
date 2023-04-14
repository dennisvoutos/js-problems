function primeFactors(n) {
    const factors = [];
    let divisor = 2;
    while (n >= divisor) {
      if (n % divisor === 0) {
        factors.push(divisor);
        n = n / divisor;
      } else {
        divisor++;
      }
    }
    return factors;
  }
  
  // Find the prime factors of all numbers from 1 to 20
  const allFactors = {};
  for (let i = 2; i <= 20; i++) {
    const factors = primeFactors(i);
    for (let j = 0; j < factors.length; j++) {
      const factor = factors[j];
      const count = factors.filter((f) => f === factor).length;
      if (!allFactors[factor] || allFactors[factor] < count) {
        allFactors[factor] = count;
      }
    }
  }
  
  // Multiply the highest power of each prime factor together to get the LCM
  let lcm = 1;
  for (const factor in allFactors) {
    lcm *= factor ** allFactors[factor];
  }
  
  console.log(lcm); // Output: 232792560
  //this number has the numbers 1-20 as it's perfect divisors and is the smallest number to do so