function calculateNums() {
    let counter =0
    for(let i = 0; i< 1000; i++){
        if(i % 3 === 0 || i % 5 === 0){
            counter += i
        }
    }
    return counter
}
