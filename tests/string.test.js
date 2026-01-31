import { shout, reverse } from "../src/string.js"

test("shout uppercases", () => {
  expect(shout("hello")).toBe("HELLO!")
})

test("reverse works", () => {
  expect(reverse("abc")).toBe("cba")
})