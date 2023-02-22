function solution(order) {
    return Array.from(String(order)).reduce( (acc, cur) => acc + (cur == 3 || cur == 6 || cur == 9 ? 1 : 0) , 0)
}


//Number (cur) % 3 === 0 && Number (cur) !== 0