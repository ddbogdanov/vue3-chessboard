import type { Chess, Move, Piece, PieceSymbol, Square, Color as ShortColor } from 'chess.js';
import type { Api } from 'chessground/api';
import type { MaterialDifference, BrushColor, DrawShape } from '@/typings/BoardAPI';
import type { Emit, BoardState, SquareColor } from '@/typings/Chessboard';
import type { Color, Key } from 'chessground/types';
/**
 * class for modifying and reading data from the board, \
 * extends the lichess chessground api & chess.js api \
 * lichess documentation: https://github.com/lichess-org/chessground/blob/master/src/api.ts \
 * chess.js documentation: https://github.com/jhlywa/chess.js/blob/master/README.md
 */
export declare class BoardApi {
    private game;
    private board;
    private boardState;
    private emit;
    constructor(game: Chess, board: Api, boardState: BoardState, emit: Emit);
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
     * @example e4 e5 -> turn number is 2
     */
    getCurrentTurnNumber(): number;
    /**
     *
     * @returns the turn number of the last move
     * @example e4 e5 -> turn number is 1 | e4 e5 Nf3 -> turn number is 2
     */
    getLastMoveTurnNumber(): number;
    /**
     * returns the latest move made on the board
     */
    getLastMove(): Move | undefined;
    /**
     * Retrieves the move history.
     *
     * @param verbose - passing true will add more info
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
        square: Square;
        type: PieceSymbol;
        color: ShortColor;
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
    getSquareColor(square: Square): SquareColor;
    /**
     * Returns the piece on the square or null if there is no piece
     */
    getSquare(square: Square): Piece | null;
    /**
     * loads a fen into the board
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
     * apply the fen game on the board
     */
    private updateGameState;
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
}
export default BoardApi;
