function solution(s) {
    let answer = [];
    const counts = new Map();
    const regex = new RegExp("},{");
    const arr = s.slice(2, -2).split(regex);
    
    for(let i=0; i<arr.length; i++){
        const row = arr[i].split(",")
        const length = row.length
        for(let k=0; k<length; k++){
            const item = row[k]
            const count = counts.get(item) ?? 0
            counts.set(item, count + 1)
        }
    }
    const newArr = Array.from(counts).sort((a,b)=> b[1] - a[1])
    
    newArr.forEach(item => answer.push(Number(item[0])))
    return answer;
}