function solution(price, money, count) {
    let answer = -1;
    //이용료 합 count*(count+1)/2*price
    let sum = count*(count+1)/2*price
    if (sum>money){
        answer = sum - money
    }else{
        answer = 0
    }
    return answer;
}