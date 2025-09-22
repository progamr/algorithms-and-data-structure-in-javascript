const factorialOfNumber = (n: number): number => {
    if(n === 0) return 1;
    const rest = n * factorialOfNumber(n - 1);
    console.log(n, '--->', rest);
    return rest;  
}

console.log(factorialOfNumber(5));