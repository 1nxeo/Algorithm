function solution(arr1, arr2) {
    let answer = [[]];
    for (i=0;i<arr1.length;i++){ //arr 리스트 뽑기
        answer[i] = [];
        // arr1[i][k]을 arr[i].length만큼 돌리는 법?
        for (k=0;k<arr1[i].length;k++){
            answer[i].push(arr1[i][k]+arr2[i][k]) //[arr1[i][k]+arr2[i][k]]
        }
    }
    return answer;
}