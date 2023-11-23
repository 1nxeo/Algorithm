function solution(n, a, b) {
  let round = 0;

  while (a !== b) {
    // 다음 라운드로 넘어갈 때마다 라운드 수 증가
    a = Math.ceil(a / 2); // 다음 라운드에서 A의 번호
    b = Math.ceil(b / 2); // 다음 라운드에서 B의 번호
    round++;
  }

  return round;
}