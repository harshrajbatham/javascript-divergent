const a=[1,2,3,4,5]
// function fil(check) {
//     return check.reduce((elenemt1, elenemt2)=> {
//         // return elenemt1 + elenemt2 //for addition(only 1st  plus 2nd)
//          return elenemt1*elenemt2 // multiply of first and second number
//     })

// }
// console.log(fil(a))

// now using FILTER 
function fil(value) {
    return value.filter((x)=> {
        return x<=4
    }
    )
}
console.log(fil(a),"And this is an original Array: " ,a)





