function solution(x) {
    let answer = true;
    // 자릿수의 합%x == 0
    let sum = 0;
    let list = String(x).split('')
    
    for(i=0;i<list.length;i++){
        sum += Number(list[i]) 
    }
    
    if(x%sum !== 0){
        answer = false
    }
    
    return answer;
}