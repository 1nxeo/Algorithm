function solution(n)
{
    let answer = 0;
    let list = String(n).split('')
    
    for(i=0;i<list.length;i++){
        answer += Number(list[i]) 
    }

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log(list)

    return answer;
}