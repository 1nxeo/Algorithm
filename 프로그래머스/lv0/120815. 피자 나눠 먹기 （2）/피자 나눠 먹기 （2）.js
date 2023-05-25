function solution(n) {
    let answer = 0;
    
    const getLcm = (num1, num2) => {
        let lcm = 1;
        while(true){
          if((lcm % num1 == 0) && (lcm % num2 == 0)){
           break;
        }
      lcm++;
    }
  	return lcm
    }
    
    // 6의 배수일 때는 n/6
    // 나머지 수일때는 6과의 최소공배수/6
    
    n % 6 === 0 ? answer = parseInt(n/6) : answer = getLcm(n, 6)/6
    return answer;
}