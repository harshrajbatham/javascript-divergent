// fuction with return value
let ageCalcul = function(birth,current=2023){
    let nowAge = current - birth; 
    return nowAge;
}
let functioEnterAge = ageCalcul(2000)
console.log(`yoour =${functioEnterAge}`)