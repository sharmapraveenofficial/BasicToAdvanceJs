
class User {
    constructor (firstname, lastname,age){
        this.firstname=firstname
        this.lastname=lastname
        this.age = age
    }
  getName(){
         return `${this.firstname} ${this.lastname} is my name`
      }
  editName(newName){
      const myname=newName.split(' ')
      this.firstname=myname[0]
      this.lastname=myname[1]
      return `${this.firstname} ${this.lastname} is my Edit Name`
  }
  getMidName(midName){
      return `${this.firstname} ${midName} ${this.lastname} is my Full Name`   

  }
}

class Teacher extends User{
    constructor(firstname, lastname, age,subject){
        super(firstname, lastname, age)

        this.subject=subject
    }
    getName() {
        return `${this.firstname} ${this.lastname} is my name And I Teach ${this.subject}`
    } 
   favSubject( _sub){
       return `${_sub} is my Fav. Subject to Taught`  //you make mistake here of this keyword you use this._sub that is wrong
    }
}

// // let john = new User("John","Anderson",20)

// console.log(john.getName())

// console.log(john.editName("Praveen Sharma"))

// console.log(john.getMidName("Kumar"))

let teacher = new Teacher("John", "Anderson", 20,'JavaScript')

console.log(teacher.getName())
console.log(teacher.favSubject("Nodejs"))

