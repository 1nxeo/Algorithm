function getAllDivisors(number) {
  const divisors = [];
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      divisors.push(i);
    }
  }
  return divisors;
}


function solution(brown, yellow) {
    let answer = [];
    const total = brown + yellow
    const divisorY = getAllDivisors(yellow)
    
    for(i=0; i<divisorY.length; i++){
        let widthY = divisorY[i];
        let heightY = divisorY[divisorY.length - 1 - i] ?? widthY;
        const widthB = widthY + 2
        const heightB = heightY + 2
        
        if(widthY >= heightY && widthB * heightB === total){
            answer = [widthB, heightB]
            break;
        }
        
    }

    
    
    
   
    
    return answer;
}