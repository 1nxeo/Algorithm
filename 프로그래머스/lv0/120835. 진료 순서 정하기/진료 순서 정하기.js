function solution(emergency) {
    let answer = [];
    const sortedEmergency = [...emergency].sort((a,b)=> b-a)
    const newArr = sortedEmergency.map((item, index) => [item, index+1])
    answer = emergency.map(item => {
        const target = newArr.find(elem => elem[0] === item)
        return target[1]
    })
    return answer;
}