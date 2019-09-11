
const newTodo=[{
    title:'Goto sleep',
    isDone:true,
},{
    title:'Goto BAth',
    isDone:true,
},{
    title:'Eat Food',
    isDone:true,
},{
    title:'KEep Coding',
    isDone:'Always Keep Doing'
}]

//method 1
// const findTodo= function (todo,index) {
//      const find=newTodo.findIndex(function (myTodo,title) {
//         return myTodo.title.toLowerCase()===index.toLowerCase()
//      })
//      return todo[find]
// }

// let findMe =findTodo(newTodo,'keep coding')

// console.log(findMe)

//method 2

const findTodo= function (myTodo,title) {
    const titleReturned= myTodo.find(function (todo,index) {
       return todo.title.toLowerCase() ===title.toLowerCase() 
    })
    return titleReturned
}

let findMe=findTodo(newTodo,'keep coding')
console.log(findMe)