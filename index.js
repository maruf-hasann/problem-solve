// Task 1 String Reverse

function reverseString(str) {
    const split = str.split('');
    const reverse = split.reverse();
    const output = reverse.join('');
    return output
}
// console.log(reverseString("hello world"));


// Task 2

function sum(...arr) {
    console.log(arr)
    const positiveNum = arr.filter((val) => val > 0)
    const total = positiveNum.reduce((total, value) => total + value)
   console.log(total)
    
}
// console.log(sum(2, -5, 10, -3, 7));

// Task 3 
function mostFrequent(arr) {
    const frequency = {};
    let maxElement = arr[0];
    let maxCount = 1;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (frequency[element]) {
            frequency[element]++;
        } else {
            frequency[element] = 1;
        }
        if (frequency[element] > maxCount) {
            maxElement = element;
            maxCount = frequency[element]
        }
    }
    return maxElement
}
const array = [3, 5, 2, 5, 3, 3, 1, 4, 5];
// console.log(mostFrequent(array));

// Task 5
function calculate(num, num2, operator) {
    switch (operator) {
        case '+': return num + num2;
        case '-': return num - num2;
        case '*': return num * num2;
        case '/': return num / num2;
        default : return 'error'      
    }
}
const operator = '/'
// console.log(calculate(5,3,operator))


// Task 6

function generatePassword(length) {
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowserCase = "abcdefghijklmnopqrstuvwxyz";
    const number = "0123456789";
    const specialChars = '!@#$%^&*<>?';
    
    const allPass = upperCase + lowserCase + number + specialChars;

    let password = ''

   function getRandom(str) {
       const random = Math.floor(Math.random() * str.length);
       return str.charAt(random)

    }

    for (let i = 0; i < length; i++) {
      const charset = getRandom(allPass);
      password += charset;
    }

return password

}
const length = 12;
// console.log(generatePassword(length))



// Task 7


function romanToInteger(romanNumeral) {
  const romanNumerals = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };

  let res = 0;
  let value = 0;

  for (let i = romanNumeral.length - 1; i >= 0; i--) {
    const currentChar = romanNumeral[i];
    const currentValue = romanNumerals[currentChar];

    if (currentValue < value) {
      res -= currentValue;
    } else {
      res += currentValue;
     value = currentValue;
    }
  }

  return res;
}

// Task 8

function secondSmallestNum(array) {
    array.sort((a, b) => a - b) 
    return array[1]
}
const num = [1,4,6,8,32,];
console.log(secondSmallestNum(num))