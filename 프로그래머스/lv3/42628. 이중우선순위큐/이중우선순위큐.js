function solution(operations) {
    let answer = [];
    let arr = []
  for (let i = 0; i < operations.length; i++) {
    const operation = operations[i].split(" ");
    const command = operation[0];
    const value = Number(operation[1]);

    if (command === "I") {
      arr.push(value);
    } else if (command === "D") {
      if (value === 1) {
        if (arr.length === 0) continue;
        const maxIndex = arr.indexOf(Math.max(...arr));
        arr.splice(maxIndex, 1);
      } else if (value === -1) {
        if (arr.length === 0) continue;
        const minIndex = arr.indexOf(Math.min(...arr));
        arr.splice(minIndex, 1);
      }
    }
  }

    
    if(arr.length == 0){
        answer = [0,0]
    }else{
        arr.sort((a,b)=>a-b)
        answer = [arr[arr.length-1], arr[0]]
    }
    
    return answer;
}