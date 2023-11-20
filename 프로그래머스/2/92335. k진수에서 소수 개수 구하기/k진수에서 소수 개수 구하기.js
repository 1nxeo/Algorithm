function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function solution(n, k) {
    let answer = 0;
    const newNumber = n.toString(k).split("0")
    console.log(newNumber)
    
    newNumber.forEach(item => isPrime(Number(item)) ? answer += 1 : null )
    return answer;
}