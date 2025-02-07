import { placeSymbol } from "../src/placeSymbol";
import { createBoard } from "../src/createBoard";

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
  })
});
