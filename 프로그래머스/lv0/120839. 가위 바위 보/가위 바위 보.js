function solution(rsp) {
    let answer = '';
    // 2 가위 0 바위 5 보
    // 0 바위 5 보 2 가위
    let Arr = rsp.split("")
    let newArr = Arr.map((item)=> item == 2 ? 0: item == 0 ? 5 : 2 )
    answer = String(newArr.join(""))
    return answer;
}