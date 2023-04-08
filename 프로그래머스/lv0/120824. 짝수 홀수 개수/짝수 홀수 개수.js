function solution(num_list) {
    let answer = [];
    let oddNum = [];
    let evenNum=[]
    num_list.map((item)=>item%2===1? oddNum.push(item):evenNum.push(item))
    answer = [evenNum.length, oddNum.length]
    return answer;
}