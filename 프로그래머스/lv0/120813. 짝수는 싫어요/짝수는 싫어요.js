function solution(n) {
    let answer = [];

    
    for (i=1;i<=n;i++){
        // i%2=1 :홀수
        if(i%2!=0){
            answer.push(i)
        }
    }
    
    return answer;
}