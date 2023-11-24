const findMaxCountKey = (obj) => {
  let maxKey = null;
  let max = -Infinity;

  for (const [key, value] of Object.entries(obj)) {
      if(value === 0){
         maxKey = maxKey > key ? key : maxKey
      }
    if (value > max) {
      max = value;
      maxKey = key;
    }
  }

  return maxKey;
};

function solution(survey, choices) {
    let answer = '';
    const scoreMap = new Map([
        [1, 3],
        [2, 2],
        [3, 1],
        [4, 0],
        [5, 1],
        [6, 2],
        [7, 3]
    ])
    
    const types = new Map([
       [ "RT" , {"R":0, "T":0}],
       [ "CF" , {"C":0, "F":0}],
       [ "JM" , {"J":0, "M":0}],
       [ "AN" , {"A":0, "N":0}],
    ]);
    
    const counts ={};
    const getScore = (question,choice) => {
        const [A, B] = question.split("")
        const 지표 = question.split("").sort().join("")
        const score = types.get(지표)
        const type = choice > 4 ? B : choice < 4 ? A : null
        const newScore = scoreMap.get(choice)
        return type ? types.set(지표, {...score, [type]: score[type] + newScore}) : null
    }
    
    for(let i=0; i<survey.length; i++){
        getScore(survey[i], choices[i])
    }
    
    types.forEach((value, key, map)=>{
        const alphabet = findMaxCountKey(value)
        
        answer += alphabet
    })
    
    
    
    return answer;
}