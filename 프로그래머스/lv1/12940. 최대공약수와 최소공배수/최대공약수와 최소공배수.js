function solution(n, m) {
    let answer = [];
    let minNum = (a, b) => a % b === 0 ? b : minNum(b, a % b);
    
    answer = [minNum(n,m), (n*m)/minNum(n,m)]
    
    return answer;
}