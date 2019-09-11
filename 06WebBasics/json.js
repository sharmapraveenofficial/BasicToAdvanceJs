
const student={
       'name':'praveen',
        'age':20,
        'toActive':true
}

//used to convert obj and store it into the local storage because localstorage only store string not object
const objToString =JSON.stringify(student)

//storing
localStorage.setItem('student',objToString);


//again convert string to obj because if we wa
const stringToobj=JSON.parse(objToString)

console.log(stringToobj.name)
