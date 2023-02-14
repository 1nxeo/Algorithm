function solution(numbers) {
    let answer = 0;
    let sum = 45
    let list = [1,2,3,4,5,6,7,8,9]
    for (i=0;i<numbers.length;i++){
        if(list.includes(numbers[i]) ){
            sum -= numbers[i]
        }
    }
    answer = sum
    return answer;
}