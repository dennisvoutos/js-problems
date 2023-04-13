function amicableNumbers() {
    let x = 0
    const amic =[]
    for(let i=1;i<100000;i++){
        x = sumOfDivisors(i)
        if(sumOfDivisors(x) === i){
            amic.push([x,i])
        }
    }
    return amic
}
function sumOfDivisors(num) {
    let sum =0;
    for(let i=1;i<num;i++){
        if(num % i === 0){
            sum += i
        }
    }
    return sum
}
console.log(amicableNumbers()) // took too long for 100,000