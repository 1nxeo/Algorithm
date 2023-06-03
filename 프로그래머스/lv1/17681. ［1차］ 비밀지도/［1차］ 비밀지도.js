function solution(n, arr1, arr2) {
    let answer = [];
    const toBinary = (array) => {
       const newArr = array.map(item=> item.toString(2)).map((item) => item.length < n ? '0'.repeat(n-item.length)+item : item).map(item => item.split(""))
        
        return newArr
    }
    const newArr1 = toBinary(arr1)
    const newArr2 = toBinary(arr2)
    let secretMap = Array.from({ length: n }, () => Array(n).fill(0));
    
    
    for(i=0; i < n; i++){
        for(j=0; j < n; j++){
            secretMap[i][j] = newArr1[i][j] == 0 && newArr2[i][j] == 0 ? " " : "#"
        }
    }
    
    answer = secretMap.map(item => item.join(""))
    
    return answer;
}