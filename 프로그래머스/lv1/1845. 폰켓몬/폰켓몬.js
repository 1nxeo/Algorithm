function solution(nums) {
    let answer = 0;
    let count = nums.length/2
    let setNums = [... new Set(nums)]
    answer = count < setNums.length ? count : setNums.length
    return answer;
}