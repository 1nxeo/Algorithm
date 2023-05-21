function solution(n, numlist) {
    let answer = [];
    numlist.map((item)=>item%n === 0 ? answer.push(item) : null)
    return answer;
}