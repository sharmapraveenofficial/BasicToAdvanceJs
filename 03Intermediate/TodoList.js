

// let myTodo=[]

// myTodo.push("Wake Up And Take BAth")
// myTodo.push("Take BreakFast And Go for Study")
// myTodo.push("keep Studying")
// myTodo.push("keep Keep Keep Studying And Then Sleep")

// myTodo.forEach(function (todo,index) {
//     console.log(`My Task no: ${index+1} : ${todo}`)
    
// })

//for loop

let NewTodo=[]

NewTodo.unshift("Wake Up")
NewTodo.unshift("Take a bath")
NewTodo.unshift("Study")
NewTodo.unshift("keep sTudy And Sleep")
for (let index = NewTodo.length-1; index>=0 ; index--) {
    const element = NewTodo[index];
   console.log(`My Task no: ${index+1} : ${element}`) 
}