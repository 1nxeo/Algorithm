function solution(cacheSize, cities) {
    let answer = 0;
    const hit = 1;
    const miss = 5;
    const cached = new Map();
    if(cacheSize === 0) return 5 * cities.length
    
    cities.forEach(item => {
        const city = item.toUpperCase();
        
        if(cached.has(city)){
            cached.delete(city)
            cached.set(city, true)
            answer += hit
        }else{
            if(cached.size >= cacheSize){
                const target = Array.from(cached.keys())[0]
                cached.delete(target)
            }
            cached.set(city, true)
            answer += miss
        }
        
        
    })
    
    
    
    return answer;
}