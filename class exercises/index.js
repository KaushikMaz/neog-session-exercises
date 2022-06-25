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

// Find the sum of odd numbers in the array=[1,3,5,2,22,11,9]
const array1=[1,3,5,2,22,11,9]
const newArray1=array1.reduce((accum,current)=>current%2===0?accum:accum+current,0)

console.log(newArray1)

// Return an object with sum of odd numbers and sum of even numbers
const newArray2=array1.reduce((accum,current)=>current%2===0?{...accum,even:accum.even+current}:{...accum,odd:accum.odd+current},{odd:0,even:0})
console.log(newArray2)
