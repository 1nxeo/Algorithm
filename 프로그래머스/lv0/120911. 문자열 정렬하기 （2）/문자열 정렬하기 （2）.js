function solution(my_string) {
    let answer = '';
   let lower =  my_string.toLowerCase()
    let strArr = lower.split("")
    strArr.sort()

 
    answer = strArr.join("")
    return answer;
}