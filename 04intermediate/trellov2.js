
let myTodo ={
    day:'Monday',
    meetings:0,
    meetDone:0
}

let addMeetings =function (todo,meet=0) {
    todo.meetings=todo.meetings+meet
}

let meetDone=function(todo,meet=0){
    todo.meetDone=todo.meetDone+meet
}

let resetDay=function (todo) {
    todo.meetings=0
    todo.meetDone=0
}

let summary=function (todo) {
    let meetLeft=todo.meetings-todo.meetDone
    return `you have ${meetLeft} meeting left`
}

addMeetings(myTodo,4)
addMeetings(myTodo,2)

meetDone(myTodo,5)

console.log(myTodo)
console.log(summary(myTodo))