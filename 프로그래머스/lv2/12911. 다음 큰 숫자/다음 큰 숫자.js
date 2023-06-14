function solution(n) {
    let answer = 0;
    let binary = n.toString(2)
    let countOne = binary.split("0").join("").length
    for(i=n+1;; i++){
        if(i.toString(2).split("0").join("").length === countOne){
            answer = i
            break;
        }
    }
    
    return answer;
}