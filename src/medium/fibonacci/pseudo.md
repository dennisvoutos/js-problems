# Pseudo Code Solution
//rec solution
if(number === 0 || number === 1){
    return 1
} else {
    return (fib(number -1) + fib(number -2))
}