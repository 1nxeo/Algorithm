function solution(my_string) {
    let answer = '';
    let vowels = 'aeiou'
    let arr = my_string.split("")
    arr.map(item => item === " " ? answer += item : vowels.includes(item) ? null : answer += item)
    
    return answer;
}