function solution(n) {
    let answer = 0;
    for(i=1; i<=n ; i++){
        n/i === parseInt(n/i) ? answer += i : null
    }
    return answer;
}