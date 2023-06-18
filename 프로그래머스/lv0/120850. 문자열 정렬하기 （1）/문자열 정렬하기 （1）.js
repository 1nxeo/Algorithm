function solution(my_string) {
    let answer = [];
    answer = my_string.split("").map(item => item === "0" ? Number(item) : Number(item) ? Number(item) :undefined).filter(item => item !== undefined).sort((a,b)=> a-b)
    return answer;
}