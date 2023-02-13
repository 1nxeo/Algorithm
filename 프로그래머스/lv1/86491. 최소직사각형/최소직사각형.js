function solution(sizes) {
    let bigSideMax = 0;
    let smallSideMax = 0;

    for (i=0;i<sizes.length;i++){
        if (sizes[i][0]>sizes[i][1]){
            if(sizes[i][0]>bigSideMax){
                bigSideMax = sizes[i][0]
            }
            if(sizes[i][1]>smallSideMax){
                smallSideMax = sizes[i][1]
            }
        }else{
            if(sizes[i][1]>bigSideMax){
                bigSideMax = sizes[i][1]
            }
            if(sizes[i][0]>smallSideMax){
                smallSideMax = sizes[i][0]
            }
        }
    }

    let answer = bigSideMax * smallSideMax;
    return answer;
}

