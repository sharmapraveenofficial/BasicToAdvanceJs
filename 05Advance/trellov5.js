const newTodo = [{
    title: 'Goto sleep',
    isDone: true,
}, {
    title: 'Goto BAth',
    isDone: true,
}, {
    title: 'Eat Food',
    isDone: true,
}, {
    title: 'KEep Coding',
    isDone: false
}, {
    title: 'Are you Eat Lot',
    isDone: false
}, {
    title: 'Are you not Take a Proper Rest',
    isDone: false
}]

// const notDone = newTodo.filter((todo) => {
//     if (todo.isDone === false) {
//       return todo.title
//     }
   
// })

// console.log(notDone)
    newTodo.forEach(function (todo) {
        if(todo.isDone===true){
            console.log(todo.title)
        }
    });
    






