function solution(array) {
    let answer = 0;
    const countValues = new Map();
    array.forEach(item => {
        countValues.set(item, (countValues.get(item) || 0) + 1)
    })
    let arr = [];
    let max = countValues.get(array[0])
    for(const [num, count] of countValues){
        if(count > max){
            max = count;
            arr = [num]
        }else if(count === max){
            arr.push(num)
        }
    }
    
    answer = arr.length > 1 ? -1 : arr[0]
    return answer;
}