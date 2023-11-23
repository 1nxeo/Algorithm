function solution(want, number, discount) {
    // 10일동안 회원
    let answer = 0;
    
    if (!want.some(item => discount.includes(item))) {
        return 0;
    }
    const wantArr = [] 
    want.forEach((item, index)=> {
        const times = number[index]
        for(i=1; i<=times; i++){
            wantArr.push(item)
        }
    })
    wantArr.sort()
    console.log(wantArr)
    console.log("-----------------")
    
    for(i=0; i<discount.length - 10 + 1; i++){
        const discountArr = discount.slice(i, i+10).sort()
        const isSame = JSON.stringify(wantArr) === JSON.stringify(discountArr)
        isSame ? answer += 1 : null
    }
    
    
    return answer;
}