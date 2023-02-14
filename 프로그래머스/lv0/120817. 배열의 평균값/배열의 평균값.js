function solution(numbers) {
    let answer = 0;
    
    let sum = (numbers[0]+numbers[numbers.length-1])*numbers.length/2
    let average = sum / numbers.length
    answer = average
    return answer;
}