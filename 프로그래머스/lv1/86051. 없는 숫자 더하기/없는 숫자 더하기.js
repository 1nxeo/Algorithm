function solution(numbers) {
    let answer = -1;
    let sum = 45
    let list = [0,1,2,3,4,5,6,7,8,9]
    for(i=0;i<numbers.length;i++){
        if(numbers[i] in list){
                sum = sum - numbers[i]
                answer = sum
            }
        }
        
    
    return answer;
}