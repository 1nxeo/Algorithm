function solution(numer1, denom1, numer2, denom2) {
    let answer = [];
    let minNum = (a, b) => a % b === 0 ? b : minNum(b, a % b);
    let maxNum = (a , b) => a*b/minNum(a,b)
    
    const denom = maxNum(denom1,denom2)
    
    const num1 = numer1*(denom/denom1)
    const num2 = numer2*(denom/denom2)
    
    if(minNum(num1+num2, denom) === 1){
       answer = [num1+num2, denom]
    }else{
        answer = [(num1+num2)/minNum(num1+num2, denom), denom/minNum(num1+num2, denom)]
    }

    return answer;
}