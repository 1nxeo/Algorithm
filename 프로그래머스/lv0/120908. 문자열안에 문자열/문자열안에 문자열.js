function solution(str1, str2) {
    let answer = 0;
    str1.includes(str2) ? answer = 1 : answer = 2
    return answer;
}