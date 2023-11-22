function solution(s) {
    let arr = s.split(" ")
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i]){
//             arr[i] = arr[i].toLowerCase();
//             arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
//         }

//   }
    const newArr = arr.map(item => {
        const [first, left] = [item.slice(0,1), item.slice(1)]
        const upper = first.toUpperCase();
        const lower = left.toLowerCase();
 
        
        return `${upper}${lower}`
    })
    return newArr.join(" ");
}