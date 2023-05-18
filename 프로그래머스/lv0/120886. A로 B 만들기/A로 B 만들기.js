function solution(before, after) {
    let answer = 0;
    let bArr = before.split("")
    let aArr = after.split("")
    bArr.sort();
    aArr.sort();
    let sortB = bArr.join("");
    let sortA = aArr.join("");

    if(sortA === sortB){
        answer = 1
    }else{
        answer = 0
    }
    return answer;
}