// function solution(citations) {
//     var answer = 0;
//     const n = citations.length;
//     const min = Math.min(...citations)
//     const max = Math.max(...citations)

//     for(i=max; i>=min; i--){
//         let higher = citations.filter(item => item >= i).length
//         let lower = citations.filter(item => item <= i).length
    
//         if(higher >= i && lower <= i ){
//             answer = i;
//             break;
//         }
//     }
    
//     return answer;
// }

function solution(citations) {
    citations.sort((a, b) => b - a); // 내림차순 정렬

    let hIndex = 0;
    for (let i = 0; i < citations.length; i++) {
        if (citations[i] >= i + 1) { // citations[i]가 i+1 이상이면 H-Index 갱신
            hIndex = i + 1;
        } else {
            break;
        }
    }

    return hIndex;
}