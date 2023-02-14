function solution(a, b) {
    let answer = 0;
    let sum = 0;
    if(a<=b){
        for (i=a;i<=b;i++){
        sum = sum + i
        answer = sum
    }}else{
        for(i=b;i<=a;i++){
        sum = sum + i
        answer = sum
        }   
    }
    
    
    return answer;
}