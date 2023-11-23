function solution(elements) {
    const sum = new Set()
    const newArr = [...elements,...elements,...elements]
    
    for(i=1; i<=elements.length; i++){
        const size = i
        for(k=elements.length  ; k <= elements.length * 2 - 1 ; k++){
            const target = newArr.slice(k, k + size)
            sum.add(target.reduce((acc,cur)=>acc + cur, 0))
        }
    }
    
    
    return Array.from(sum).length;
}