function solution(participant, completion) {
    let answer = '';
    
    let name = participant.sort()//["eden","kiki","leo"]
    let fin = completion.sort()//["eden","kiki"]
    for(let i=0;i<participant.length;i++){
        if(name[i]!=fin[i]){
            answer= name[i]
            return answer;
        }
    }
    return answer;
}