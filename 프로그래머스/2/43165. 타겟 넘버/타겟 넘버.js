function solution(numbers, target) {
    let answer = 0;
    
    const dfs = (start, sum) => {
        if(start === numbers.length){
            if(sum === target){
                answer++
            }
            
            return;
        }
        
        dfs(start + 1, sum + numbers[start])
        dfs(start + 1, sum - numbers[start])
    }
    
    dfs(0,0)
    return answer;
}