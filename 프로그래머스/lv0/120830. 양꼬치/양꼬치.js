function solution(n, k) {
    let answer = 0;

    let bill = 12000*n + 2000*k
    let drink = parseInt(n/10)
    bill = bill - 2000*drink
  
    answer = bill
    return answer;
}