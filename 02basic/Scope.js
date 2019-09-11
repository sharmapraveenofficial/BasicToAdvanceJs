
let imGlobal ='Global Variable'

//CASE 1:-
if (true) {
    console.log(imGlobal)
    let imLocal ='Local Variable'  //this variable Scope Only Inside This Block 
    console.log(imLocal)
}

console.log(imGlobal)//its Perfectl fine to Access globAL Variable to any where 

// console.log(imLocal)
// Here is problem because we decleare imLocal As locally but now 
// we us it as a global that is not possible it gives an error//

//CASE 2 :-

if(true){
    console.log(imGlobal)
    imGlobal ='Changed global variable'
 }
console.log(imGlobal)   

//now in this case we are reAssign the value to imGlobal now from
//then whenever we use imGlobal it takes the changed value not 
// the actuale global value  SO BE sure Before DO IT...

// CASE:- 3

if(true){
    var imVarLocal= "More Interesting"
    console.log(imVarLocal)
}
 console.log(imVarLocal)

 //So here is something unexpected is happen when we declear varible
 //As local but it work outside the block also so One thing note
 //here is never us VAR if you want to declear a Varialbe locally
 //var is give the permission to variable that they always treat as
 //global even if declear as Local....


 //here we seen one more example of king territory problem that is
 //same as that cases we seen ....