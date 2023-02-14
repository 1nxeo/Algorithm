function solution(strings, n) {
    let answer = [];
    
    for (i=0; i<strings.length;i++){
        let nthWord = strings[i][n]
        
        strings.splice(i, 1, nthWord+strings[i])  
    }

    strings.sort()
    
    
    for (i=0; i<strings.length;i++){
        let word = strings[i]
        let wordSplit = word.split('')
        let originWordList = wordSplit.slice(1)
        let originWord = originWordList.join('')
        
        strings.splice(i, 1, originWord)
        
    }
    
    answer = strings;
    
    
    return answer;
}