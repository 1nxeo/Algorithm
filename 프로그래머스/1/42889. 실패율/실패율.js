// function solution(N, stages) {
//     let answer = [];
//     let userCount = stages.length
//     let failRateList = []
    
//     for(i=1 ; i<=N; i++){
//         const userOnThisStage = stages.filter(item => item === i).length
//         const failRate = userCount > 0 ? userOnThisStage / userCount : 0
        
//         failRateList.push([i,failRate])
        
//         userCount -= userOnThisStage
//     }
//     failRateList.sort((a,b)=> b[1] - a[1]).forEach(item => answer.push(item[0]))
//     return answer;
// }


function solution(N, stages) {
    const userCounts = new Array(N + 2).fill(0);
    const failRates = [];

    stages.forEach(stage => {
        userCounts[stage]++;
    });

    let totalUsers = stages.length;
    for (let i = 1; i <= N; i++) {
        if (totalUsers === 0) {
            failRates.push({ stage: i, rate: 0 });
        } else {
            const failureRate = userCounts[i] / totalUsers;
            failRates.push({ stage: i, rate: failureRate });
            totalUsers -= userCounts[i];
        }
    }

    failRates.sort((a, b) => {
        if (a.rate !== b.rate) {
            return b.rate - a.rate;
        }
        return a.stage - b.stage;
    });

    return failRates.map(item => item.stage);
}
