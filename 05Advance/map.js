

const john={
    name:'I am John ',
    age:20,
    isActive:true
}
const Doe={
    name:'I am dOe ',
    age:23,
    isActive:true
}
const sam={
    name:'I am sam ',
    age:21,
    isActive:false
}


let newMap = new Map()
 
newMap.set('john',john)
newMap.set('Doe',Doe)
newMap.set('sam',sam)

console.log(newMap.size)
console.log(newMap.get('john'))

newMap.set('Doe', Doe)
newMap.set('sam', sam)

//  for (const iterator of newMap.values()) {
//     console.log(iterator.name)
// }

// for (const [key,value] of newMap.entries()) {
//     var new1=(value.name).toString()
//     console.log((key +" =" +new1))
    
// }
