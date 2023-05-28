function solution(numbers) {
    let answer = 0;
    const maxNums = numbers.sort((a,b)=> b-a)
    const absNums = maxNums.map((item)=> Math.abs(item))
    if(maxNums[0]*maxNums[1]>=maxNums[maxNums.length-1]*maxNums[maxNums.length-2]){
        answer = maxNums[0] * maxNums[1]
    }else{
        answer = maxNums[maxNums.length-1]*maxNums[maxNums.length-2]
    }
    
    return answer;
}