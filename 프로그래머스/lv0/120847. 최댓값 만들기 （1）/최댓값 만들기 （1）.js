function solution(numbers) {
    let answer = 0;
    let newNum = numbers.sort((a,b)=>a-b)
    answer = numbers[numbers.length-1]*numbers[numbers.length-2]
    
    return answer;
}