const arr1=[4,5,3,6,2,7,1]


// function obj(value) {
//    return Math.max(...value)
// }
    

// console.log(obj(object1.arr1))

// now using loops

// let SMax = arr1[0]
// let SMin =arr1[0]
// for (let i =1; i < arr1.length; ++i) {
//     if (arr1[i]>SMax) {
//         SMax= arr1[i];
//      }
//     if(arr1[i]<SMin) {
//         SMin=arr1[i]
//     }
//     }

//     console.log(SMax);
//     console.log(SMin);









    let searchMin = arr1[0],searchMax = arr1[0]
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i]<searchMin) {
         searchMin=arr1[i];
     }
    if (arr1[i]>searchMax) {
        searchMax=arr1[i];
    }
    }

    console.log(searchMin);
    console.log(searchMax);