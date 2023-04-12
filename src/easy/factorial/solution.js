function myFactorial(number) {
    //returns number!
    let retVal =1
    for(let i=1;i<=number;i++){
        retVal *= i
    }
    return retVal
}
console.log(myFactorial(5));