function solution(my_string) {
    let answer = '';
    let reverseStr = '';
    
    // reverse를 사용하지 않는 법
    // 0....n까지의 인덱스가 있을 때
    // 0을 n으로 바꾸려면 + n
    // 1를 n-1으로 바꾸려면 1 + n-1-1 --> n-2
    // 2을 n-2로 바꾸려면 3 + (n-2-2) --> n-4
    // 3를 n-3으로 바꾸려면 4 + (n-3-3) --> n-6
    // ...
    // n-3을 3로 바꾸려면 n-3 + (3 - n + 3) --> -n+6
    // n-2를 2으로 바꾸려면 n-2 + (2 - n + 2) --> -n+4
    // n-1을 1로 바꾸려면 n-1 + (1 - n + 1) --> -n+2
    // n을 0로 바꾸려면 n + (- n)
    // ==> 때려쳐
    
    //근데그냥 for문에서 +를 -로 바꾸면 거꾸로 가지않나?
    //몰라일단해봐
    
    for ( i=my_string.length-1;i>=0;i--){
        // my_string[i] :단어 첫글자
        reverseStr += my_string[i]
        }
    
    return reverseStr;
    
}
    