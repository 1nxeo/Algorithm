function solution(arr)
{
    let answer = [];

    // 효율성 테스트 통과 실패
    // arr.map((_,i)=> arr[i] !== arr[i+1]? answer.push(arr[i]) : null)

    answer=arr.filter((num,index)=>num!=arr[index+1]);  

    
    const nth = (a,b) => {
       if(a !== b){
           answer.push(b)
       }else{
           arr.shift()
       }
    }
    

//     arr.reduce((acc,cur)=> {
//         answer.push(arr[0])
//         if(acc === cur){
//             arr.shift()
//         }
//         else if( acc !== cur){
//             answer.push(cur);
//             arr.shift();
//         }
//         return acc
//     })
          
    // console.log(nth())
    
    return answer;
}