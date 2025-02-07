import { placeSymbol } from "../src/placeSymbol";
import { createBoard } from "../src/createBoard";

describe("placeSymbol", () => {
  let board: string[][];
  beforeEach(() => {
    board = createBoard();
  });

  it("updates the board with correct input", () => {
    const marker = "X";
    const row = 1;
    const column = 1;

    const updatedBoard = placeSymbol(board, marker, row, column);
    expect(updatedBoard[0][0]).toEqual("X");
  });
});
