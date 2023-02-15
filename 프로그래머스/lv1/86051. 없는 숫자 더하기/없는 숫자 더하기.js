// function solution(numbers) {
//     let answer = 0;
//     let sum = 45
//     let list = [1,2,3,4,5,6,7,8,9]
//     for (i=0;i<numbers.length;i++){
//         if(list.includes(numbers[i]) ){
//             sum -= numbers[i]
//         }
//     }
//     answer = sum
//     return answer;
// }



function solution(numbers) {
    var answer = 0;
    for(let i=0; i<=9; i++){ //i를 0부터 9까지 돌린다.
         //만약, numbers에 0~9가 없다면
        if(!numbers.includes(i)){
        // //이 때 i를 찍어보면 없는 숫자가 나온다.
        // console.log(non) 
        answer = i + answer
        }
    }
    return answer;
}


