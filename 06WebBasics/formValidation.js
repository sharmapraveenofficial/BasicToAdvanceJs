// function formValidation() {
   
//     let myValue =  document.querySelector('#myForm').value
       
//     if (isNaN(myValue) || myValue < 1 || myValue > 20) {
//        const newValue = document.querySelector('#a')
//         newValue.textContent = 'this is Not a Valid Number'
//         console.log('this is Not a Valid Number')

//     } else {
//         const newValue2 = document.querySelector('#a')
//         newValue2.textContent = `${myValue} is a Valid Number`
//         console.log(`${myValue} is a Valid Number`)

//     }
// }

// document.querySelector('#myForm').addEventListener('input', (event) => {

//     console.log(event.target.value)
// })



//new Form

document.querySelector('.form').addEventListener('submit', (event) => {
    event.preventDefault();

    console.log(event.target.fName.value);
    console.log(event.target.lName.value);
    console.log(event.target.username.value);
    
    if (event.target.password.value === event.target.mpassword.value) {
       
        console.log(`Welcome ${event.target.fName.value}`)
        // const newValue = document.querySelector('#a')
        // newValue.textContent = 'this is a Valid Password '
    } else {
        const newValue = document.querySelector('#a')
        newValue.textContent = 'this is Not a Valid Password'
    }
    event.target.fName.textContent = ''
    event.target.fName.textContent = ''
    event.target.password.textContent = ''
    event.target.mpassword.textContent = ''
})

