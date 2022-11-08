import { add, formatUserName } from "./techExam";

test("should add 2 numbers correctly", () => {
  expect(add(1, 1)).toBe(2);
  expect(add(10, 100)).toBe(110);
  expect(add(-1, -2)).toBe(-3);
  expect(add(-1, 2)).toBe(1);
});

test("formatUserName adds @ at the beginning of the username", () => {
  expect(formatUserName("Alvin")).toBe("@Alvin");
});

test("formatUserName does not add @ when it is already provided", () => {
  expect(formatUserName("@Alvin")).toBe("@Alvin");
});
