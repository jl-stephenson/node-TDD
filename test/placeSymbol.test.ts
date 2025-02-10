import { placeSymbol, isInBounds } from "../src/placeSymbol";
import { createBoard } from "../src/createBoard";

describe("isInBounds", () => {
  let board: string[][];
  beforeEach(() => {
    board = createBoard();
  });

  it("returns true if both values are within range", () => {
    const row = 1;
    const column = 2;
    const result = isInBounds(board, row, column);
    expect(result).toEqual(true);
  });

  it("returns false if row is greater than 3", () => {
    const row = 4;
    const column = 1;
    const result = isInBounds(board, row, column);
    expect(result).toEqual(false);
  });

  it("returns false if row is less than 1", () => {
    const row = -1;
    const column = 1;
    const result = isInBounds(board, row, column);
    expect(result).toEqual(false);
  });

  it("returns false if column is greater than 3", () => {
    const row = 1;
    const column = 4;
    const result = isInBounds(board, row, column);
    expect(result).toEqual(false);
  });

  it("returns false if row is less than 1", () => {
    const row = 1;
    const column = -1;
    const result = isInBounds(board, row, column);
    expect(result).toEqual(false);
  });

  it("returns false if row is not an integer", () => {
    const row = 1.2;
    const column = 1;
    const result = isInBounds(board, row, column);
    expect(result).toEqual(false);
  });

  it("returns false if column is not an integer", () => {
    const row = 1;
    const column = 1.2;
    const result = isInBounds(board, row, column);
    expect(result).toEqual(false);
  });
});

describe("placeSymbol", () => {
  const marker = "X";
  let board: string[][];
  beforeEach(() => {
    board = createBoard();
  });

  it("updates the board with correct input", () => {
    const row = 1;
    const column = 1;

    const updatedBoard = placeSymbol(board, marker, row, column);
    expect(updatedBoard[0][0]).toEqual("X");
  });

  it("rejects out of bounds rows", () => {
    const row = 4;
    const column = 1;

    const updatedBoard = placeSymbol(board, marker, row, column);
    expect(updatedBoard).toContain("Please enter a valid row");
  });
});
