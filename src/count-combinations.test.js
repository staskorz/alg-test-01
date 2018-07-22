const countCombinations = require("./count-combinations")

describe("count combinations", () => {
  it("returns null for 0", () => {
    expect(countCombinations("0")).toBeNull()
  })

  it("correctly counts for single digit", () => {
    expect(countCombinations("1")).toEqual(1)
  })

  it("correctly counts for single digit path", () => {
    expect(countCombinations("34567")).toEqual(1)
  })

  it("correctly counts for single and double digit paths", () => {
    expect(countCombinations("12")).toEqual(2)
  })

  it("correctly counts for single and double digit paths", () => {
    expect(countCombinations("123")).toEqual(3)
  })

  it("correctly counts for single and double digit paths", () => {
    expect(countCombinations("123123")).toEqual(9)
  })
})
