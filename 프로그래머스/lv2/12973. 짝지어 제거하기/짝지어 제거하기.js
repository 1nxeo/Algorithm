function solution(s)
{
    let sArr = s.split("")
    
    const removeDuplicated = (arr) => {
        let stack = [];

        for (let i = 0; i < arr.length; i++) {
          if (stack.length === 0 || stack[stack.length - 1] !== arr[i]) {
            stack.push(arr[i]);
          } else {
            stack.pop();
          }
        }

        return stack.length === 0 ? 1 : 0;

    }


    return removeDuplicated(sArr);
}