function solution(my_string, letter) {
    let answer = '';
    const Arr = my_string.split("")
    const newArr = Arr.map((item)=> item === letter ? null : item)
    const Arr2 = newArr.join("")
    console.log(Arr2)
    answer = Arr2
    return answer;
}