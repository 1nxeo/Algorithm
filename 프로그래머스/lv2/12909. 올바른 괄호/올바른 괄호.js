function solution(s){
    let arr = [];

    for(i=0; i<s.length; i++){
      if(s[i] === "("){
          arr.push("(")
      }else if(arr.length === 0){
          return false
      }else{
          arr.pop()
      }
    }

    return arr.length === 0 ;
}