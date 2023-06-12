function solution(k, m, score) {
    let answer = 0;
    let arr = [];
    score.sort((a,b)=> b-a)
    for(i=0; i<score.length; i += m){
        arr.push(score.slice(i, i+m))
    }
    for(i=0; i<arr.length; i++){
        if(arr[i].length == m){
            answer += arr[i][m-1]*m
        }
    }
    return answer;
}