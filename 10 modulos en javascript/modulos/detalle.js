function factorial(a) {
    let factorial = 1;
    for (let i = 2; i <= a; i++) {
        factorial *= i; 
    }
    return factorial;
}

console.log(factorial(10))