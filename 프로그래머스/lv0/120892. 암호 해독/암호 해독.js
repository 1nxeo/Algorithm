function solution(cipher, code) {
    let answer = '';
    for(i=0; i<cipher.length; i++){
        (i + 1) % code === 0 ? answer += cipher[i] : null
    }
    return answer;
}