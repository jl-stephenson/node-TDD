import { createBoard } from "../src/createBoard";

describe("createBoard", () => {
  it("returns a nested array of nine empty strings", () => {
    const board = createBoard();

    expect(board).toHaveLength(3);
    board.forEach((row) => {
      expect(row).toHaveLength(3);
      row.forEach((cell) => expect(cell).toBe(" "));
    });
  });
});
