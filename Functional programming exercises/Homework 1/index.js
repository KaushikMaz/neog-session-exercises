

// Return sum of all odd numbers
    
const sumOddNumbers = numbers => numbers.filter(num => num % 2 !== 0).reduce((accumulator, currentValue) => accumulator + currentValue);
const numbers = [18, 24, 1, 56, 74, 89, 37, 22];
            
console.log(sumOddNumbers(numbers));
        

   
