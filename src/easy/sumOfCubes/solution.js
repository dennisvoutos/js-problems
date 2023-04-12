function sumOfCubes(arr) {
    let sum = 0
    for(let i=0;i<arr.length;i++){
        sum += Math.pow(arr[i], 3)
    }
    return sum
}
console.log(sumOfCubes([3,4,5]));