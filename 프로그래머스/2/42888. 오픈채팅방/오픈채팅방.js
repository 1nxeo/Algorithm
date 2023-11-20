
function solution(record) {
    var answer = [];
    const recordMap = new Map()
    const messageMap = new Map([
        ["Enter", "님이 들어왔습니다."],
        ["Leave", "님이 나갔습니다."]
    ])

    record.forEach(item => {
        const [io, id, nickname] = item.split(" ");
        io !== "Leave" && recordMap.set(id, nickname);
    });
    record.forEach(item => {
        const [io, id, nickname] = item.split(" ");
        io !== "Change" ? answer.push(`${recordMap.get(id)}${io === "Enter" ? "님이 들어왔습니다." : "님이 나갔습니다."}`) : null
    })

    return answer;
}