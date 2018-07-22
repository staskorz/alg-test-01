const MAX_LETTER_NUMBER = 26

const stringToDigitsArray = str => str.split("").map(char => parseInt(char, 10))

const isLetter = (firstDigit, secondDigit) =>
  firstDigit * 10 + secondDigit <= MAX_LETTER_NUMBER

const countCombinationsForDigitsArray = (digitsArray, length, index) => {
  if (index === length) {
    return 0
  }

  const currentDigit = digitsArray[index]

  if (currentDigit === 0) {
    return null
  }

  const singleDigitCount = countCombinationsForDigitsArray(
    digitsArray,
    length,
    index + 1,
  )

  let doubleDigitCount = 0

  if (index + 1 < length) {
    const nextDigit = digitsArray[index + 1]

    if (isLetter(currentDigit, nextDigit)) {
      doubleDigitCount =
        1 + countCombinationsForDigitsArray(digitsArray, length, index + 2)
    }
  }

  return singleDigitCount + (doubleDigitCount === null ? 0 : doubleDigitCount)
}

module.exports = digitsString => {
  const digitsArray = stringToDigitsArray(digitsString)
  const digitsArrayLength = digitsArray.length

  const combinationsCount = countCombinationsForDigitsArray(
    digitsArray,
    digitsArrayLength,
    0,
  )

  if (combinationsCount === null) {
    return null
  } else {
    return combinationsCount + 1
  }
}
