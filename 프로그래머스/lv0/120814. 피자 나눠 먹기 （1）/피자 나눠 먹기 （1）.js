function solution(n) {
    let answer = 0;
    let pizza = 0
    if(n<7){
        pizza = 1
    }else if(n%7 ==0){
        pizza = parseInt(n/7)
    }else{
        pizza = parseInt(n/7) + 1
    }
    answer = pizza
    
    return answer;
    }

    
    
