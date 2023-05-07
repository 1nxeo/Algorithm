function solution(array) {
    let answer = 0;
    const newArray = array.join("").split("")
    newArray.map((_,i)=>Number(newArray[i])===7?answer+=1:null)
    return answer;
}