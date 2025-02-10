export const placeSymbol = (
  board: string[][],
  marker: string,
  row: number,
  column: number
): string[][] | string => {
  if (!isInBounds(board, row, column)) {
    return "Please enter a valid row";
  }

  const updatedBoard = board.map((row) => [...row]);

  updatedBoard[row - 1][column - 1] = marker;

  return updatedBoard;
};

export function isInBounds(board: string[][], row: number, column: number) {
  if (row < 1 || row > board.length || column < 1 || column > board[0].length) {
    return false;
  } else if (!Number.isInteger(row) || !Number.isInteger(column)) {
    return false;
  } else {
    return true;
  }
}
