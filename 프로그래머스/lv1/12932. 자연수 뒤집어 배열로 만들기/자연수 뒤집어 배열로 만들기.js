function solution(n) {
    let answer = [];
    let list =String(n).split('')
    list.reverse()
    let list_1 = list.map((i) => Number(i));
    // for(i=0;i<list.length;i++){
    //     answer.push(list[i])
    // }
    // let list_1 = list.join(',')
    // let list_1 = answer.join()
    // answer.push(list_1)
    console.log(list_1)
    
    answer = list_1
    return answer;
}