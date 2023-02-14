function solution(slice, n) {
    let answer = 0;
    let pizza = 0;
    // pizza*slice > n
    // pizza > n / slice
    // 판 > 사람수 / 조각수
    
    if (n <=10){
        if (slice < n){
            pizza = 2
        }else{
            pizza = 1
        }
        
    }else{
        if (n%slice == 0){
            pizza = parseInt(n/slice)
        }else if(n/slice>1){
            pizza = parseInt(n/slice)+1
        }
    }
    answer = pizza
    return answer;
}