function solution(arr) {
    let answer = [];
    //배열내 최솟값 찾기 -> 그 값의 인덱스 찾기 --> 인덱스값으로 배열에서삭제해주기
    let min = Math.min(...arr)
    let index = arr.indexOf(min)
    let result = arr.splice(index, 1)
    if (arr.length == 0){
        answer = [-1]
    }else{
        answer = arr
    }
    
    
    //예시에만 적용되는 해
    // arr.sort((a,b)=>b-a)
    // let result = arr.pop()
    // let arr1 = arr
    // if (arr1.length == 0){
    //     answer = [-1]
    // }else{
    //     answer = arr1
    // }
    console.log(arr)
    return answer;
}