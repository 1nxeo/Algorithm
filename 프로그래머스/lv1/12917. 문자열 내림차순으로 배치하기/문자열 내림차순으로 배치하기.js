function solution(s) {
    let answer = '';
    const array = s.split("")
    array.sort((a,b)=>{
        if(a>b){
            return -1;
        }
        if(a<b){
            return 1;
        }
        return 0;
    })
    answer = array.join("")
    return answer;
}