function solution(s) {
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
    
    const keyArr = Array.from(words.keys())

    for(i=0; i<keyArr.length; i++){
     s = s.replaceAll(keyArr[i], words.get(keyArr[i]));
    }

    
    return Number(s);
}