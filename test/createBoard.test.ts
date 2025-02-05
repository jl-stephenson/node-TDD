import { createBoard } from "../src/createBoard";

describe("createBoard", () => {
  it("returns a nested array of nine empty strings", () => {
    const board = createBoard();

    expect(board).toHaveLength(3);
    expect(board[0]).toEqual(["", "", ""]);
  });
});
