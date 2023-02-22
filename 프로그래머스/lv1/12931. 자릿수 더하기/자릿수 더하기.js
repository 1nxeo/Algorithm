function solution(n)
{
    let answer = 0;
    let list = String(n).split('')
    
    
    
    let sum = list.reduce((a, b, i)=> Number(b) + a, 0)
    
    answer = sum
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log(list)

    return answer;
}