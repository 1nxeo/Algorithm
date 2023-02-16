function solution(n) {
    let answer = 0;
    // 제곱근(Math.sqrt())값이 x일때, x+1의 제곱(Math.pow(x+1,2))
    // 제곱근 값이 소숫점까지 나오면, -1
    let x = Math.sqrt(n)
    if (Number.isInteger(x) === true){
        answer = Math.pow(x+1,2)
    }else{
        answer = -1
    }
    return answer;
}