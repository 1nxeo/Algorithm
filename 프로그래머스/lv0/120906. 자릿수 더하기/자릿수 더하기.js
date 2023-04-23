function solution(n) {
    let answer = 0;
    let Arr = String(n).split("")
    Arr.map((_,index)=> answer += Number(Arr[index]))
    return answer;
}