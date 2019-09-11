
let sayHello = function (Fname,Lname) {
    console.log(`Greeting Message for ${Fname}`)
    console.log(`Hey ${Fname} ${Lname}`)
}

let Fname='Praveen'
let Lname=null

sayHello(Fname,Lname)

// let AddingFunction= function (num1,num2) {
//     let adder=num1+num2
//     return adder
// }

// //AddingFunction(3,6) it doesnt return anything so in that case we use 

// console.log(AddingFunction(3,6))


// let MultiFunction= function (num1,num2) {
//     return num1*num2
// }
// let multi=MultiFunction(3,6)
// console.log(multi)


// Default PAraMeter
//if You DOnt given ANy name to param then it take default as
// unKnown and courseCount =0
let GuestUser= function (name,CourseCount) {
      return 'Hello '+name +' Your Course COunt Is: '+CourseCount
}
 let name=null;
console.log(GuestUser(name))