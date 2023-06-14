function solution(n) {
  const fib = [0, 1];

  for (let i = 2; i <= n; i++) {
    fib[i] = (fib[i - 1] + fib[i - 2]) % 1234567;
  }

  return fib[n];
}


// 동적 계획법 사용
// 이미 계산한 값을 배열에 저장해두고, 그 다음 숫자를 계산할 때 새로 연산할 필요 없이 저장된 값을 쓰는 것
