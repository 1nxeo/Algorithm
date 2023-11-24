const solution = (maps) => {
    let answer = 0;
    
    const n = maps.length;
    const m = maps[0].length;
    const dx = [1, -1, 0, 0]; // x 방향 이동값
    const dy = [0, 0, 1, -1]; // y 방향 이동값
    
    let visited = Array.from(Array(n), ()=> Array(m).fill(false))
    let queue = [[0,0]]
    
    visited[0][0] = true
    
    while(queue.length > 0){
        const [x, y] = queue.shift();
        
        for(let i=0; i<dx.length; i++){
            const moveX = x + dx[i]
            const moveY = y + dy[i]
            
            if(moveX >=0 && moveY >=0 && moveX < n && moveY < m && maps[moveX][moveY] === 1 && !visited[moveX][moveY]){
                queue.push([moveX,moveY]);
                visited[moveX][moveY] = true;
                maps[moveX][moveY] = maps[x][y] + 1
            }
        }
        
    }
    console.log(maps)
    
    return maps[n-1][m-1] === 1 ? -1 : maps[n-1][m-1]
}