function solution(array, n) {
    var minnum = array.sort().map((item)=> Math.abs(item-n));
    let minasnwerindex =minnum.indexOf(Math.min(...minnum))
return array[minasnwerindex];
}