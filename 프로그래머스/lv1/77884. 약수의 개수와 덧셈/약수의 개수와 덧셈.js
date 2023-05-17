function solution(left, right) {
    let answer = 0;
    let list = [];
    for(i=left; i<=right; i++){  
        for(k=1; k<=i; k++){
            i/k === parseInt(i/k)? list.push(k) : null
        }
    list.length % 2 === 0 ? answer += i : answer -= i
    list = []
    }
    return answer;
}