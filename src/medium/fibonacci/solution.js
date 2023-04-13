//recursive solution, very slow after ~n=40
function fibonacci(number) {
    if(number === 0 ||number === 1){
        return 1
    }else {
        return (fibonacci(number - 1) + fibonacci(number -2))
    }
}
//non recursive method, way quicker and works for n=100 whereas the upper method does not work
function fibonacci2(number) {
    let fib = [0, 1];
    for (let i = 2; i <= number; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[number];
}
console.log(fibonacci2(100));