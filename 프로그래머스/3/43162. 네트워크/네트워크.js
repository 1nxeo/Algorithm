function solution(n, computers) {
    let answer = 0;
    const visited = Array(n).fill(false);
    
    const dfs = (item) => {
        visited[item] = true;
        
        for(let i=0; i<n; i++){
            if(computers[item][i] === 1 && !visited[i]){
                dfs(i)
            }
        }
    }
    
    for(let i=0; i<n; i++){
        if(!visited[i]){
            dfs(i)
            answer++
        }
    }
    
    
    return answer;
}