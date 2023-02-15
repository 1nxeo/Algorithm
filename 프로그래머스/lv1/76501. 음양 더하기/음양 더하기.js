function solution(absolutes, signs) {
    let answer = 123456789;
    let sum = 0;
    for (i=0; i<absolutes.length;i++){
        if (signs[i] == false){
            absolutes[i] = -(absolutes[i])
        }
        sum += absolutes[i]
        answer = sum
    }
    return answer;
}