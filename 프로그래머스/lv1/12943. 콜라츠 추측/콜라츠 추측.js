function solution(num) {
    let answer = 0;
    let n = 0;
    do{
        if(num == 1){ // 1이 주어질 때
            n = 0
        }
        if (num !== 1 && num%2 == 1){ //1을 제외한 홀수
            num=num*3+1
            n++
        }
        if(num%2 == 0){ //짝수
            num = num/2
            n++
        }
        if(num == 1) break; //숫자가 1이 되면 break
    }while (n<=500);
    answer = n
    //500번 반복할 때까지 1이 되지 않을때 return 1
    if (n >= 500 && num !== 1 ){
        answer = -1
    }
    return answer;
}