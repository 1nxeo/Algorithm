function solution(n) {
    let answer = 0;
    let list = []
    for ( i=0;i<n;i++){
        n%i===1? list.push(i) : null
    }
answer = list[0]
    
    return answer;
}