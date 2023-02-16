function solution(arr1, arr2) {
    let answer = [[]];
    for(i=0;i<arr1.length;i++){
        answer[i] = [];
        for(k=0;k<arr1[i].length;k++){
            answer[i][k] = arr1[i][k] + arr2[i][k]
        }
    }
    return answer;
}