import { type PropType } from 'vue';
import { BoardApi } from '@/classes/BoardApi';
import type { BoardConfig, MoveableColor } from '@/typings/BoardConfig';
import type { PieceColor, PromotionEvent } from '@/typings/Chessboard';
declare const _default: import("vue").DefineComponent<{
    boardConfig: {
        type: PropType<BoardConfig>;
        default: import("chessground/config").Config;
    };
    playerColor: {
        type: PropType<MoveableColor>;
        default: null;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    boardCreated: (boardApi: BoardApi) => void;
    checkmate: (isMated: PieceColor) => void;
    stalemate: () => void;
    draw: () => void;
    check: (isInCheck: PieceColor) => void;
    promotion: (promotion: PromotionEvent) => void;
    move: (move: import("chess.js").Move) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    boardConfig: {
        type: PropType<BoardConfig>;
        default: import("chessground/config").Config;
    };
    playerColor: {
        type: PropType<MoveableColor>;
        default: null;
    };
}>> & {
    onBoardCreated?: ((boardApi: BoardApi) => any) | undefined;
    onMove?: ((move: import("chess.js").Move) => any) | undefined;
    onCheckmate?: ((isMated: PieceColor) => any) | undefined;
    onStalemate?: (() => any) | undefined;
    onDraw?: (() => any) | undefined;
    onCheck?: ((isInCheck: PieceColor) => any) | undefined;
    onPromotion?: ((promotion: PromotionEvent) => any) | undefined;
}, {
    boardConfig: BoardConfig;
    playerColor: MoveableColor;
}, {}>;
export default _default;
