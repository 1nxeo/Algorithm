function solution(numbers, target) {
    let count = 0; // 방법의 수를 카운트하는 변수
    
    const dfs = (start, sum) => {
        if(start === numbers.length){
            if(sum === target){
                count++
            }
            return;
        }
        
        dfs(start + 1, sum + numbers[start]);
        dfs(start + 1, sum - numbers[start])
    }
    
//     // 재귀적으로 탐색하며 타겟 넘버를 만들 수 있는 경우의 수를 계산
//     function dfs(index, sum) {
//         // 배열의 끝까지 모든 숫자를 확인한 경우
//         if (index === numbers.length) {
//             // 타겟 넘버를 만들면 count 증가
//             if (sum === target) {
//                 count++;
//             }
//             return;
//         }

//         // 현재 숫자를 더하거나 빼는 경우를 모두 탐색
//         dfs(index + 1, sum + numbers[index]); // 더하기
//         dfs(index + 1, sum - numbers[index]); // 빼기
//     }

    // 초기 index가 0이고 합계가 0부터 시작
    dfs(0, 0);

    return count;
}