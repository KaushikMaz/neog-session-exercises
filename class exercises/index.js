// Take an object with your Mother's name and your Age.
// Now create an object for your sibling by age difference
const obj={Mother:"Pampa",age:27}
const shruti={...obj,age:obj.age-10}
console.log(shruti)


// Take an array for five colors.
// Create another array by adding two more colors to it.

const colors=["pink","blue","grey","black","yellow"];
const newColors=[...colors,"red","green"];
console.log(newColors)

// Write a function Birthday() to take a person's name and age in an object
// and increase age
 const Birthday=(person)=>({...person,age:person.age+1})
 console.log(Birthday(obj))

//  Write a function which can tell if a number is less than 10 or not. Supply
//  this function to an Array to ensure that there is no number less than 10

const array=[2,3,52,55,,7,1,34,23,12]
const newArray=array.filter(x=>x>10)
console.log(newArray)

