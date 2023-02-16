// function solution(s) {
//     let answer = false;
//     return (s.length == 4 || s.length == 6) && (/^\d+$/.test(s))
    
//     return answer;
// }


function solution(s) {

    if(s.length!==4 && s.length !==6) return false
    
    for(let i=0; i<s.length;i++){
      if(isNaN(Number(s[i]))) return false
    }
    return true;
}