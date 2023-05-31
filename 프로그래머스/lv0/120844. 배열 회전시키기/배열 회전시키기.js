function solution(numbers, direction) {
    let answer = [];
    const moveLeft = (array) => {
        let newArr = []
        const item = array[0]
        newArr = array.slice(1,array.length)
        newArr.push(item)
        return newArr.flat()
    }
    const moveRight = (array) => {
        const item = array[array.length-1]
        let newArr = [item]
        newArr.push(array.slice(0,array.length-1))
        return newArr.flat()
    }
    
    answer = direction ==="right" ? moveRight(numbers) : moveLeft(numbers)
    return answer;
}