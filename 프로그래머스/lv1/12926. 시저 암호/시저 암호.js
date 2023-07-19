function solution(s, n) {
  const lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz';
  const upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const alphabetCount = lowerAlphabet.length

  return s.split('').map(item => {
    if (item === ' ') {
      return ' ';
    } else if (lowerAlphabet.includes(item)) {
      const index = (lowerAlphabet.indexOf(item) + n) % alphabetCount;
      return lowerAlphabet[index];
    } else if (upperAlphabet.includes(item)) {
      const index = (upperAlphabet.indexOf(item) + n) % alphabetCount;
      return upperAlphabet[index];
    }
    return item;
  }).join('');
}

