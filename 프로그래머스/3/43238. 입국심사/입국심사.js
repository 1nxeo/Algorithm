function solution(n, times) {
    // 주어진 시간 범위에서 최솟값과 최댓값 설정
    let left = 1;
    let right = Math.max(...times) * n;
    let answer = right;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let count = 0;

        // 각 심사관이 해당 시간 동안 처리할 수 있는 인원 수 계산
        for (let i = 0; i < times.length; i++) {
            count += Math.floor(mid / times[i]);
        }

        // 처리한 인원이 실제 인원보다 많은 경우 시간 감소 (범위를 left ~ mid-1로)
        if (count >= n) {
            answer = mid; // 현재까지의 최소 시간 기록
            right = mid - 1;
        } else { // 처리한 인원이 실제 인원보다 적은 경우 시간 증가 (범위를 mid+1 ~ right로)
            left = mid + 1;
        }
    }

    return answer;
}
