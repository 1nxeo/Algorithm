function solution(s) {
    let answer = [];
    const newArr = s.split("")
    answer = Array(s.length).fill(-1)
    const findClose = (array, index) => {
        if(array.indexOf(array[index]) === index){
           return  -1
        }else{
           return index - array.slice(0, index).lastIndexOf(array[index])
        }
    }
    answer = newArr.map((_,i)=> findClose(newArr, i))

    return answer;
}