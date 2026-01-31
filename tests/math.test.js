import { add, multiply, square } from "../src/math.js"

test("add works", () => {
  expect(add(2, 3)).toBe(5)
})

test("multiply works", () => {
  expect(multiply(3, 4)).toBe(12)
})

test("square works", () => {
  expect(square(5)).toBe(25)
})