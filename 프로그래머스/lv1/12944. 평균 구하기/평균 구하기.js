function solution(arr) {
    let answer = 0;
    let sum = 0;
    for(i=0;i<arr.length;i++){
        sum += arr[i]
    }
    answer = sum / arr.length
    return answer;
}