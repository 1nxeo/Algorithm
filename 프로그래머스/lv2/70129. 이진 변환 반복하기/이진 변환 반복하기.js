function solution(s) {
    let answer = [];
    let count = 0
    let zeroCount = 0;
    let sArr = s.split("")
    
    while(sArr.length >= 1){
        if(sArr.length === 1 && sArr[0] === "1"){
            break;
        }
        
        let zeroDeleted = sArr.filter(item=> item === "0").length;
        zeroCount += zeroDeleted;
        sArr = sArr.filter(item => item === "1");
        sArr = sArr.length.toString(2).split("");
        count ++
    }
    
    answer = [count, zeroCount]
    
    return answer;
}



// 조금 더 가독성 높고 효율적인 코드라고 생각되는 것
function solution(s) {
  let count = 0;
  let zeroCount = 0;
  
  while (s.length > 1) {
    const zeroDeleted = s.split("0").length - 1;
    zeroCount += zeroDeleted;
    s = s.split("0").join("");
    s = s.length.toString(2);
    count++;
  }
  
  return [count, zeroCount];
}
