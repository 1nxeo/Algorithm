function solution(phone_number) {
    let answer = '';
    let number ='';
    for(i=0;i<phone_number.length-4;i++){
        number += '*'
    }
        
    for(i=phone_number.length-4;i<phone_number.length;i++){
        number += phone_number[i]
    }
    console.log(number)
    answer = number
    return answer;
}