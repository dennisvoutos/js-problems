function multiples(number, multiples) {
    let retVal =[]
    for(let i=1;i<=multiples;i++){
        retVal.push(number * i)
    }
    return retVal
}