

let myTodo={
    day:'monday',
    meetings:0,
    meetingDone:0,

     addMeeting : function (num) {
         this.meetings=this.meetings+num
      },
      meetDone:function (num) {
          this.meetingDone=this.meetingDone+num
       },
      resetMeet:function () {
          this.meetings=0
          this.meetingDone=0
      },
      summary:function () {
          let meetleft=this.meetings-this.meetingDone
          return console.log(`You Have ${meetleft} meetings Left`)
      },
      Todo:function () {
          console.log(`Today Is ${this.day}\nYou have total ${this.meetings} Mettings Today\nAnd You Done ${this.meetingDone} Meetings`)
      }
}

myTodo.addMeeting(4)
myTodo.addMeeting(3)
myTodo.meetDone(5)
console.log(myTodo.Todo())
myTodo.summary()
myTodo.resetMeet()
myTodo.summary()
