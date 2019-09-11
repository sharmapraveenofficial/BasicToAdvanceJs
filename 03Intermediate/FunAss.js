
let getMygrade= function (MyMark,TotalMark) {
    let MyPercentage=(MyMark/TotalMark)*100
      
    let MyGrade =''

    if (MyPercentage>=90) {
        MyGrade='O'
    }else if (MyPercentage>=80) {
        MyGrade='A+'
    }
     else if (MyPercentage >= 70) {
        MyGrade = 'A'
    }
     else if (MyPercentage >= 60) {
        MyGrade = 'B+'
    } 
    else if (MyPercentage >= 50) {
        MyGrade = 'B'
    } 
    else if (MyPercentage >= 40) {
        MyGrade = 'C'
    } else {
        MyGrade = 'FAIL'
    }
    return `My Grade Is : ${MyGrade}  And My Percentage is :${MyPercentage}`
}

let myResult=getMygrade(92,100)
console.log(myResult)