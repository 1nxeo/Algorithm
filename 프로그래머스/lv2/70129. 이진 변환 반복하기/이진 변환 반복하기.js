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