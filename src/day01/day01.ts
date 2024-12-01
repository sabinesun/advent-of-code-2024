import * as fs from "fs";
import * as path from "path";
import assert from "assert";

const inputPath = path.resolve(__dirname, "./day01.txt");
const input = fs.readFileSync(inputPath, "utf-8").trim().split("\n");

export const PartOne = (input: string[]) => {
  const [firstArray, secondArray] = formatInput(input);

  return Array.from({ length: input.length }, (_, index) => {
    assert(firstArray[index] && secondArray[index], "Index out of bounds");
    return firstArray[index] - secondArray[index];
  })
    .map(Math.abs)
    .reduce((total, currentValue) => total + currentValue, 0);
};

export const PartTwo = (input: string[]) => {
  const [firstArray, secondArray] = formatInput(input);

  const count = new Map();

  for (const value of secondArray) {
    const currentCount = count.get(value);
    if (!currentCount) {
      count.set(value, 1);
      continue;
    }
    count.set(value, currentCount + 1);
  }

  return firstArray
    .map((firstValue) => (count.get(firstValue) ?? 0) * firstValue)
    .reduce((total, currentValue) => total + currentValue, 0);
};

export const formatInput = (input: string[]): [number[], number[]] => {
  const firstArray = input.map((value) => Number(value.split(/\s+/)[0]));
  const secondArray = input.map((value) => Number(value.split(/\s+/)[1]));

  return [firstArray.toSorted(), secondArray.toSorted()];
};

PartOne(input);
PartTwo(input);
