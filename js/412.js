const divisible = (dividend, divisor) => dividend % divisor === 0
const devisibleByThree = sequence => divisible(sequence, 3),
      divisibleByFive = sequence => divisible(sequence, 5);
const rules = {
  'Fizz': [devisibleByThree],
  'Buzz': [divisibleByFive],
}

const whatToSay = sequence => {
  const fizzBuzz = []
  for (let word in rules) {
    if (rules[word].some(rule => rule(sequence))) fizzBuzz.push(word);
  }
  return fizzBuzz.join('') || `${sequence}`
}

/**
 * @param {number} n 
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  const list = []
  for (let sequence = 1; sequence <=n; sequence++) {
    list.push(whatToSay(sequence))
  }
  return list
}