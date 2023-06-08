function solution(number, limit, power) {
    let answer = 0;
    let arr = [];

    for(i=1; i<=number; i++){
        let sqrtNum = Math.sqrt(i);
        let countNum = []
        
         for(j=1; j<= sqrtNum; j++){
            if( i % j === 0){
                countNum.push(j)
                if(i/j != j){
                    countNum.push(i/j)
                }
            }
        }
        arr.push(countNum.length) 
    }
    
    arr.map(item => item > limit ? answer += power : answer += item)
    
    return answer;
}