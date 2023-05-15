function solution(name, yearning, photo) {
    let answer = [];
    const score = new Map()
    name.map((_,i)=>score.set(name[i], yearning[i]))
    let newAnswer = new Array(photo.length).fill(0)
    photo.map((item,index)=> item.map((_,i)=>
                                      score.get(item[i])
                                          ? newAnswer[index] += Number(score.get(item[i]))
                                          : newAnswer[index] += 0))
    
    answer = newAnswer
    
    return answer;
}