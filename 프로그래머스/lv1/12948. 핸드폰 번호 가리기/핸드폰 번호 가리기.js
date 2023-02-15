function solution(phone_number) {
    let answer = '';
    let password = '';
    for (i=0;i<phone_number.length-4;i++){
        password +='*'
    }
    for (i=phone_number.length-4;i<phone_number.length;i++){
        password += phone_number[i]
    }
    
    answer = password
    return answer;
}