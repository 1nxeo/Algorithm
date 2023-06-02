function solution(n) {
    let answer = 0;
    const newNum = n.toString(3).split("").reverse().join("")
    answer = parseInt(newNum, 3)
    return answer;
}