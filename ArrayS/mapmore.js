// calling the index of array (object in array)
const arr1 =[
    { name: 'iphone' , brand: 1},
    {name : 'androidone' , brand: 2},
    {name : 'harsh',brand: 3}
]

function call(value) {
    return value.map((item,index)=>{
        return index
    })
}
  console.log(call(arr1))




