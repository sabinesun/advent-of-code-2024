import { describe, it, expect } from "vitest";
import { PartOne, PartTwo, formatInput } from "./day01";

describe("Advent of Code - Day 01", () => {
  const input = ["3   4", "4   3", "2   5", "1   3", "3   9", "3   3"];

  it("should format the input", () => {
    const [firstArray, secondArray] = formatInput(input);
    expect(firstArray).toStrictEqual([1, 2, 3, 3, 3, 4]);
    expect(secondArray).toStrictEqual([3, 3, 3, 4, 5, 9]);
  });

  it("should solve Part One correctly", () => {
    const result = PartOne(input);
    expect(result).toBe(11);
  });

  it("should solve Part Two correctly", () => {
    const result = PartTwo(input);
    expect(result).toBe(31);
  });
});
