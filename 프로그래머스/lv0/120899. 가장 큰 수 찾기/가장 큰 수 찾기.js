function solution(array) {
    let answer = [];
    let maxNum = Math.max(...array)
    let index = array.indexOf(maxNum)
    answer = [maxNum, index]
    return answer;
}