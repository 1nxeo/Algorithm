function solution(array) {
    let answer = 0;
    array.sort((a,b)=>a-b)
    let targetIndex = parseInt(array.length/2)
    answer = array[targetIndex]
    
    return answer;
}