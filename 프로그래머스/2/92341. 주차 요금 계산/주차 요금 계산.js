const getPrice = (sum, basicFee, basicTime, perTime, perFee) => {
    return basicFee + Math.ceil((sum < basicTime ? 0 : sum - basicTime)/perTime) * perFee
}

const getTimeDiff = (newTime, oldTime) => {
     const [hour1, min1] = oldTime.split(":").map(Number)
     const [hour2, min2] = newTime.split(":").map(Number)
     const timediff = (hour2 * 60 + min2) - (hour1 * 60 + min1)
     return timediff
}

function solution(fees, records) {
    let answer = [];
    const [basicTime, basicFee, perTime, perFee] = fees
    const jangbu = new Map()
    
    records.forEach(item => {
        const [time, carNumber, io] = item.split(" ")
        const current = jangbu.get(carNumber)
        
        if(io === "IN"){
            jangbu.set(carNumber, {time, sum:current ? current.sum : 0 })
        }else if(io === "OUT"){      
            const timediff = getTimeDiff(time, current.time)
            jangbu.set(carNumber, {time:"", sum:current.sum + timediff})
        }
    })

    const maxTime = "23:59"
    jangbu.forEach((value, key, map) => {
             if(value.time !== ""){
                const timediff = getTimeDiff(maxTime,value.time)
                jangbu.set(key, {time:"", sum : value.sum + timediff})}
        })

    
    Array.from(jangbu).sort((a,b)=> a[0] - b[0]).forEach(item => answer.push(getPrice(item[1].sum, basicFee, basicTime, perTime, perFee)))
    
    return answer;
}