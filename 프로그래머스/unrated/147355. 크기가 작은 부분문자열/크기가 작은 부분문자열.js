function solution(t, p) {
    let answer = 0;
    let strArr = t.split("")
    for(i=0; i<t.length-p.length+1 ; i++){
        Number(strArr.slice(i, i+p.length).join("")) <= Number(p) ? answer += 1 : null
    }
    
    return answer;
}