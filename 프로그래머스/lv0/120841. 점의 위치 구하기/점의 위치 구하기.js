function solution(dot) {
    let answer = 0;
    let x = dot[0]
    let y = dot[1]
    // x>0,y>0 --> 1
    // x<0,y>0 --> 2
    // x<0,y<0 --> 3
    // x>0,y<0 --> 4
    
    if (x>0 && y>0){
        answer = 1
    }else if(x<0 && y>0){
        answer = 2
    }else if(x<0 && y<0){
        answer = 3
    }else{
        answer = 4
    }
    return answer;
}