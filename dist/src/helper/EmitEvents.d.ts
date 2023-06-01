import type { Emit } from '@/typings/Chessboard';
import type { Chess } from 'chess.js';
import type { Api } from 'chessground/api';
export declare function emitBoardEvents(game: Chess, board: Api, emit: Emit): void;
