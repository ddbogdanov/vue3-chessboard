<script setup>
import ChessboardExample from './ChessboardExample.vue';
</script>

# Board API

The board api can be used to modify and retrieve information from the board.
You obtain the api when listening for the @board-created event.

Here is an example:

::: code-group

```vue [TypeScript]
<script setup lang="ts">
import { ref } from 'vue';
import { TheChessboard, type BoardApi } from 'vue3-chessboard';
import 'vue3-chessboard/style.css';

const boardAPI = ref<BoardApi>();
</script>

<template>
  <TheChessboard @board-created="(api) => (boardAPI = api)" />
</template>
```

```vue [JavaScript]
<script setup>
import { ref } from 'vue';
import { TheChessboard } from 'vue3-chessboard';
import 'vue3-chessboard/style.css';

const boardAPI = ref();
</script>

<template>
  <TheChessboard @board-created="(api) => (boardAPI = api)" />
</template>
```

:::
<br>

<hr>
<br>
Here is a list of all the available methods:

```ts
/**
 * Resets the board to the initial starting position.
 */
resetBoard(): void;

/**
 * undo last move, if possible
 */
undoLastMove(): void;

/**
 * returns the current material count for white, black and the diff.
 * If diff > 0 white is leading, else black.
 */
getMaterialCount(): MaterialDifference;

/**
 * toggles the board orientation.
 */
toggleOrientation(): void;

/**
 * draws arrows and circles on the board for possible moves/captures
 */
drawMoves(): void;

/**
 * removes arrows and circles from the board for possible moves/captures
 */
hideMoves(): void;

/**
 * draws an arrow on the board
 */
drawMove(orig: Square, dest: Square, brushColor: BrushColor): void;

/**
 * toggle drawing of arrows and circles on the board for possible moves/captures
 */
toggleMoves(): void;

/**
 * returns the opening name for the current position from lichess api
 */
getOpeningName(): Promise<string | null>;

/**
 * make a move programmatically on the board
 * @param move the san move to make like 'e4', 'O-O' or 'e8=Q'
 * @returns true if the move was made, false if the move was illegal
 */
move(move: string): boolean;

/**
 * returns the current turn color
 * @returns 'white' or 'black'
 */
getTurnColor(): Color;

/**
 * returns all possible moves for the current position
 *
 */
getPossibleMoves(): Map<Key, Key[]> | undefined;

/**
 *
 * @returns the current turn number
 * @example e4 e5 -> turn number is 2 now
 */
getCurrentTurnNumber(): number;

/**
 * returns the latest move made on the board
 */
getLastMove(): Move | undefined;

/**
 * Retrieves the move history.
 *
 * @param verbose - passing true will add more info
 * @example Verbose: [{"color": "w", "from": "e2", "to": "e4", "flags": "b", "piece": "p", "san": "e4"}],  without verbose flag: [ "e7", "e5" ]
 */
getHistory(verbose?: boolean): Move[] | string[];

/**
 * Returns the FEN string for the current position.
 */
getFen(): string;

/**
 * Returns the board position as a 2D array.
 */
getBoardPosition(): ({
  type: PieceType;
  color: PieceColor;
  square: Square;
} | null)[][];

/**
 * returns the PGN string for the current position.
 */
getPgn(): string;

/**
 * returns true of false depending on if the game is over
 */
getIsGameOver(): boolean;

/**
 * returns true or false depending on if a player is checkmated
 */
getIsCheckmate(): boolean;

/**
 * returns true or false depending on if a player is in stalemate
 */
getIsStalemate(): boolean;

/**
 * returns true or false depending on if a game is drawn
 */
getIsDraw(): boolean;

/**
 * returns true or false depending on if a game is drawn by threefold repetition
 */
getIsThreefoldRepetition(): boolean;

/**
 * returns true or false depending on if a game is drawn by insufficient material
 */
getIsInsufficientMaterial(): boolean;

/**
 * returns the color of a given square
 */
getSquareColor(square: string): SquareColor | null;

/**
 * Returns the piece on the square or null if there is no piece
 */
getSquare(square: Square): Piece | null;

/**
 * Returns the piece on the square or null if there is no piece
 */
setPosition(fen: string): void;

/**
 * puts a piece on a given square on the board
 * returns true on success, else false
 */
putPiece(piece: Piece, square: Square): boolean;

/**
 * removes all pieces from the board
 */
clearBoard(): void;

/**
 * draw multiple arrows on the board
 */
setShapes(shapes: DrawShape[]): void;

/**
 * loads a pgn into the board
 *
 * @param pgn - the pgn to load
 */
loadPgn(pgn: string): void;

/**
 * returns the header information of the current pgn, if no pgn is loaded, returns an empty object
 * @example {
 * "Event": "IBM Kasparov vs. Deep Blue Rematch",
 * "Site": "New York, NY USA",
 * "Date": "1997.05.11",
 * "Round": "6",
 * "White": "Deep Blue",
 * "Black": "Kasparov, Garry",
 * "Opening": "Caro-Kann: 4...Nd7",
 * "ECO": "B17",
 * "Result": "1-0"
 * }
 */
getPgnInfo(): {
  [key: string]: string | undefined;
};
```

## Example Board API Usage

<ChessboardExample />
