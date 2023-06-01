import { type PropType } from 'vue';
import type { PieceColor, Promotion } from '@/typings/Chessboard';
declare const _default: import("vue").DefineComponent<{
    turnColor: {
        type: PropType<PieceColor>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    promotionSelected: (piece: Promotion) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    turnColor: {
        type: PropType<PieceColor>;
        required: true;
    };
}>> & {
    onPromotionSelected?: ((piece: Promotion) => any) | undefined;
}, {}, {}>;
export default _default;
