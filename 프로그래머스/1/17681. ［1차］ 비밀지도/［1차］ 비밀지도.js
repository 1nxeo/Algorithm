const toBinary = (arr, size)=>{
    return arr.map(item => item.toString(2).padStart(size, "0").split(""))
}

function solution(n, arr1, arr2) {
    let answer = Array.from(Array(n), ()=> "")
    const newArr1 = toBinary(arr1, n)
    const newArr2 = toBinary(arr2, n)

    for(let i=0; i<n; i++){
        for (let k=0; k<n; k++){
            if(newArr1[i][k] === "1" || newArr2[i][k] === "1"){
                answer[i] += "#"
            }else{
                answer[i] += " "
            }
        }
    }
    
    return answer;
}