function digits(number) {
    let digits =0;
    //does 0 have one digit or 0??
    if(number === 0) return 1;
    while(number!=0){
        number = Math.floor(number / 10)
        digits ++
    }
    return digits
}
console.log(digits(10000));