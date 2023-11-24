// 에라토스테네스의 체
function isPrime(num) {
  if (num <= 1) {
    return false; // 1보다 작거나 같은 수는 소수가 아닙니다.
  }

  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false; // 2부터 num의 제곱근까지 나누어 떨어지면 소수가 아닙니다.
    }
  }

  return true; // 위의 조건을 모두 통과하면 소수입니다.
}

function solution(numbers) {
    let length = 1;
    const cards = numbers.split("");
    const numberSet = new Set([...cards]);
    while(length <= numbers.length){
        const arrSet = Array.from(numberSet).filter(item => item.length === length - 1).map(String)
        for(let k=0; k<arrSet.length; k++){
            const currentItem = arrSet[k]
            let currentCards = currentItem.split("")
            let leftCards = [...cards]
            while(currentCards.length>0){
                const newItem = currentCards.shift();
                const targetIdx = leftCards.findIndex(item => item === newItem)
                leftCards.splice(targetIdx,1)
            }
            for(let i = 0; i < leftCards.length; i++){
                    let number = currentItem
                    numberSet.add(number+leftCards[i]);
                }
            }
            length ++
        }
    
    const newSet = new Set(Array.from(numberSet).map(Number))
    return Array.from(newSet).filter(item => isPrime(item)).length;
}