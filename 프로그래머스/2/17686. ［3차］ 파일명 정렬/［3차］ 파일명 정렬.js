// function solution(files) {
//     let answer = [];
//     let arr = []
//     const regex = /[ .-]/g;

//     files.forEach(item => {
//         const matchIndex = item.search(/[0-9]/);
//         const postNumber = item.slice(matchIndex)
//         const secondIdx = postNumber.search(regex)
//         arr.push([item.slice(0, matchIndex), postNumber.slice(0, secondIdx), postNumber.slice(secondIdx)])
//     })
//     arr.sort((a,b)=>{
//         // aHead.toUpperCase() - bHead.toUpperCase()
//         // Number(aNumber) - Number(bNumber)
//         // aTail.toUpperCase() - bTail.toUpperCase()
//         const [aHead, aNumber, aTail] = a;
//         const [bHead, bNumber, bTail] = b;
        
//         if(aHead.toUpperCase() === bHead.toUpperCase() && Number(aNumber) === Number(bNumber) ) return 0
//         if(aHead.toUpperCase() === bHead.toUpperCase() && Number(aNumber) === Number(bNumber) && aTail.toUpperCase() === bTail.toUpperCase()) return 0
//         const compareFirst = aHead.toUpperCase().localeCompare(bHead.toUpperCase());
//         if (compareFirst !== 0) {
//             return compareFirst;
//         }
//         const compareSecond = Number(aNumber) - Number(bNumber);
//         if (compareSecond !== 0) {
//             return compareSecond;
//         }    
        
//         return aTail.toUpperCase().localeCompare(bTail.toUpperCase());
        
//     })

//     return arr.map(item => item.join(""));
// 



function solution(files) {
    const compare = (a, b) => {
        const regex = /(\D+)(\d+)(.*)/;
        const [, aHead, aNumber, aTail] = a.match(regex);
        const [, bHead, bNumber, bTail] = b.match(regex);
        if(aHead.toUpperCase() === bHead.toUpperCase() && Number(aNumber) === Number(bNumber) ) return 0
        const compareHead = aHead.toLowerCase().localeCompare(bHead.toLowerCase());
        if (compareHead !== 0) return compareHead;

        const compareNumber = parseInt(aNumber, 10) - parseInt(bNumber, 10);
        if (compareNumber !== 0) return compareNumber;

        return aTail.toLowerCase().localeCompare(bTail.toLowerCase());
    };

    return files.sort(compare);
}


