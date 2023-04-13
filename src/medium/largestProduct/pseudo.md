# Pseudo Code Solution
let max = 0
for(let i =0; i<1000-13;i++){
    let sum = 0
    for(let j=i;j<13;j++){
        sum += arr[j]
    }
    if(sum>max){
        max = sum
    }
}
return max