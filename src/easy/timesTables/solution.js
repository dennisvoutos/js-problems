function timesTables(number) {
    let arr = []
    for(let i=1;i<=12;i++){
        arr[i] = ['X',i,number*i]
    }
    return arr
}
console.log(timesTables(5));