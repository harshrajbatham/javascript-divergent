//Object calling
let car = {
    color: 'Blue',
    model: 2021,
    company: 'Toyota',
  };
 console.log(car);
  console.log(car.company) // using . for calling specific name in object
 
  // object value insertion in object!

 const object1 = {  
    a: 11,  
    b: 12,  
    c: 33  
  };  
    
  const object2 = Object.assign({c: 4, d: 5}, object1);  
  console.log(object2.c);
  console.log(object2.d)  
  
  //

  let a="  hello world  ";
  console.log(a.trim(a))
  //
  let aw="hello world"
  let b=aw.replace("world","Javascript");
  console.log(b)
  //
  function word(message){
    return message.split("").reverse().join("");
}
console.log(word("hello world"))