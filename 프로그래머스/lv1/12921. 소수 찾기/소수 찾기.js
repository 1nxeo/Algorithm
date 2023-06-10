function solution(n) {
    const numbers = Array.from({ length: n + 1 }, (_, i) => i);
    numbers[1] = 0;
    
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (numbers[i] === 0) continue;
        
        for (let j = i * i; j <= n; j += i) {
            numbers[j] = 0;
        }
    }
    
    const primes = numbers.filter(number => number !== 0);
    return primes.length;
}