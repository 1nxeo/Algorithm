function solution(n) {
    let answer = 0;
    let sum = 0;
    for (i=1;i<=n;i++){
        if ( i % 2 == 0){
            sum += i
        }
        answer = sum
    }
    
    

    return answer;
}