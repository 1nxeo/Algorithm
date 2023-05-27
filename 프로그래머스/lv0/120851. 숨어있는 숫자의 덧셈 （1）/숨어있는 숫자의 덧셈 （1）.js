function solution(my_string) {
    let answer = 0;
    let strArr = my_string.split("")
    strArr.map((item)=> Number(item) ? answer += Number(item) : null)
    return answer;
}