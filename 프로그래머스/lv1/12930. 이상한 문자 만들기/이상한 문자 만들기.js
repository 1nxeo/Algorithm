function solution(s) {
    let answer = '';
    let word = s.split(" ");
    let sol = [];
    for(i=0;i<word.length;i++){
        sol[i]=[]
        for(k=0;k<word[i].length;k++){
            if(k%2==0){
                sol[i] += (word[i][k].toUpperCase())
            }else{
                sol[i] += (word[i][k].toLowerCase())
            }
        }
    }

    answer = sol.join(" ")
    
    console.log(sol)
    return answer;
}