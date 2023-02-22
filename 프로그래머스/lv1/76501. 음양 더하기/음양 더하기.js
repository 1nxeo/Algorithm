function solution(absolutes, signs) {
    let answer = 123456789;
    let sum = 0;
    
    answer = absolutes.reduce((acc, cur, index)=> acc + (signs[index]?+cur:-cur), 0)
    
//     for(i=0;i<absolutes.length;i++){
//         console.log(signs[i])
//         if(signs[i] == false ){
//             sum -= absolutes[i]
//         }else{
//             sum += absolutes[i]
//         }
// }
//     answer = sum
    return answer;
}