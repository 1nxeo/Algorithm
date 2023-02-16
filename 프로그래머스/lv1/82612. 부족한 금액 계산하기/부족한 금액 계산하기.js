function solution(price, money, count) {
    let answer = -1;
    let total = count*(count+1)/2*price
    
    if(total>money){
        answer = total - money
    }else{
        answer = 0
    }

    return answer;
}