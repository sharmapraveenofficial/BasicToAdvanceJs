const dollarToRs =(dollar) =>{
    if (typeof dollar==='number') {
       return dollar*64
    }else{
        throw Error('Please Enter doller in number')
    }
}
try {
    console.log(dollarToRs('five'))
} catch (error) {
    console.log(error)
    
}

console.log('Hey try Catch are always maintain the flow of code')

//SO IF WE RUN THIS PROGRAM WITHOUT TRY CATCH BLOCK IT DOES'NT RUN 
//LINE NO 15 SO IT ALWAYS MAKE A FLOW OF CONTROL.
