function solution(price) {
    let answer = 0;
    if (price < 100000){
        answer = price
    }
    if (price>=100000 && price < 300000){
        answer = Math.floor(price * 0.95)
    }
    if (price >= 300000 && price < 500000){
        answer = Math.floor(price * 0.9)
    }
    if (price >= 500000){
        answer = Math.floor(price * 0.8)
    }
    return answer;
}