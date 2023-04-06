function solution(money) {
    let answer = [];
    let coffee = parseInt(money/5500)
    let change = money - coffee*5500
    answer.push(coffee)
    answer.push(change)
    return answer;
}