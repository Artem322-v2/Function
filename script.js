// Задание 1:
function palindrome(name) {
   const Array = name.split('')
   const revesedArray = [...Array].reverse()
   const reversedStr = revesedArray.join('')
   if (reversedStr === name) {
    return 'Это палиндром'
   }
   return 'Это не палиндром'
}

console.log(palindrome('анна')); 


//////////////

// Задание 2

function shortWord (str) {
    const words = str.split(' ');
    let shortest = words[0];
    for (let word of words) {
        if (word.length < shortest.length) {
            shortest = word;
        }
    }
    return shortest;
}

console.log(shortWord('Hello Dog Picture Mouse'))



///////////


// Задание 3

function createPhoneNumber(numbers) {
    const numbersArray = String(numbers);
    const part1 = numbersArray.slice(0, 3);
    const part2 = numbersArray.slice(3, 6);
    const part3 = numbersArray.slice(6, 9);
    return '8 (' + part1 + ') ' + part2 + '-' + part3
}

console.log(createPhoneNumber(123456789))


/////////////

// Задание 4
const numbers = [11, 20, 3, 8, 5, 6, 7, 8, 9, 10];
function minMax (numbers) {
    let min = numbers[0];
    let max = numbers[0];
    for (let number of numbers) {
        if (number < min) {
            min = number
        }
    }
    console.log(min)
    for (let number of numbers) {
        if (number > max) {
            max = number
        }
    }
    console.log(max)
}

minMax(numbers)



///////////

//Задание 5
const numbers = [11, 20, 30, 8, 16, 6, 7, 8, 9, 10];
function sortedMax (numbers) {
    let newArray = [];
    while (numbers.length > 0) {
        let min = numbers[0];
        for (let number of numbers) {
        if (number < min) {
            min = number
        }
    } 
    newArray.push(min);
    numbers.splice(numbers.indexOf(min), 1);

}
    console.log(newArray)
}

sortedMax(numbers)

