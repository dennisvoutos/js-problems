function pascalsTriangle(number) {
    const arr = []
    for(let i=0;i<number;i++){
        arr[i] = []
        if(i===1)arr.push(1)
        for(let j=0;j<=i;j++){
            if(j === 0 || j === i ){
            arr[i][j] = 1
            } else {
                arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j];
            }
        }
    }
    return arr
}
console.log(pascalsTriangle(10));