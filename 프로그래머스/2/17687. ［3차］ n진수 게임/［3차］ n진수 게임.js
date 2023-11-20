function solution(n, t, m, p) {
    let answer = '';
    let sequence = '';

    // 각 참가자가 말할 순서의 수
    for (let i = 0; i < t * m; i++) {
        sequence += i.toString(n);
    }

    // 튜브의 말해야 하는 순서 찾기
    for (let i = p - 1; i < t * m; i += m) {
        answer += sequence[i];
    }

    return answer.toUpperCase();
    
    
    return answer;
}