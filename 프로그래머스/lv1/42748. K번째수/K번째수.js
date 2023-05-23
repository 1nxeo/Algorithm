function solution(array, commands) {
    let answer = [];
    commands.map((item)=> {
        let i = item[0]-1;
        let j = item[1];
        let k = item[2]-1;
        let newArr = array.slice(i, j);
        
        newArr.sort((a,b)=> a-b);
        let num = newArr[k];
      
        answer.push(num);
    } )

    return answer;
}