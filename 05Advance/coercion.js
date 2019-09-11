
//coercion is a technique where js Want to do something for you
//they use there own logic there but we dont want that someone 
//are do something for our that is not precise...
// so there is some Examples :-

console.log('5' + 5)
console.log('5'-4)
console.log('5'* 5)
console.log('5' / 4)

//so in this 4 cases in the first case where we give a string and if
//we want to perform additon it work like string concat where they 
//give output as 55..
//but in all rest of cases it consider string as a number and do
//operation on it so this is called coercion...

 const adder= 5+ false

 console.log(adder)

 //it consider false as 0 and true as 1

//  //values that interprete as false
  
//  false
//  0
//  ''
//  null
//  undefined

// rest all are true.