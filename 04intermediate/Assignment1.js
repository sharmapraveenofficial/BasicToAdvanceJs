 let newCourse={
     CourseName:'Nodejs',
     Price:899,
     Teacher:'Hitesh Choudhary',
     CourseDiscription:'Hey There EveryOne there is a New Js Course For You Visit LOC'
 } 

// console.log(`Hey There Here Is a New Js Course Name As ${newCourse.CourseName} Teach By ${newCourse.Teacher}  At the Price Of ${newCourse.Price} Rupees.  Course DEscription : ${newCourse.CourseDiscription}`)


let Course= function (Object) {
    return {
        priceWithDis:`If you Purchase Now YOu Get It in ${Object.Price-100} Rupees Only`
        ,ActualPrice:`If you Not purchase With Discount,The Actual Price Is ${Object.Price}`
    }
    
}

let price= Course(newCourse)

console.log(price.priceWithDis)

//1. object
//2. function
//3. inside function return object 
//4. variable for fuction call and in function we call object
//5. console for variable 