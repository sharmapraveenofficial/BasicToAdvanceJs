

// wE can't use arrow function in method and constructor..
//we can use it by using use can scenerio but for now 
//we cant use arrow function directly in method and constrctor



const RoughBook= {
    title:'Shape',
    size:'A4 Size',

     BookDesc: () =>{
       return `The Size of this book is ${this.size}`
     }
}

console.log(RoughBook.BookDesc())


//so this ,this keyword is not giving any error but it gives us an
//undefined so we cant use this in case of arrow directly

