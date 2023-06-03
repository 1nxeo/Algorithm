function solution(my_string) {
    let answer = '';
    const arr = my_string.split("")
    answer = arr.map(item => item.toLowerCase() === item ? item.toUpperCase() : item.toLowerCase()).join("")
    return answer;
}