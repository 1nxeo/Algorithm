function solution(n) {
    let answer = 0;
    let list = (String(n)).split('')
    list.sort((a,b)=>b-a)
    
    answer = Number(list.join(''))
    
    
    console.log(list)
    return answer;
}