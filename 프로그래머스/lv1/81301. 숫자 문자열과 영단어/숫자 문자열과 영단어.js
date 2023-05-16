function solution(s) {
    let answer = 0;
    const words = new Map([
        ["one", 1],
        ["two", 2],
        ["three", 3],
        ["four", 4],
        ["five", 5],
        ["six", 6],
        ["seven", 7],
        ["eight", 8],
        ["nine", 9],
        ["zero", 0]
    ])
    const keyArr = new Array;
    
    function makeKey(value, key, map) {
        keyArr.push(key)
    }
     words.forEach(makeKey)
    let str = s
    const toNumFunc = () => {
    for(i=0; i<keyArr.length; i++){
     str = str.replaceAll(keyArr[i], words.get(keyArr[i]));
    }
        return str
    }
    
    answer = Number(toNumFunc())
    
    
    
    return answer;
}