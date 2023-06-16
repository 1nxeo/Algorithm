function solution(n, words) {
  const wordsLength = words.length;
  let player = 0;
  let turn = player ? Math.ceil((wordsLength + 1) / n) : 0;
  let answer = [player, turn];

  for (let i = 1; i < wordsLength; i++) {
    let firstChar = words[i][0];
    let beforeWord = words[i - 1].length;
    let lastChar = words[i - 1][beforeWord - 1];

    if (firstChar !== lastChar || words.slice(0, i).includes(words[i])) {
      player = (i % n) + 1;
      turn = Math.ceil((i + 1) / n);
      answer = [player, turn];
      break;
    }
  }

  return answer;
}
