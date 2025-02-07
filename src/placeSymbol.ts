export const placeSymbol = (
  board: string[][],
  marker: string,
  row: number,
  column: number
): string[][] | string => {
  if (row < 1 || row > board.length) {
    return "Please enter a valid row";
  }

  const updatedBoard = board.map((row) => [...row]);

  updatedBoard[row - 1][column - 1] = marker;

  return updatedBoard;
};
