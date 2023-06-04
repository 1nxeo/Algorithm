function solution(food) {
    let answer = [];
    let arr = [];
    const newFood = food.slice(1)
    food.map((item,index)=>{
        if(index === 0){
            null
        }
        parseInt(item/2) >= 1 ? arr.push(`${index}`.repeat(parseInt(item/2))) : null
    })
    let reversedArr = [...arr].reverse();
    answer.push(...arr);
    answer.push("0");
    answer.push(...reversedArr);
    
    return answer.join("");
}