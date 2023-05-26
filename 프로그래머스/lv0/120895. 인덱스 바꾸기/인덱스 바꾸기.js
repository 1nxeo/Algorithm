function solution(my_string, num1, num2) {
    let answer = '';
    let strArr = my_string.split("")
    let first = strArr[num1]
    let second = strArr[num2]
    strArr.splice(num1, 1, second)
    strArr.splice(num2, 1, first)
    answer = strArr.join("")
    
    return answer;
}