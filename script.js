function printStrings(string, number) {

let arrayStrings = []; //массив

for (let index = 0; index < number; index++) { //

  arrayStrings.push(string)
}
  return arrayStrings;
}
console.log(printStrings("dog", 4))

function sumEvenNumbers(array) {
  let sumEven = 0;
  for (let index = 0; index < array.length; index++) {
    if (array[index] % 2 === 0 ) {
      sumEven += array[index]
    }
  }
  return sumEven
}

function sumOddNumbers(array) {
  let sumOdd = 0;
  for (let index = 0; index < array.length; index++) {
    if (array[index] % 2 === 1 ) {
      sumOdd += array[index]
    }
  }
  return sumOdd
}

function printMaxSum(sumEvenNumbers, sumOddNumbers){

    console.log(Math.max(sumEvenNumbers, sumOddNumbers)) 
}
let array = [1,2, 3, 4, 5, 6, 7, 8, 9,]
printMaxSum(sumEvenNumbers(array), sumOddNumbers(array))

function reversString(string){

  return [...string].reverse().join("")
}
console.log(reversString("Rizvan"));

function findMaxNumber(array) {
  let max = array[0]
  for (let index = 1; index < array.length; index++) {
    if (array[index] > max) {
      max = array[index]
    }
  }
  return max
}
console.log(findMaxNumber(array))

function findMinNumber(array) {
  let min = array[0]
  for (let index = 1; index < array.length; index++) {
    if (array[index] < min) {
      min = array[index]
    }
  }
  return min
}
console.log(findMinNumber(array))