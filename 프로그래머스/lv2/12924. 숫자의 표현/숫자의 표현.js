function solution(n) {
  let answer = 0;
  let sum = 0;
  let start = 1;
  let end = 1;

  while (start <= n) {
    if (sum < n) {
      sum += end;
      end++;
    } else {
      sum -= start;
      start++;
    }

    if (sum === n) {
      answer++;
    }
  }

  return answer;
}
