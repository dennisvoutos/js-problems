function reverse(str) {
    let retVal =''
    for(let i=str.length - 1; i >=0;i--){
        retVal += str.charAt(i)
    }
    return retVal
}
