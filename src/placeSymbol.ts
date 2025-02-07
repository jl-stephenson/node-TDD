export const placeSymbol = (
  board: string[][],
  marker: string,
  row: number,
  column: number
): string[][] => {
  const updatedBoard = board.map((row) => [...row]);

  updatedBoard[row - 1][column - 1] = marker;

  return updatedBoard;
};
