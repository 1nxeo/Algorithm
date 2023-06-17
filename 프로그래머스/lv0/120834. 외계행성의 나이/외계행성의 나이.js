function solution(age) {
    let answer = '';
    let strAge = String(age)
    let num = '0123456789'
    let str = 'abcdefghij'
    answer = strAge.split("").map(item => str[num.indexOf(item)]).join("")
    return answer;
}