function solution(n) {
    let answer = 0;
    let Arr = []
    for(i=1; i<=n; i++){
        if(n/i === parseInt(n/i) ){
            Arr.push([i,n/i])
        }
    } 
    
    answer = Arr.length
    
    return answer;
}