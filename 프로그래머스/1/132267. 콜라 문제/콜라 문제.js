function solution(a, b, n) {
    let answer = 0;
    while(n >= a){
        const bottlesChanged = Math.floor(n/a)*a // 마트에 주는 병
        const newBottle = Math.floor(n/a)*b // 새로 받는 병
        answer += newBottle
        n = n - bottlesChanged + newBottle
    }
    return answer;
}