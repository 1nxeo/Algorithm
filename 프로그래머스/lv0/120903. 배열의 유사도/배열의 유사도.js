function solution(s1, s2) {
    let answer = 0;
    for(i=0;i<s2.length;i++){
        for(j=0;j<s1.length;j++){
            s1[j] === s2[i] ? answer += 1 : answer
        }
    }
    return answer;
}