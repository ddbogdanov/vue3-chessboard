import { defineComponent as at, ref as we, openBlock as Ke, createBlock as lt, Teleport as $t, createElementVNode as ie, normalizeClass as ke, onMounted as Ft, createElementBlock as Ht, createCommentVNode as Ut, watch as jt } from "vue";
const Gt = /* @__PURE__ */ at({
  __name: "PromotionDialog",
  props: {
    turnColor: {
      type: String,
      required: !0
    }
  },
  emits: ["promotionSelected"],
  setup(e, { emit: t }) {
    const o = we(null);
    function n(r) {
      if (r.target == null)
        return;
      const s = r.target.getAttribute(
        "data-piece"
      );
      s != null && (o.value?.close(), t("promotionSelected", s));
    }
    return (r, s) => (Ke(), lt($t, { to: "cg-board" }, [
      ie("dialog", {
        ref_key: "dialogEl",
        ref: o,
        class: "promotion-dialog",
        open: "",
        onClick: n,
        onTouchstartPassive: n
      }, [
        ie("button", {
          class: ke(["queen", e.turnColor]),
          "data-piece": "q",
          "aria-label": "Queen"
        }, null, 2),
        ie("button", {
          class: ke(["knight", e.turnColor]),
          "data-piece": "n",
          "aria-label": "Knight"
        }, null, 2),
        ie("button", {
          class: ke(["rook", e.turnColor]),
          "data-piece": "r",
          "aria-label": "Rook"
        }, null, 2),
        ie("button", {
          class: ke(["bishop", e.turnColor]),
          "data-piece": "b",
          "aria-label": "Bishop"
        }, null, 2)
      ], 544)
    ]));
  }
});
var Le = {};
(function(e) {
  /**
   * @license
   * Copyright (c) 2023, Jeff Hlywa (jhlywa@gmail.com)
   * All rights reserved.
   *
   * Redistribution and use in source and binary forms, with or without
   * modification, are permitted provided that the following conditions are met:
   *
   * 1. Redistributions of source code must retain the above copyright notice,
   *    this list of conditions and the following disclaimer.
   * 2. Redistributions in binary form must reproduce the above copyright notice,
   *    this list of conditions and the following disclaimer in the documentation
   *    and/or other materials provided with the distribution.
   *
   * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
   * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
   * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
   * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
   * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
   * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
   * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
   * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
   * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
   * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
   * POSSIBILITY OF SUCH DAMAGE.
   */
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Chess = e.validateFen = e.SQUARES = e.DEFAULT_POSITION = e.KING = e.QUEEN = e.ROOK = e.BISHOP = e.KNIGHT = e.PAWN = e.BLACK = e.WHITE = void 0, e.WHITE = "w", e.BLACK = "b", e.PAWN = "p", e.KNIGHT = "n", e.BISHOP = "b", e.ROOK = "r", e.QUEEN = "q", e.KING = "k", e.DEFAULT_POSITION = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
  const t = -1, o = {
    NORMAL: "n",
    CAPTURE: "c",
    BIG_PAWN: "b",
    EP_CAPTURE: "e",
    PROMOTION: "p",
    KSIDE_CASTLE: "k",
    QSIDE_CASTLE: "q"
  };
  e.SQUARES = [
    "a8",
    "b8",
    "c8",
    "d8",
    "e8",
    "f8",
    "g8",
    "h8",
    "a7",
    "b7",
    "c7",
    "d7",
    "e7",
    "f7",
    "g7",
    "h7",
    "a6",
    "b6",
    "c6",
    "d6",
    "e6",
    "f6",
    "g6",
    "h6",
    "a5",
    "b5",
    "c5",
    "d5",
    "e5",
    "f5",
    "g5",
    "h5",
    "a4",
    "b4",
    "c4",
    "d4",
    "e4",
    "f4",
    "g4",
    "h4",
    "a3",
    "b3",
    "c3",
    "d3",
    "e3",
    "f3",
    "g3",
    "h3",
    "a2",
    "b2",
    "c2",
    "d2",
    "e2",
    "f2",
    "g2",
    "h2",
    "a1",
    "b1",
    "c1",
    "d1",
    "e1",
    "f1",
    "g1",
    "h1"
  ];
  const n = {
    NORMAL: 1,
    CAPTURE: 2,
    BIG_PAWN: 4,
    EP_CAPTURE: 8,
    PROMOTION: 16,
    KSIDE_CASTLE: 32,
    QSIDE_CASTLE: 64
  }, r = {
    a8: 0,
    b8: 1,
    c8: 2,
    d8: 3,
    e8: 4,
    f8: 5,
    g8: 6,
    h8: 7,
    a7: 16,
    b7: 17,
    c7: 18,
    d7: 19,
    e7: 20,
    f7: 21,
    g7: 22,
    h7: 23,
    a6: 32,
    b6: 33,
    c6: 34,
    d6: 35,
    e6: 36,
    f6: 37,
    g6: 38,
    h6: 39,
    a5: 48,
    b5: 49,
    c5: 50,
    d5: 51,
    e5: 52,
    f5: 53,
    g5: 54,
    h5: 55,
    a4: 64,
    b4: 65,
    c4: 66,
    d4: 67,
    e4: 68,
    f4: 69,
    g4: 70,
    h4: 71,
    a3: 80,
    b3: 81,
    c3: 82,
    d3: 83,
    e3: 84,
    f3: 85,
    g3: 86,
    h3: 87,
    a2: 96,
    b2: 97,
    c2: 98,
    d2: 99,
    e2: 100,
    f2: 101,
    g2: 102,
    h2: 103,
    a1: 112,
    b1: 113,
    c1: 114,
    d1: 115,
    e1: 116,
    f1: 117,
    g1: 118,
    h1: 119
  }, s = {
    b: [16, 32, 17, 15],
    w: [-16, -32, -17, -15]
  }, d = {
    n: [-18, -33, -31, -14, 18, 33, 31, 14],
    b: [-17, -15, 17, 15],
    r: [-16, 1, 16, -1],
    q: [-17, -16, -15, 1, 17, 16, 15, -1],
    k: [-17, -16, -15, 1, 17, 16, 15, -1]
  }, p = [
    20,
    0,
    0,
    0,
    0,
    0,
    0,
    24,
    0,
    0,
    0,
    0,
    0,
    0,
    20,
    0,
    0,
    20,
    0,
    0,
    0,
    0,
    0,
    24,
    0,
    0,
    0,
    0,
    0,
    20,
    0,
    0,
    0,
    0,
    20,
    0,
    0,
    0,
    0,
    24,
    0,
    0,
    0,
    0,
    20,
    0,
    0,
    0,
    0,
    0,
    0,
    20,
    0,
    0,
    0,
    24,
    0,
    0,
    0,
    20,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    20,
    0,
    0,
    24,
    0,
    0,
    20,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    20,
    2,
    24,
    2,
    20,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    2,
    53,
    56,
    53,
    2,
    0,
    0,
    0,
    0,
    0,
    0,
    24,
    24,
    24,
    24,
    24,
    24,
    56,
    0,
    56,
    24,
    24,
    24,
    24,
    24,
    24,
    0,
    0,
    0,
    0,
    0,
    0,
    2,
    53,
    56,
    53,
    2,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    20,
    2,
    24,
    2,
    20,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    20,
    0,
    0,
    24,
    0,
    0,
    20,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    20,
    0,
    0,
    0,
    24,
    0,
    0,
    0,
    20,
    0,
    0,
    0,
    0,
    0,
    0,
    20,
    0,
    0,
    0,
    0,
    24,
    0,
    0,
    0,
    0,
    20,
    0,
    0,
    0,
    0,
    20,
    0,
    0,
    0,
    0,
    0,
    24,
    0,
    0,
    0,
    0,
    0,
    20,
    0,
    0,
    20,
    0,
    0,
    0,
    0,
    0,
    0,
    24,
    0,
    0,
    0,
    0,
    0,
    0,
    20
  ], v = [
    17,
    0,
    0,
    0,
    0,
    0,
    0,
    16,
    0,
    0,
    0,
    0,
    0,
    0,
    15,
    0,
    0,
    17,
    0,
    0,
    0,
    0,
    0,
    16,
    0,
    0,
    0,
    0,
    0,
    15,
    0,
    0,
    0,
    0,
    17,
    0,
    0,
    0,
    0,
    16,
    0,
    0,
    0,
    0,
    15,
    0,
    0,
    0,
    0,
    0,
    0,
    17,
    0,
    0,
    0,
    16,
    0,
    0,
    0,
    15,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    17,
    0,
    0,
    16,
    0,
    0,
    15,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    17,
    0,
    16,
    0,
    15,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    17,
    16,
    15,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    -15,
    -16,
    -17,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    -15,
    0,
    -16,
    0,
    -17,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    -15,
    0,
    0,
    -16,
    0,
    0,
    -17,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    -15,
    0,
    0,
    0,
    -16,
    0,
    0,
    0,
    -17,
    0,
    0,
    0,
    0,
    0,
    0,
    -15,
    0,
    0,
    0,
    0,
    -16,
    0,
    0,
    0,
    0,
    -17,
    0,
    0,
    0,
    0,
    -15,
    0,
    0,
    0,
    0,
    0,
    -16,
    0,
    0,
    0,
    0,
    0,
    -17,
    0,
    0,
    -15,
    0,
    0,
    0,
    0,
    0,
    0,
    -16,
    0,
    0,
    0,
    0,
    0,
    0,
    -17
  ], m = { p: 1, n: 2, b: 4, r: 8, q: 16, k: 32 }, E = "pnbrqkPNBRQK", w = [e.KNIGHT, e.BISHOP, e.ROOK, e.QUEEN], O = 7, W = 6, C = 1, y = 0, F = {
    w: [
      { square: r.a1, flag: n.QSIDE_CASTLE },
      { square: r.h1, flag: n.KSIDE_CASTLE }
    ],
    b: [
      { square: r.a8, flag: n.QSIDE_CASTLE },
      { square: r.h8, flag: n.KSIDE_CASTLE }
    ]
  }, ee = { b: C, w: W }, H = ["1-0", "0-1", "1/2-1/2", "*"];
  function U(M) {
    return M >> 4;
  }
  function Y(M) {
    return M & 15;
  }
  function j(M) {
    return "0123456789".indexOf(M) !== -1;
  }
  function D(M) {
    const i = Y(M), l = U(M);
    return "abcdefgh".substring(i, i + 1) + "87654321".substring(l, l + 1);
  }
  function X(M) {
    return M === e.WHITE ? e.BLACK : e.WHITE;
  }
  function T(M) {
    const i = M.split(/\s+/);
    if (i.length !== 6)
      return {
        ok: !1,
        error: "Invalid FEN: must contain six space-delimited fields"
      };
    const l = parseInt(i[5], 10);
    if (isNaN(l) || l <= 0)
      return {
        ok: !1,
        error: "Invalid FEN: move number must be a positive integer"
      };
    const a = parseInt(i[4], 10);
    if (isNaN(a) || a < 0)
      return {
        ok: !1,
        error: "Invalid FEN: half move counter number must be a non-negative integer"
      };
    if (!/^(-|[abcdefgh][36])$/.test(i[3]))
      return { ok: !1, error: "Invalid FEN: en-passant square is invalid" };
    if (/[^kKqQ-]/.test(i[2]))
      return { ok: !1, error: "Invalid FEN: castling availability is invalid" };
    if (!/^(w|b)$/.test(i[1]))
      return { ok: !1, error: "Invalid FEN: side-to-move is invalid" };
    const c = i[0].split("/");
    if (c.length !== 8)
      return {
        ok: !1,
        error: "Invalid FEN: piece data does not contain 8 '/'-delimited rows"
      };
    for (let g = 0; g < c.length; g++) {
      let f = 0, h = !1;
      for (let _ = 0; _ < c[g].length; _++)
        if (j(c[g][_])) {
          if (h)
            return {
              ok: !1,
              error: "Invalid FEN: piece data is invalid (consecutive number)"
            };
          f += parseInt(c[g][_], 10), h = !0;
        } else {
          if (!/^[prnbqkPRNBQK]$/.test(c[g][_]))
            return {
              ok: !1,
              error: "Invalid FEN: piece data is invalid (invalid piece)"
            };
          f += 1, h = !1;
        }
      if (f !== 8)
        return {
          ok: !1,
          error: "Invalid FEN: piece data is invalid (too many squares in rank)"
        };
    }
    if (i[3][1] == "3" && i[1] == "w" || i[3][1] == "6" && i[1] == "b")
      return { ok: !1, error: "Invalid FEN: illegal en-passant square" };
    const u = [
      { color: "white", regex: /K/g },
      { color: "black", regex: /k/g }
    ];
    for (const { color: g, regex: f } of u) {
      if (!f.test(i[0]))
        return { ok: !1, error: `Invalid FEN: missing ${g} king` };
      if ((i[0].match(f) || []).length > 1)
        return { ok: !1, error: `Invalid FEN: too many ${g} kings` };
    }
    return { ok: !0 };
  }
  e.validateFen = T;
  function ue(M, i) {
    const l = M.from, a = M.to, c = M.piece;
    let u = 0, g = 0, f = 0;
    for (let h = 0, _ = i.length; h < _; h++) {
      const A = i[h].from, N = i[h].to, b = i[h].piece;
      c === b && l !== A && a === N && (u++, U(l) === U(A) && g++, Y(l) === Y(A) && f++);
    }
    return u > 0 ? g > 0 && f > 0 ? D(l) : f > 0 ? D(l).charAt(1) : D(l).charAt(0) : "";
  }
  function R(M, i, l, a, c, u = void 0, g = n.NORMAL) {
    const f = U(a);
    if (c === e.PAWN && (f === O || f === y))
      for (let h = 0; h < w.length; h++) {
        const _ = w[h];
        M.push({
          color: i,
          from: l,
          to: a,
          piece: c,
          captured: u,
          promotion: _,
          flags: g | n.PROMOTION
        });
      }
    else
      M.push({
        color: i,
        from: l,
        to: a,
        piece: c,
        captured: u,
        flags: g
      });
  }
  function G(M) {
    let i = M.charAt(0);
    return i >= "a" && i <= "h" ? M.match(/[a-h]\d.*[a-h]\d/) ? void 0 : e.PAWN : (i = i.toLowerCase(), i === "o" ? e.KING : i);
  }
  function te(M) {
    return M.replace(/=/, "").replace(/[+#]?[?!]*$/, "");
  }
  class Bt {
    constructor(i = e.DEFAULT_POSITION) {
      this._board = new Array(128), this._turn = e.WHITE, this._header = {}, this._kings = { w: t, b: t }, this._epSquare = -1, this._halfMoves = 0, this._moveNumber = 0, this._history = [], this._comments = {}, this._castling = { w: 0, b: 0 }, this.load(i);
    }
    clear(i = !1) {
      this._board = new Array(128), this._kings = { w: t, b: t }, this._turn = e.WHITE, this._castling = { w: 0, b: 0 }, this._epSquare = t, this._halfMoves = 0, this._moveNumber = 1, this._history = [], this._comments = {}, this._header = i ? this._header : {}, this._updateSetup(this.fen());
    }
    removeHeader(i) {
      i in this._header && delete this._header[i];
    }
    load(i, l = !1) {
      let a = i.split(/\s+/);
      if (a.length >= 2 && a.length < 6) {
        const h = ["-", "-", "0", "1"];
        i = a.concat(h.slice(-(6 - a.length))).join(" ");
      }
      a = i.split(/\s+/);
      const { ok: c, error: u } = T(i);
      if (!c)
        throw new Error(u);
      const g = a[0];
      let f = 0;
      this.clear(l);
      for (let h = 0; h < g.length; h++) {
        const _ = g.charAt(h);
        if (_ === "/")
          f += 8;
        else if (j(_))
          f += parseInt(_, 10);
        else {
          const A = _ < "a" ? e.WHITE : e.BLACK;
          this.put({ type: _.toLowerCase(), color: A }, D(f)), f++;
        }
      }
      this._turn = a[1], a[2].indexOf("K") > -1 && (this._castling.w |= n.KSIDE_CASTLE), a[2].indexOf("Q") > -1 && (this._castling.w |= n.QSIDE_CASTLE), a[2].indexOf("k") > -1 && (this._castling.b |= n.KSIDE_CASTLE), a[2].indexOf("q") > -1 && (this._castling.b |= n.QSIDE_CASTLE), this._epSquare = a[3] === "-" ? t : r[a[3]], this._halfMoves = parseInt(a[4], 10), this._moveNumber = parseInt(a[5], 10), this._updateSetup(this.fen());
    }
    fen() {
      var i, l;
      let a = 0, c = "";
      for (let f = r.a8; f <= r.h1; f++) {
        if (this._board[f]) {
          a > 0 && (c += a, a = 0);
          const { color: h, type: _ } = this._board[f];
          c += h === e.WHITE ? _.toUpperCase() : _.toLowerCase();
        } else
          a++;
        f + 1 & 136 && (a > 0 && (c += a), f !== r.h1 && (c += "/"), a = 0, f += 8);
      }
      let u = "";
      this._castling[e.WHITE] & n.KSIDE_CASTLE && (u += "K"), this._castling[e.WHITE] & n.QSIDE_CASTLE && (u += "Q"), this._castling[e.BLACK] & n.KSIDE_CASTLE && (u += "k"), this._castling[e.BLACK] & n.QSIDE_CASTLE && (u += "q"), u = u || "-";
      let g = "-";
      if (this._epSquare !== t) {
        const f = this._epSquare + (this._turn === e.WHITE ? 16 : -16), h = [f + 1, f - 1];
        for (const _ of h) {
          if (_ & 136)
            continue;
          const A = this._turn;
          if (((i = this._board[_]) === null || i === void 0 ? void 0 : i.color) === A && ((l = this._board[_]) === null || l === void 0 ? void 0 : l.type) === e.PAWN) {
            this._makeMove({
              color: A,
              from: _,
              to: this._epSquare,
              piece: e.PAWN,
              captured: e.PAWN,
              flags: n.EP_CAPTURE
            });
            const N = !this._isKingAttacked(A);
            if (this._undoMove(), N) {
              g = D(this._epSquare);
              break;
            }
          }
        }
      }
      return [
        c,
        this._turn,
        u,
        g,
        this._halfMoves,
        this._moveNumber
      ].join(" ");
    }
    /*
     * Called when the initial board setup is changed with put() or remove().
     * modifies the SetUp and FEN properties of the header object. If the FEN
     * is equal to the default position, the SetUp and FEN are deleted the setup
     * is only updated if history.length is zero, ie moves haven't been made.
     */
    _updateSetup(i) {
      this._history.length > 0 || (i !== e.DEFAULT_POSITION ? (this._header.SetUp = "1", this._header.FEN = i) : (delete this._header.SetUp, delete this._header.FEN));
    }
    reset() {
      this.load(e.DEFAULT_POSITION);
    }
    get(i) {
      return this._board[r[i]] || !1;
    }
    put({ type: i, color: l }, a) {
      if (E.indexOf(i.toLowerCase()) === -1 || !(a in r))
        return !1;
      const c = r[a];
      return i == e.KING && !(this._kings[l] == t || this._kings[l] == c) ? !1 : (this._board[c] = { type: i, color: l }, i === e.KING && (this._kings[l] = c), this._updateSetup(this.fen()), !0);
    }
    remove(i) {
      const l = this.get(i);
      return delete this._board[r[i]], l && l.type === e.KING && (this._kings[l.color] = t), this._updateSetup(this.fen()), l;
    }
    _attacked(i, l) {
      for (let a = r.a8; a <= r.h1; a++) {
        if (a & 136) {
          a += 7;
          continue;
        }
        if (this._board[a] === void 0 || this._board[a].color !== i)
          continue;
        const c = this._board[a], u = a - l;
        if (u === 0)
          continue;
        const g = u + 119;
        if (p[g] & m[c.type]) {
          if (c.type === e.PAWN) {
            if (u > 0) {
              if (c.color === e.WHITE)
                return !0;
            } else if (c.color === e.BLACK)
              return !0;
            continue;
          }
          if (c.type === "n" || c.type === "k")
            return !0;
          const f = v[g];
          let h = a + f, _ = !1;
          for (; h !== l; ) {
            if (this._board[h] != null) {
              _ = !0;
              break;
            }
            h += f;
          }
          if (!_)
            return !0;
        }
      }
      return !1;
    }
    _isKingAttacked(i) {
      const l = this._kings[i];
      return l === -1 ? !1 : this._attacked(X(i), l);
    }
    isAttacked(i, l) {
      return this._attacked(l, r[i]);
    }
    isCheck() {
      return this._isKingAttacked(this._turn);
    }
    inCheck() {
      return this.isCheck();
    }
    isCheckmate() {
      return this.isCheck() && this._moves().length === 0;
    }
    isStalemate() {
      return !this.isCheck() && this._moves().length === 0;
    }
    isInsufficientMaterial() {
      const i = {
        b: 0,
        n: 0,
        r: 0,
        q: 0,
        k: 0,
        p: 0
      }, l = [];
      let a = 0, c = 0;
      for (let u = r.a8; u <= r.h1; u++) {
        if (c = (c + 1) % 2, u & 136) {
          u += 7;
          continue;
        }
        const g = this._board[u];
        g && (i[g.type] = g.type in i ? i[g.type] + 1 : 1, g.type === e.BISHOP && l.push(c), a++);
      }
      if (a === 2)
        return !0;
      if (
        // k vs. kn .... or .... k vs. kb
        a === 3 && (i[e.BISHOP] === 1 || i[e.KNIGHT] === 1)
      )
        return !0;
      if (a === i[e.BISHOP] + 2) {
        let u = 0;
        const g = l.length;
        for (let f = 0; f < g; f++)
          u += l[f];
        if (u === 0 || u === g)
          return !0;
      }
      return !1;
    }
    isThreefoldRepetition() {
      const i = [], l = {};
      let a = !1;
      for (; ; ) {
        const c = this._undoMove();
        if (!c)
          break;
        i.push(c);
      }
      for (; ; ) {
        const c = this.fen().split(" ").slice(0, 4).join(" ");
        l[c] = c in l ? l[c] + 1 : 1, l[c] >= 3 && (a = !0);
        const u = i.pop();
        if (u)
          this._makeMove(u);
        else
          break;
      }
      return a;
    }
    isDraw() {
      return this._halfMoves >= 100 || // 50 moves per side = 100 half moves
      this.isStalemate() || this.isInsufficientMaterial() || this.isThreefoldRepetition();
    }
    isGameOver() {
      return this.isCheckmate() || this.isStalemate() || this.isDraw();
    }
    moves({ verbose: i = !1, square: l = void 0, piece: a = void 0 } = {}) {
      const c = this._moves({ square: l, piece: a });
      return i ? c.map((u) => this._makePretty(u)) : c.map((u) => this._moveToSan(u, c));
    }
    _moves({ legal: i = !0, piece: l = void 0, square: a = void 0 } = {}) {
      var c;
      const u = a ? a.toLowerCase() : void 0, g = l?.toLowerCase(), f = [], h = this._turn, _ = X(h);
      let A = r.a8, N = r.h1, b = !1;
      if (u)
        if (u in r)
          A = N = r[u], b = !0;
        else
          return [];
      for (let k = A; k <= N; k++) {
        if (k & 136) {
          k += 7;
          continue;
        }
        if (!this._board[k] || this._board[k].color === _)
          continue;
        const { type: P } = this._board[k];
        let I;
        if (P === e.PAWN) {
          if (g && g !== P)
            continue;
          I = k + s[h][0], this._board[I] || (R(f, h, k, I, e.PAWN), I = k + s[h][1], ee[h] === U(k) && !this._board[I] && R(f, h, k, I, e.PAWN, void 0, n.BIG_PAWN));
          for (let L = 2; L < 4; L++)
            I = k + s[h][L], !(I & 136) && (((c = this._board[I]) === null || c === void 0 ? void 0 : c.color) === _ ? R(f, h, k, I, e.PAWN, this._board[I].type, n.CAPTURE) : I === this._epSquare && R(f, h, k, I, e.PAWN, e.PAWN, n.EP_CAPTURE));
        } else {
          if (g && g !== P)
            continue;
          for (let L = 0, me = d[P].length; L < me; L++) {
            const S = d[P][L];
            for (I = k; I += S, !(I & 136); ) {
              if (!this._board[I])
                R(f, h, k, I, P);
              else {
                if (this._board[I].color === h)
                  break;
                R(f, h, k, I, P, this._board[I].type, n.CAPTURE);
                break;
              }
              if (P === e.KNIGHT || P === e.KING)
                break;
            }
          }
        }
      }
      if ((g === void 0 || g === e.KING) && (!b || N === this._kings[h])) {
        if (this._castling[h] & n.KSIDE_CASTLE) {
          const k = this._kings[h], P = k + 2;
          !this._board[k + 1] && !this._board[P] && !this._attacked(_, this._kings[h]) && !this._attacked(_, k + 1) && !this._attacked(_, P) && R(f, h, this._kings[h], P, e.KING, void 0, n.KSIDE_CASTLE);
        }
        if (this._castling[h] & n.QSIDE_CASTLE) {
          const k = this._kings[h], P = k - 2;
          !this._board[k - 1] && !this._board[k - 2] && !this._board[k - 3] && !this._attacked(_, this._kings[h]) && !this._attacked(_, k - 1) && !this._attacked(_, P) && R(f, h, this._kings[h], P, e.KING, void 0, n.QSIDE_CASTLE);
        }
      }
      if (!i || this._kings[h] === -1)
        return f;
      const q = [];
      for (let k = 0, P = f.length; k < P; k++)
        this._makeMove(f[k]), this._isKingAttacked(h) || q.push(f[k]), this._undoMove();
      return q;
    }
    move(i, { strict: l = !1 } = {}) {
      let a = null;
      if (typeof i == "string")
        a = this._moveFromSan(i, l);
      else if (typeof i == "object") {
        const u = this._moves();
        for (let g = 0, f = u.length; g < f; g++)
          if (i.from === D(u[g].from) && i.to === D(u[g].to) && (!("promotion" in u[g]) || i.promotion === u[g].promotion)) {
            a = u[g];
            break;
          }
      }
      if (!a)
        throw typeof i == "string" ? new Error(`Invalid move: ${i}`) : new Error(`Invalid move: ${JSON.stringify(i)}`);
      const c = this._makePretty(a);
      return this._makeMove(a), c;
    }
    _push(i) {
      this._history.push({
        move: i,
        kings: { b: this._kings.b, w: this._kings.w },
        turn: this._turn,
        castling: { b: this._castling.b, w: this._castling.w },
        epSquare: this._epSquare,
        halfMoves: this._halfMoves,
        moveNumber: this._moveNumber
      });
    }
    _makeMove(i) {
      const l = this._turn, a = X(l);
      if (this._push(i), this._board[i.to] = this._board[i.from], delete this._board[i.from], i.flags & n.EP_CAPTURE && (this._turn === e.BLACK ? delete this._board[i.to - 16] : delete this._board[i.to + 16]), i.promotion && (this._board[i.to] = { type: i.promotion, color: l }), this._board[i.to].type === e.KING) {
        if (this._kings[l] = i.to, i.flags & n.KSIDE_CASTLE) {
          const c = i.to - 1, u = i.to + 1;
          this._board[c] = this._board[u], delete this._board[u];
        } else if (i.flags & n.QSIDE_CASTLE) {
          const c = i.to + 1, u = i.to - 2;
          this._board[c] = this._board[u], delete this._board[u];
        }
        this._castling[l] = 0;
      }
      if (this._castling[l]) {
        for (let c = 0, u = F[l].length; c < u; c++)
          if (i.from === F[l][c].square && this._castling[l] & F[l][c].flag) {
            this._castling[l] ^= F[l][c].flag;
            break;
          }
      }
      if (this._castling[a]) {
        for (let c = 0, u = F[a].length; c < u; c++)
          if (i.to === F[a][c].square && this._castling[a] & F[a][c].flag) {
            this._castling[a] ^= F[a][c].flag;
            break;
          }
      }
      i.flags & n.BIG_PAWN ? l === e.BLACK ? this._epSquare = i.to - 16 : this._epSquare = i.to + 16 : this._epSquare = t, i.piece === e.PAWN ? this._halfMoves = 0 : i.flags & (n.CAPTURE | n.EP_CAPTURE) ? this._halfMoves = 0 : this._halfMoves++, l === e.BLACK && this._moveNumber++, this._turn = a;
    }
    undo() {
      const i = this._undoMove();
      return i ? this._makePretty(i) : null;
    }
    _undoMove() {
      const i = this._history.pop();
      if (i === void 0)
        return null;
      const l = i.move;
      this._kings = i.kings, this._turn = i.turn, this._castling = i.castling, this._epSquare = i.epSquare, this._halfMoves = i.halfMoves, this._moveNumber = i.moveNumber;
      const a = this._turn, c = X(a);
      if (this._board[l.from] = this._board[l.to], this._board[l.from].type = l.piece, delete this._board[l.to], l.captured)
        if (l.flags & n.EP_CAPTURE) {
          let u;
          a === e.BLACK ? u = l.to - 16 : u = l.to + 16, this._board[u] = { type: e.PAWN, color: c };
        } else
          this._board[l.to] = { type: l.captured, color: c };
      if (l.flags & (n.KSIDE_CASTLE | n.QSIDE_CASTLE)) {
        let u, g;
        l.flags & n.KSIDE_CASTLE ? (u = l.to + 1, g = l.to - 1) : (u = l.to - 2, g = l.to + 1), this._board[u] = this._board[g], delete this._board[g];
      }
      return l;
    }
    pgn({ newline: i = `
`, maxWidth: l = 0 } = {}) {
      const a = [];
      let c = !1;
      for (const b in this._header)
        a.push("[" + b + ' "' + this._header[b] + '"]' + i), c = !0;
      c && this._history.length && a.push(i);
      const u = (b) => {
        const q = this._comments[this.fen()];
        if (typeof q < "u") {
          const k = b.length > 0 ? " " : "";
          b = `${b}${k}{${q}}`;
        }
        return b;
      }, g = [];
      for (; this._history.length > 0; )
        g.push(this._undoMove());
      const f = [];
      let h = "";
      for (g.length === 0 && f.push(u("")); g.length > 0; ) {
        h = u(h);
        const b = g.pop();
        if (!b)
          break;
        if (!this._history.length && b.color === "b") {
          const q = `${this._moveNumber}. ...`;
          h = h ? `${h} ${q}` : q;
        } else
          b.color === "w" && (h.length && f.push(h), h = this._moveNumber + ".");
        h = h + " " + this._moveToSan(b, this._moves({ legal: !0 })), this._makeMove(b);
      }
      if (h.length && f.push(u(h)), typeof this._header.Result < "u" && f.push(this._header.Result), l === 0)
        return a.join("") + f.join(" ");
      const _ = function() {
        return a.length > 0 && a[a.length - 1] === " " ? (a.pop(), !0) : !1;
      }, A = function(b, q) {
        for (const k of q.split(" "))
          if (k) {
            if (b + k.length > l) {
              for (; _(); )
                b--;
              a.push(i), b = 0;
            }
            a.push(k), b += k.length, a.push(" "), b++;
          }
        return _() && b--, b;
      };
      let N = 0;
      for (let b = 0; b < f.length; b++) {
        if (N + f[b].length > l && f[b].includes("{")) {
          N = A(N, f[b]);
          continue;
        }
        N + f[b].length > l && b !== 0 ? (a[a.length - 1] === " " && a.pop(), a.push(i), N = 0) : b !== 0 && (a.push(" "), N++), a.push(f[b]), N += f[b].length;
      }
      return a.join("");
    }
    header(...i) {
      for (let l = 0; l < i.length; l += 2)
        typeof i[l] == "string" && typeof i[l + 1] == "string" && (this._header[i[l]] = i[l + 1]);
      return this._header;
    }
    loadPgn(i, { strict: l = !1, newlineChar: a = `\r?
` } = {}) {
      function c(S) {
        return S.replace(/\\/g, "\\");
      }
      function u(S) {
        const Q = {}, oe = S.split(new RegExp(c(a)));
        let Te = "", xe = "";
        for (let ye = 0; ye < oe.length; ye++) {
          const Ze = /^\s*\[\s*([A-Za-z]+)\s*"(.*)"\s*\]\s*$/;
          Te = oe[ye].replace(Ze, "$1"), xe = oe[ye].replace(Ze, "$2"), Te.trim().length > 0 && (Q[Te] = xe);
        }
        return Q;
      }
      i = i.trim();
      const f = new RegExp("^(\\[((?:" + c(a) + ")|.)*\\])((?:\\s*" + c(a) + "){2}|(?:\\s*" + c(a) + ")*$)").exec(i), h = f && f.length >= 2 ? f[1] : "";
      this.reset();
      const _ = u(h);
      let A = "";
      for (const S in _)
        S.toLowerCase() === "fen" && (A = _[S]), this.header(S, _[S]);
      if (!l)
        A && this.load(A, !0);
      else if (_.SetUp === "1") {
        if (!("FEN" in _))
          throw new Error("Invalid PGN: FEN tag must be supplied with SetUp tag");
        this.load(_.FEN, !0);
      }
      function N(S) {
        return Array.from(S).map(function(Q) {
          return Q.charCodeAt(0) < 128 ? Q.charCodeAt(0).toString(16) : encodeURIComponent(Q).replace(/%/g, "").toLowerCase();
        }).join("");
      }
      function b(S) {
        return S.length == 0 ? "" : decodeURIComponent("%" + (S.match(/.{1,2}/g) || []).join("%"));
      }
      const q = function(S) {
        return S = S.replace(new RegExp(c(a), "g"), " "), `{${N(S.slice(1, S.length - 1))}}`;
      }, k = function(S) {
        if (S.startsWith("{") && S.endsWith("}"))
          return b(S.slice(1, S.length - 1));
      };
      let P = i.replace(h, "").replace(
        // encode comments so they don't get deleted below
        new RegExp(`({[^}]*})+?|;([^${c(a)}]*)`, "g"),
        function(S, Q, oe) {
          return Q !== void 0 ? q(Q) : " " + q(`{${oe.slice(1)}}`);
        }
      ).replace(new RegExp(c(a), "g"), " ");
      const I = /(\([^()]+\))+?/g;
      for (; I.test(P); )
        P = P.replace(I, "");
      P = P.replace(/\d+\.(\.\.)?/g, ""), P = P.replace(/\.\.\./g, ""), P = P.replace(/\$\d+/g, "");
      let L = P.trim().split(new RegExp(/\s+/));
      L = L.filter((S) => S !== "");
      let me = "";
      for (let S = 0; S < L.length; S++) {
        const Q = k(L[S]);
        if (Q !== void 0) {
          this._comments[this.fen()] = Q;
          continue;
        }
        const oe = this._moveFromSan(L[S], l);
        if (oe == null)
          if (H.indexOf(L[S]) > -1)
            me = L[S];
          else
            throw new Error(`Invalid move in PGN: ${L[S]}`);
        else
          me = "", this._makeMove(oe);
      }
      me && Object.keys(this._header).length && !this._header.Result && this.header("Result", me);
    }
    /*
     * Convert a move from 0x88 coordinates to Standard Algebraic Notation
     * (SAN)
     *
     * @param {boolean} strict Use the strict SAN parser. It will throw errors
     * on overly disambiguated moves (see below):
     *
     * r1bqkbnr/ppp2ppp/2n5/1B1pP3/4P3/8/PPPP2PP/RNBQK1NR b KQkq - 2 4
     * 4. ... Nge7 is overly disambiguated because the knight on c6 is pinned
     * 4. ... Ne7 is technically the valid SAN
     */
    _moveToSan(i, l) {
      let a = "";
      if (i.flags & n.KSIDE_CASTLE)
        a = "O-O";
      else if (i.flags & n.QSIDE_CASTLE)
        a = "O-O-O";
      else {
        if (i.piece !== e.PAWN) {
          const c = ue(i, l);
          a += i.piece.toUpperCase() + c;
        }
        i.flags & (n.CAPTURE | n.EP_CAPTURE) && (i.piece === e.PAWN && (a += D(i.from)[0]), a += "x"), a += D(i.to), i.promotion && (a += "=" + i.promotion.toUpperCase());
      }
      return this._makeMove(i), this.isCheck() && (this.isCheckmate() ? a += "#" : a += "+"), this._undoMove(), a;
    }
    // convert a move from Standard Algebraic Notation (SAN) to 0x88 coordinates
    _moveFromSan(i, l = !1) {
      const a = te(i);
      let c = G(a), u = this._moves({ legal: !0, piece: c });
      for (let b = 0, q = u.length; b < q; b++)
        if (a === te(this._moveToSan(u[b], u)))
          return u[b];
      if (l)
        return null;
      let g, f, h, _, A, N = !1;
      if (f = a.match(
        /([pnbrqkPNBRQK])?([a-h][1-8])x?-?([a-h][1-8])([qrbnQRBN])?/
        //     piece         from              to       promotion
      ), f ? (g = f[1], h = f[2], _ = f[3], A = f[4], h.length == 1 && (N = !0)) : (f = a.match(/([pnbrqkPNBRQK])?([a-h]?[1-8]?)x?-?([a-h][1-8])([qrbnQRBN])?/), f && (g = f[1], h = f[2], _ = f[3], A = f[4], h.length == 1 && (N = !0))), c = G(a), u = this._moves({
        legal: !0,
        piece: g || c
      }), !_)
        return null;
      for (let b = 0, q = u.length; b < q; b++)
        if (h) {
          if ((!g || g.toLowerCase() == u[b].piece) && r[h] == u[b].from && r[_] == u[b].to && (!A || A.toLowerCase() == u[b].promotion))
            return u[b];
          if (N) {
            const k = D(u[b].from);
            if ((!g || g.toLowerCase() == u[b].piece) && r[_] == u[b].to && (h == k[0] || h == k[1]) && (!A || A.toLowerCase() == u[b].promotion))
              return u[b];
          }
        } else if (a === te(this._moveToSan(u[b], u)).replace("x", ""))
          return u[b];
      return null;
    }
    ascii() {
      let i = `   +------------------------+
`;
      for (let l = r.a8; l <= r.h1; l++) {
        if (Y(l) === 0 && (i += " " + "87654321"[U(l)] + " |"), this._board[l]) {
          const a = this._board[l].type, u = this._board[l].color === e.WHITE ? a.toUpperCase() : a.toLowerCase();
          i += " " + u + " ";
        } else
          i += " . ";
        l + 1 & 136 && (i += `|
`, l += 8);
      }
      return i += `   +------------------------+
`, i += "     a  b  c  d  e  f  g  h", i;
    }
    perft(i) {
      const l = this._moves({ legal: !1 });
      let a = 0;
      const c = this._turn;
      for (let u = 0, g = l.length; u < g; u++)
        this._makeMove(l[u]), this._isKingAttacked(c) || (i - 1 > 0 ? a += this.perft(i - 1) : a++), this._undoMove();
      return a;
    }
    // pretty = external move object
    _makePretty(i) {
      const { color: l, piece: a, from: c, to: u, flags: g, captured: f, promotion: h } = i;
      let _ = "";
      for (const q in n)
        n[q] & g && (_ += o[q]);
      const A = D(c), N = D(u), b = {
        color: l,
        piece: a,
        from: A,
        to: N,
        san: this._moveToSan(i, this._moves({ legal: !0 })),
        flags: _,
        lan: A + N,
        before: this.fen(),
        after: ""
      };
      return this._makeMove(i), b.after = this.fen(), this._undoMove(), f && (b.captured = f), h && (b.promotion = h, b.lan += h), b;
    }
    turn() {
      return this._turn;
    }
    board() {
      const i = [];
      let l = [];
      for (let a = r.a8; a <= r.h1; a++)
        this._board[a] == null ? l.push(null) : l.push({
          square: D(a),
          type: this._board[a].type,
          color: this._board[a].color
        }), a + 1 & 136 && (i.push(l), l = [], a += 8);
      return i;
    }
    squareColor(i) {
      if (i in r) {
        const l = r[i];
        return (U(l) + Y(l)) % 2 === 0 ? "light" : "dark";
      }
      return null;
    }
    history({ verbose: i = !1 } = {}) {
      const l = [], a = [];
      for (; this._history.length > 0; )
        l.push(this._undoMove());
      for (; ; ) {
        const c = l.pop();
        if (!c)
          break;
        i ? a.push(this._makePretty(c)) : a.push(this._moveToSan(c, this._moves())), this._makeMove(c);
      }
      return a;
    }
    _pruneComments() {
      const i = [], l = {}, a = (c) => {
        c in this._comments && (l[c] = this._comments[c]);
      };
      for (; this._history.length > 0; )
        i.push(this._undoMove());
      for (a(this.fen()); ; ) {
        const c = i.pop();
        if (!c)
          break;
        this._makeMove(c), a(this.fen());
      }
      this._comments = l;
    }
    getComment() {
      return this._comments[this.fen()];
    }
    setComment(i) {
      this._comments[this.fen()] = i.replace("{", "[").replace("}", "]");
    }
    deleteComment() {
      const i = this._comments[this.fen()];
      return delete this._comments[this.fen()], i;
    }
    getComments() {
      return this._pruneComments(), Object.keys(this._comments).map((i) => ({ fen: i, comment: this._comments[i] }));
    }
    deleteComments() {
      return this._pruneComments(), Object.keys(this._comments).map((i) => {
        const l = this._comments[i];
        return delete this._comments[i], { fen: i, comment: l };
      });
    }
  }
  e.Chess = Bt;
})(Le);
const Qt = ["white", "black"], We = ["a", "b", "c", "d", "e", "f", "g", "h"], Be = ["1", "2", "3", "4", "5", "6", "7", "8"], zt = [...Be].reverse(), $e = Array.prototype.concat(...We.map((e) => Be.map((t) => e + t))), z = (e) => $e[8 * e[0] + e[1]], K = (e) => [e.charCodeAt(0) - 97, e.charCodeAt(1) - 49], ct = $e.map(K);
function Vt(e) {
  let t;
  const o = () => (t === void 0 && (t = e()), t);
  return o.clear = () => {
    t = void 0;
  }, o;
}
const xt = () => {
  let e;
  return {
    start() {
      e = performance.now();
    },
    cancel() {
      e = void 0;
    },
    stop() {
      if (!e)
        return 0;
      const t = performance.now() - e;
      return e = void 0, t;
    }
  };
}, Fe = (e) => e === "white" ? "black" : "white", Se = (e, t) => {
  const o = e[0] - t[0], n = e[1] - t[1];
  return o * o + n * n;
}, qe = (e, t) => e.role === t.role && e.color === t.color, Ce = (e) => (t, o) => [(o ? t[0] : 7 - t[0]) * e.width / 8, (o ? 7 - t[1] : t[1]) * e.height / 8], Z = (e, t) => {
  e.style.transform = `translate(${t[0]}px,${t[1]}px)`;
}, ut = (e, t, o = 1) => {
  e.style.transform = `translate(${t[0]}px,${t[1]}px) scale(${o})`;
}, He = (e, t) => {
  e.style.visibility = t ? "visible" : "hidden";
}, pe = (e) => {
  var t;
  if (e.clientX || e.clientX === 0)
    return [e.clientX, e.clientY];
  if (!((t = e.targetTouches) === null || t === void 0) && t[0])
    return [e.targetTouches[0].clientX, e.targetTouches[0].clientY];
}, dt = (e) => e.buttons === 2 || e.button === 2, J = (e, t) => {
  const o = document.createElement(e);
  return t && (o.className = t), o;
};
function ft(e, t, o) {
  const n = K(e);
  return t || (n[0] = 7 - n[0], n[1] = 7 - n[1]), [
    o.left + o.width * n[0] / 8 + o.width / 16,
    o.top + o.height * (7 - n[1]) / 8 + o.height / 16
  ];
}
const he = (e, t) => Math.abs(e - t), Zt = (e) => (t, o, n, r) => he(t, n) < 2 && (e === "white" ? (
  // allow 2 squares from first two ranks, for horde
  r === o + 1 || o <= 1 && r === o + 2 && t === n
) : r === o - 1 || o >= 6 && r === o - 2 && t === n), ht = (e, t, o, n) => {
  const r = he(e, o), s = he(t, n);
  return r === 1 && s === 2 || r === 2 && s === 1;
}, pt = (e, t, o, n) => he(e, o) === he(t, n), gt = (e, t, o, n) => e === o || t === n, mt = (e, t, o, n) => pt(e, t, o, n) || gt(e, t, o, n), Yt = (e, t, o) => (n, r, s, d) => he(n, s) < 2 && he(r, d) < 2 || o && r === d && r === (e === "white" ? 0 : 7) && (n === 4 && (s === 2 && t.includes(0) || s === 6 && t.includes(7)) || t.includes(s));
function Xt(e, t) {
  const o = t === "white" ? "1" : "8", n = [];
  for (const [r, s] of e)
    r[1] === o && s.color === t && s.role === "rook" && n.push(K(r)[0]);
  return n;
}
function bt(e, t, o) {
  const n = e.get(t);
  if (!n)
    return [];
  const r = K(t), s = n.role, d = s === "pawn" ? Zt(n.color) : s === "knight" ? ht : s === "bishop" ? pt : s === "rook" ? gt : s === "queen" ? mt : Yt(n.color, Xt(e, n.color), o);
  return ct.filter((p) => (r[0] !== p[0] || r[1] !== p[1]) && d(r[0], r[1], p[0], p[1])).map(z);
}
function B(e, ...t) {
  e && setTimeout(() => e(...t), 1);
}
function Jt(e) {
  e.orientation = Fe(e.orientation), e.animation.current = e.draggable.current = e.selected = void 0;
}
function eo(e, t) {
  for (const [o, n] of t)
    n ? e.pieces.set(o, n) : e.pieces.delete(o);
}
function to(e, t) {
  if (e.check = void 0, t === !0 && (t = e.turnColor), t)
    for (const [o, n] of e.pieces)
      n.role === "king" && n.color === t && (e.check = o);
}
function oo(e, t, o, n) {
  ce(e), e.premovable.current = [t, o], B(e.premovable.events.set, t, o, n);
}
function le(e) {
  e.premovable.current && (e.premovable.current = void 0, B(e.premovable.events.unset));
}
function no(e, t, o) {
  le(e), e.predroppable.current = { role: t, key: o }, B(e.predroppable.events.set, t, o);
}
function ce(e) {
  const t = e.predroppable;
  t.current && (t.current = void 0, B(t.events.unset));
}
function ro(e, t, o) {
  if (!e.autoCastle)
    return !1;
  const n = e.pieces.get(t);
  if (!n || n.role !== "king")
    return !1;
  const r = K(t), s = K(o);
  if (r[1] !== 0 && r[1] !== 7 || r[1] !== s[1])
    return !1;
  r[0] === 4 && !e.pieces.has(o) && (s[0] === 6 ? o = z([7, s[1]]) : s[0] === 2 && (o = z([0, s[1]])));
  const d = e.pieces.get(o);
  return !d || d.color !== n.color || d.role !== "rook" ? !1 : (e.pieces.delete(t), e.pieces.delete(o), r[0] < s[0] ? (e.pieces.set(z([6, s[1]]), n), e.pieces.set(z([5, s[1]]), d)) : (e.pieces.set(z([2, s[1]]), n), e.pieces.set(z([3, s[1]]), d)), !0);
}
function vt(e, t, o) {
  const n = e.pieces.get(t), r = e.pieces.get(o);
  if (t === o || !n)
    return !1;
  const s = r && r.color !== n.color ? r : void 0;
  return o === e.selected && V(e), B(e.events.move, t, o, s), ro(e, t, o) || (e.pieces.set(o, n), e.pieces.delete(t)), e.lastMove = [t, o], e.check = void 0, B(e.events.change), s || !0;
}
function Ue(e, t, o, n) {
  if (e.pieces.has(o))
    if (n)
      e.pieces.delete(o);
    else
      return !1;
  return B(e.events.dropNewPiece, t, o), e.pieces.set(o, t), e.lastMove = [o], e.check = void 0, B(e.events.change), e.movable.dests = void 0, e.turnColor = Fe(e.turnColor), !0;
}
function _t(e, t, o) {
  const n = vt(e, t, o);
  return n && (e.movable.dests = void 0, e.turnColor = Fe(e.turnColor), e.animation.current = void 0), n;
}
function wt(e, t, o) {
  if (je(e, t, o)) {
    const n = _t(e, t, o);
    if (n) {
      const r = e.hold.stop();
      V(e);
      const s = {
        premove: !1,
        ctrlKey: e.stats.ctrlKey,
        holdTime: r
      };
      return n !== !0 && (s.captured = n), B(e.movable.events.after, t, o, s), !0;
    }
  } else if (so(e, t, o))
    return oo(e, t, o, {
      ctrlKey: e.stats.ctrlKey
    }), V(e), !0;
  return V(e), !1;
}
function kt(e, t, o, n) {
  const r = e.pieces.get(t);
  r && (io(e, t, o) || n) ? (e.pieces.delete(t), Ue(e, r, o, n), B(e.movable.events.afterNewPiece, r.role, o, {
    premove: !1,
    predrop: !1
  })) : r && ao(e, t, o) ? no(e, r.role, o) : (le(e), ce(e)), e.pieces.delete(t), V(e);
}
function Re(e, t, o) {
  if (B(e.events.select, t), e.selected) {
    if (e.selected === t && !e.draggable.enabled) {
      V(e), e.hold.cancel();
      return;
    } else if ((e.selectable.enabled || o) && e.selected !== t && wt(e, e.selected, t)) {
      e.stats.dragged = !1;
      return;
    }
  }
  (e.selectable.enabled || e.draggable.enabled) && (Ct(e, t) || Ge(e, t)) && (St(e, t), e.hold.start());
}
function St(e, t) {
  e.selected = t, Ge(e, t) ? e.premovable.dests = bt(e.pieces, t, e.premovable.castle) : e.premovable.dests = void 0;
}
function V(e) {
  e.selected = void 0, e.premovable.dests = void 0, e.hold.cancel();
}
function Ct(e, t) {
  const o = e.pieces.get(t);
  return !!o && (e.movable.color === "both" || e.movable.color === o.color && e.turnColor === o.color);
}
const je = (e, t, o) => {
  var n, r;
  return t !== o && Ct(e, t) && (e.movable.free || !!(!((r = (n = e.movable.dests) === null || n === void 0 ? void 0 : n.get(t)) === null || r === void 0) && r.includes(o)));
};
function io(e, t, o) {
  const n = e.pieces.get(t);
  return !!n && (t === o || !e.pieces.has(o)) && (e.movable.color === "both" || e.movable.color === n.color && e.turnColor === n.color);
}
function Ge(e, t) {
  const o = e.pieces.get(t);
  return !!o && e.premovable.enabled && e.movable.color === o.color && e.turnColor !== o.color;
}
const so = (e, t, o) => t !== o && Ge(e, t) && bt(e.pieces, t, e.premovable.castle).includes(o);
function ao(e, t, o) {
  const n = e.pieces.get(t), r = e.pieces.get(o);
  return !!n && (!r || r.color !== e.movable.color) && e.predroppable.enabled && (n.role !== "pawn" || o[1] !== "1" && o[1] !== "8") && e.movable.color === n.color && e.turnColor !== n.color;
}
function lo(e, t) {
  const o = e.pieces.get(t);
  return !!o && e.draggable.enabled && (e.movable.color === "both" || e.movable.color === o.color && (e.turnColor === o.color || e.premovable.enabled));
}
function co(e) {
  const t = e.premovable.current;
  if (!t)
    return !1;
  const o = t[0], n = t[1];
  let r = !1;
  if (je(e, o, n)) {
    const s = _t(e, o, n);
    if (s) {
      const d = { premove: !0 };
      s !== !0 && (d.captured = s), B(e.movable.events.after, o, n, d), r = !0;
    }
  }
  return le(e), r;
}
function uo(e, t) {
  const o = e.predroppable.current;
  let n = !1;
  if (!o)
    return !1;
  if (t(o)) {
    const r = {
      role: o.role,
      color: e.movable.color
    };
    Ue(e, r, o.key) && (B(e.movable.events.afterNewPiece, o.role, o.key, {
      premove: !1,
      predrop: !0
    }), n = !0);
  }
  return ce(e), n;
}
function Qe(e) {
  le(e), ce(e), V(e);
}
function Ye(e) {
  e.movable.color = e.movable.dests = e.animation.current = void 0, Qe(e);
}
function ge(e, t, o) {
  let n = Math.floor(8 * (e[0] - o.left) / o.width);
  t || (n = 7 - n);
  let r = 7 - Math.floor(8 * (e[1] - o.top) / o.height);
  return t || (r = 7 - r), n >= 0 && n < 8 && r >= 0 && r < 8 ? z([n, r]) : void 0;
}
function fo(e, t, o, n) {
  const r = K(e), s = ct.filter((m) => mt(r[0], r[1], m[0], m[1]) || ht(r[0], r[1], m[0], m[1])), p = s.map((m) => ft(z(m), o, n)).map((m) => Se(t, m)), [, v] = p.reduce((m, E, w) => m[0] < E ? m : [E, w], [p[0], 0]);
  return z(s[v]);
}
const $ = (e) => e.orientation === "white", yt = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR", ho = {
  p: "pawn",
  r: "rook",
  n: "knight",
  b: "bishop",
  q: "queen",
  k: "king"
}, po = {
  pawn: "p",
  rook: "r",
  knight: "n",
  bishop: "b",
  queen: "q",
  king: "k"
};
function Pt(e) {
  e === "start" && (e = yt);
  const t = /* @__PURE__ */ new Map();
  let o = 7, n = 0;
  for (const r of e)
    switch (r) {
      case " ":
      case "[":
        return t;
      case "/":
        if (--o, o < 0)
          return t;
        n = 0;
        break;
      case "~": {
        const s = t.get(z([n - 1, o]));
        s && (s.promoted = !0);
        break;
      }
      default: {
        const s = r.charCodeAt(0);
        if (s < 57)
          n += s - 48;
        else {
          const d = r.toLowerCase();
          t.set(z([n, o]), {
            role: ho[d],
            color: r === d ? "black" : "white"
          }), ++n;
        }
      }
    }
  return t;
}
function go(e) {
  return zt.map((t) => We.map((o) => {
    const n = e.get(o + t);
    if (n) {
      let r = po[n.role];
      return n.color === "white" && (r = r.toUpperCase()), n.promoted && (r += "~"), r;
    } else
      return "1";
  }).join("")).join("/").replace(/1{2,}/g, (t) => t.length.toString());
}
function Et(e, t) {
  t.animation && (ze(e.animation, t.animation), (e.animation.duration || 0) < 70 && (e.animation.enabled = !1));
}
function At(e, t) {
  var o, n, r;
  if (!((o = t.movable) === null || o === void 0) && o.dests && (e.movable.dests = void 0), !((n = t.drawable) === null || n === void 0) && n.autoShapes && (e.drawable.autoShapes = []), ze(e, t), t.fen && (e.pieces = Pt(t.fen), e.drawable.shapes = ((r = t.drawable) === null || r === void 0 ? void 0 : r.shapes) || []), "check" in t && to(e, t.check || !1), "lastMove" in t && !t.lastMove ? e.lastMove = void 0 : t.lastMove && (e.lastMove = t.lastMove), e.selected && St(e, e.selected), Et(e, t), !e.movable.rookCastle && e.movable.dests) {
    const s = e.movable.color === "white" ? "1" : "8", d = "e" + s, p = e.movable.dests.get(d), v = e.pieces.get(d);
    if (!p || !v || v.role !== "king")
      return;
    e.movable.dests.set(d, p.filter((m) => !(m === "a" + s && p.includes("c" + s)) && !(m === "h" + s && p.includes("g" + s))));
  }
}
function ze(e, t) {
  for (const o in t)
    Object.prototype.hasOwnProperty.call(t, o) && (Object.prototype.hasOwnProperty.call(e, o) && Xe(e[o]) && Xe(t[o]) ? ze(e[o], t[o]) : e[o] = t[o]);
}
function Xe(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === Object.prototype || t === null;
}
const de = (e, t) => t.animation.enabled ? vo(e, t) : re(e, t);
function re(e, t) {
  const o = e(t);
  return t.dom.redraw(), o;
}
const Me = (e, t) => ({
  key: e,
  pos: K(e),
  piece: t
}), mo = (e, t) => t.sort((o, n) => Se(e.pos, o.pos) - Se(e.pos, n.pos))[0];
function bo(e, t) {
  const o = /* @__PURE__ */ new Map(), n = [], r = /* @__PURE__ */ new Map(), s = [], d = [], p = /* @__PURE__ */ new Map();
  let v, m, E;
  for (const [w, O] of e)
    p.set(w, Me(w, O));
  for (const w of $e)
    v = t.pieces.get(w), m = p.get(w), v ? m ? qe(v, m.piece) || (s.push(m), d.push(Me(w, v))) : d.push(Me(w, v)) : m && s.push(m);
  for (const w of d)
    m = mo(w, s.filter((O) => qe(w.piece, O.piece))), m && (E = [m.pos[0] - w.pos[0], m.pos[1] - w.pos[1]], o.set(w.key, E.concat(E)), n.push(m.key));
  for (const w of s)
    n.includes(w.key) || r.set(w.key, w.piece);
  return {
    anims: o,
    fadings: r
  };
}
function Tt(e, t) {
  const o = e.animation.current;
  if (o === void 0) {
    e.dom.destroyed || e.dom.redrawNow();
    return;
  }
  const n = 1 - (t - o.start) * o.frequency;
  if (n <= 0)
    e.animation.current = void 0, e.dom.redrawNow();
  else {
    const r = _o(n);
    for (const s of o.plan.anims.values())
      s[2] = s[0] * r, s[3] = s[1] * r;
    e.dom.redrawNow(!0), requestAnimationFrame((s = performance.now()) => Tt(e, s));
  }
}
function vo(e, t) {
  const o = new Map(t.pieces), n = e(t), r = bo(o, t);
  if (r.anims.size || r.fadings.size) {
    const s = t.animation.current && t.animation.current.start;
    t.animation.current = {
      start: performance.now(),
      frequency: 1 / t.animation.duration,
      plan: r
    }, s || Tt(t, performance.now());
  } else
    t.dom.redraw();
  return n;
}
const _o = (e) => e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1, wo = ["green", "red", "blue", "yellow"];
function ko(e, t) {
  if (t.touches && t.touches.length > 1)
    return;
  t.stopPropagation(), t.preventDefault(), t.ctrlKey ? V(e) : Qe(e);
  const o = pe(t), n = ge(o, $(e), e.dom.bounds());
  n && (e.drawable.current = {
    orig: n,
    pos: o,
    brush: Po(t),
    snapToValidMove: e.drawable.defaultSnapToValidMove
  }, Mt(e));
}
function Mt(e) {
  requestAnimationFrame(() => {
    const t = e.drawable.current;
    if (t) {
      const o = ge(t.pos, $(e), e.dom.bounds());
      o || (t.snapToValidMove = !1);
      const n = t.snapToValidMove ? fo(t.orig, t.pos, $(e), e.dom.bounds()) : o;
      n !== t.mouseSq && (t.mouseSq = n, t.dest = n !== t.orig ? n : void 0, e.dom.redrawNow()), Mt(e);
    }
  });
}
function So(e, t) {
  e.drawable.current && (e.drawable.current.pos = pe(t));
}
function Co(e) {
  const t = e.drawable.current;
  t && (t.mouseSq && Eo(e.drawable, t), Nt(e));
}
function Nt(e) {
  e.drawable.current && (e.drawable.current = void 0, e.dom.redraw());
}
function yo(e) {
  e.drawable.shapes.length && (e.drawable.shapes = [], e.dom.redraw(), It(e.drawable));
}
function Po(e) {
  var t;
  const o = (e.shiftKey || e.ctrlKey) && dt(e), n = e.altKey || e.metaKey || ((t = e.getModifierState) === null || t === void 0 ? void 0 : t.call(e, "AltGraph"));
  return wo[(o ? 1 : 0) + (n ? 2 : 0)];
}
function Eo(e, t) {
  const o = (r) => r.orig === t.orig && r.dest === t.dest, n = e.shapes.find(o);
  n && (e.shapes = e.shapes.filter((r) => !o(r))), (!n || n.brush !== t.brush) && e.shapes.push({
    orig: t.orig,
    dest: t.dest,
    brush: t.brush
  }), It(e);
}
function It(e) {
  e.onChange && e.onChange(e.shapes);
}
function Ao(e, t) {
  if (!t.isTrusted || t.button !== void 0 && t.button !== 0 || t.touches && t.touches.length > 1)
    return;
  const o = e.dom.bounds(), n = pe(t), r = ge(n, $(e), o);
  if (!r)
    return;
  const s = e.pieces.get(r), d = e.selected;
  !d && e.drawable.enabled && (e.drawable.eraseOnClick || !s || s.color !== e.turnColor) && yo(e), t.cancelable !== !1 && (!t.touches || e.blockTouchScroll || s || d || To(e, n)) && t.preventDefault();
  const p = !!e.premovable.current, v = !!e.predroppable.current;
  e.stats.ctrlKey = t.ctrlKey, e.selected && je(e, e.selected, r) ? de((w) => Re(w, r), e) : Re(e, r);
  const m = e.selected === r, E = Kt(e, r);
  if (s && E && m && lo(e, r)) {
    e.draggable.current = {
      orig: r,
      piece: s,
      origPos: n,
      pos: n,
      started: e.draggable.autoDistance && e.stats.dragged,
      element: E,
      previouslySelected: d,
      originTarget: t.target,
      keyHasChanged: !1
    }, E.cgDragging = !0, E.classList.add("dragging");
    const w = e.dom.elements.ghost;
    w && (w.className = `ghost ${s.color} ${s.role}`, Z(w, Ce(o)(K(r), $(e))), He(w, !0)), Ve(e);
  } else
    p && le(e), v && ce(e);
  e.dom.redraw();
}
function To(e, t) {
  const o = $(e), n = e.dom.bounds(), r = Math.pow(n.width / 8, 2);
  for (const s of e.pieces.keys()) {
    const d = ft(s, o, n);
    if (Se(d, t) <= r)
      return !0;
  }
  return !1;
}
function Mo(e, t, o, n) {
  const r = "a0";
  e.pieces.set(r, t), e.dom.redraw();
  const s = pe(o);
  e.draggable.current = {
    orig: r,
    piece: t,
    origPos: s,
    pos: s,
    started: !0,
    element: () => Kt(e, r),
    originTarget: o.target,
    newPiece: !0,
    force: !!n,
    keyHasChanged: !1
  }, Ve(e);
}
function Ve(e) {
  requestAnimationFrame(() => {
    var t;
    const o = e.draggable.current;
    if (!o)
      return;
    !((t = e.animation.current) === null || t === void 0) && t.plan.anims.has(o.orig) && (e.animation.current = void 0);
    const n = e.pieces.get(o.orig);
    if (!n || !qe(n, o.piece))
      Pe(e);
    else if (!o.started && Se(o.pos, o.origPos) >= Math.pow(e.draggable.distance, 2) && (o.started = !0), o.started) {
      if (typeof o.element == "function") {
        const s = o.element();
        if (!s)
          return;
        s.cgDragging = !0, s.classList.add("dragging"), o.element = s;
      }
      const r = e.dom.bounds();
      Z(o.element, [
        o.pos[0] - r.left - r.width / 16,
        o.pos[1] - r.top - r.height / 16
      ]), o.keyHasChanged || (o.keyHasChanged = o.orig !== ge(o.pos, $(e), r));
    }
    Ve(e);
  });
}
function No(e, t) {
  e.draggable.current && (!t.touches || t.touches.length < 2) && (e.draggable.current.pos = pe(t));
}
function Io(e, t) {
  const o = e.draggable.current;
  if (!o)
    return;
  if (t.type === "touchend" && t.cancelable !== !1 && t.preventDefault(), t.type === "touchend" && o.originTarget !== t.target && !o.newPiece) {
    e.draggable.current = void 0;
    return;
  }
  le(e), ce(e);
  const n = pe(t) || o.pos, r = ge(n, $(e), e.dom.bounds());
  r && o.started && o.orig !== r ? o.newPiece ? kt(e, o.orig, r, o.force) : (e.stats.ctrlKey = t.ctrlKey, wt(e, o.orig, r) && (e.stats.dragged = !0)) : o.newPiece ? e.pieces.delete(o.orig) : e.draggable.deleteOnDropOff && !r && (e.pieces.delete(o.orig), B(e.events.change)), (o.orig === o.previouslySelected || o.keyHasChanged) && (o.orig === r || !r) ? V(e) : e.selectable.enabled || V(e), Ot(e), e.draggable.current = void 0, e.dom.redraw();
}
function Pe(e) {
  const t = e.draggable.current;
  t && (t.newPiece && e.pieces.delete(t.orig), e.draggable.current = void 0, V(e), Ot(e), e.dom.redraw());
}
function Ot(e) {
  const t = e.dom.elements;
  t.ghost && He(t.ghost, !1);
}
function Kt(e, t) {
  let o = e.dom.elements.board.firstChild;
  for (; o; ) {
    if (o.cgKey === t && o.tagName === "PIECE")
      return o;
    o = o.nextSibling;
  }
}
function Oo(e, t) {
  e.exploding = { stage: 1, keys: t }, e.dom.redraw(), setTimeout(() => {
    Je(e, 2), setTimeout(() => Je(e, void 0), 120);
  }, 120);
}
function Je(e, t) {
  e.exploding && (t ? e.exploding.stage = t : e.exploding = void 0, e.dom.redraw());
}
function Ko(e, t) {
  function o() {
    Jt(e), t();
  }
  return {
    set(n) {
      n.orientation && n.orientation !== e.orientation && o(), Et(e, n), (n.fen ? de : re)((r) => At(r, n), e);
    },
    state: e,
    getFen: () => go(e.pieces),
    toggleOrientation: o,
    setPieces(n) {
      de((r) => eo(r, n), e);
    },
    selectSquare(n, r) {
      n ? de((s) => Re(s, n, r), e) : e.selected && (V(e), e.dom.redraw());
    },
    move(n, r) {
      de((s) => vt(s, n, r), e);
    },
    newPiece(n, r) {
      de((s) => Ue(s, n, r), e);
    },
    playPremove() {
      if (e.premovable.current) {
        if (de(co, e))
          return !0;
        e.dom.redraw();
      }
      return !1;
    },
    playPredrop(n) {
      if (e.predroppable.current) {
        const r = uo(e, n);
        return e.dom.redraw(), r;
      }
      return !1;
    },
    cancelPremove() {
      re(le, e);
    },
    cancelPredrop() {
      re(ce, e);
    },
    cancelMove() {
      re((n) => {
        Qe(n), Pe(n);
      }, e);
    },
    stop() {
      re((n) => {
        Ye(n), Pe(n);
      }, e);
    },
    explode(n) {
      Oo(e, n);
    },
    setAutoShapes(n) {
      re((r) => r.drawable.autoShapes = n, e);
    },
    setShapes(n) {
      re((r) => r.drawable.shapes = n, e);
    },
    getKeyAtDomPos(n) {
      return ge(n, $(e), e.dom.bounds());
    },
    redrawAll: t,
    dragNewPiece(n, r, s) {
      Mo(e, n, r, s);
    },
    destroy() {
      Ye(e), e.dom.unbind && e.dom.unbind(), e.dom.destroyed = !0;
    }
  };
}
function qo() {
  return {
    pieces: Pt(yt),
    orientation: "white",
    turnColor: "white",
    coordinates: !0,
    ranksPosition: "right",
    autoCastle: !0,
    viewOnly: !1,
    disableContextMenu: !1,
    addPieceZIndex: !1,
    blockTouchScroll: !1,
    pieceKey: !1,
    highlight: {
      lastMove: !0,
      check: !0
    },
    animation: {
      enabled: !0,
      duration: 200
    },
    movable: {
      free: !0,
      color: "both",
      showDests: !0,
      events: {},
      rookCastle: !0
    },
    premovable: {
      enabled: !0,
      showDests: !0,
      castle: !0,
      events: {}
    },
    predroppable: {
      enabled: !1,
      events: {}
    },
    draggable: {
      enabled: !0,
      distance: 3,
      autoDistance: !0,
      showGhost: !0,
      deleteOnDropOff: !1
    },
    dropmode: {
      active: !1
    },
    selectable: {
      enabled: !0
    },
    stats: {
      // on touchscreen, default to "tap-tap" moves
      // instead of drag
      dragged: !("ontouchstart" in window)
    },
    events: {},
    drawable: {
      enabled: !0,
      visible: !0,
      defaultSnapToValidMove: !0,
      eraseOnClick: !0,
      shapes: [],
      autoShapes: [],
      brushes: {
        green: { key: "g", color: "#15781B", opacity: 1, lineWidth: 10 },
        red: { key: "r", color: "#882020", opacity: 1, lineWidth: 10 },
        blue: { key: "b", color: "#003088", opacity: 1, lineWidth: 10 },
        yellow: { key: "y", color: "#e68f00", opacity: 1, lineWidth: 10 },
        paleBlue: { key: "pb", color: "#003088", opacity: 0.4, lineWidth: 15 },
        paleGreen: { key: "pg", color: "#15781B", opacity: 0.4, lineWidth: 15 },
        paleRed: { key: "pr", color: "#882020", opacity: 0.4, lineWidth: 15 },
        paleGrey: {
          key: "pgr",
          color: "#4a4a4a",
          opacity: 0.35,
          lineWidth: 15
        }
      },
      prevSvgHash: ""
    },
    hold: xt()
  };
}
function De(e, t, o) {
  const n = /* @__PURE__ */ new Map(), r = [];
  for (const p of e)
    n.set(p.hash, !1);
  let s = t.firstChild, d;
  for (; s; )
    d = s.getAttribute("cgHash"), n.has(d) ? n.set(d, !0) : r.push(s), s = s.nextSibling;
  for (const p of r)
    t.removeChild(p);
  for (const p of e)
    n.get(p.hash) || t.appendChild(o(p));
}
function x(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function Ro(e, t, o) {
  const n = e.drawable, r = n.current, s = r && r.mouseSq ? r : void 0, d = /* @__PURE__ */ new Map(), p = e.dom.bounds(), v = n.autoShapes.filter((C) => !C.piece);
  for (const C of n.shapes.concat(v).concat(s ? [s] : []))
    C.dest && d.set(C.dest, (d.get(C.dest) || 0) + 1);
  const m = n.shapes.concat(v).map((C) => ({
    shape: C,
    current: !1,
    hash: et(C, d, !1, p)
  }));
  s && m.push({
    shape: s,
    current: !0,
    hash: et(s, d, !0, p)
  });
  const E = m.map((C) => C.hash).join(";");
  if (E === e.drawable.prevSvgHash)
    return;
  e.drawable.prevSvgHash = E;
  const w = t.querySelector("defs"), O = t.querySelector("g"), W = o.querySelector("g");
  Do(n, m, w), De(m.filter((C) => !C.shape.customSvg), O, (C) => tt(e, C, n.brushes, d, p)), De(m.filter((C) => C.shape.customSvg), W, (C) => tt(e, C, n.brushes, d, p));
}
function Do(e, t, o) {
  const n = /* @__PURE__ */ new Map();
  let r;
  for (const p of t)
    p.shape.dest && (r = e.brushes[p.shape.brush], p.shape.modifiers && (r = qt(r, p.shape.modifiers)), n.set(r.key, r));
  const s = /* @__PURE__ */ new Set();
  let d = o.firstChild;
  for (; d; )
    s.add(d.getAttribute("cgKey")), d = d.nextSibling;
  for (const [p, v] of n.entries())
    s.has(p) || o.appendChild(Uo(v));
}
function et({ orig: e, dest: t, brush: o, piece: n, modifiers: r, customSvg: s }, d, p, v) {
  return [
    v.width,
    v.height,
    p,
    e,
    t,
    o,
    t && (d.get(t) || 0) > 1,
    n && Lo(n),
    r && Wo(r),
    s && Bo(s)
  ].filter((m) => m).join(",");
}
function Lo(e) {
  return [e.color, e.role, e.scale].filter((t) => t).join(",");
}
function Wo(e) {
  return "" + (e.lineWidth || "");
}
function Bo(e) {
  let t = 0;
  for (let o = 0; o < e.length; o++)
    t = (t << 5) - t + e.charCodeAt(o) >>> 0;
  return "custom-" + t.toString();
}
function tt(e, { shape: t, current: o, hash: n }, r, s, d) {
  let p;
  const v = ot(K(t.orig), e.orientation);
  if (t.customSvg)
    p = $o(t.customSvg, v, d);
  else if (t.dest) {
    let m = r[t.brush];
    t.modifiers && (m = qt(m, t.modifiers)), p = Ho(m, v, ot(K(t.dest), e.orientation), o, (s.get(t.dest) || 0) > 1, d);
  } else
    p = Fo(r[t.brush], v, o, d);
  return p.setAttribute("cgHash", n), p;
}
function $o(e, t, o) {
  const [n, r] = Ee(t, o), s = ae(x("g"), { transform: `translate(${n},${r})` }), d = ae(x("svg"), { width: 1, height: 1, viewBox: "0 0 100 100" });
  return s.appendChild(d), d.innerHTML = e, s;
}
function Fo(e, t, o, n) {
  const r = Ee(t, n), s = jo(), d = (n.width + n.height) / (4 * Math.max(n.width, n.height));
  return ae(x("circle"), {
    stroke: e.color,
    "stroke-width": s[o ? 0 : 1],
    fill: "none",
    opacity: Rt(e, o),
    cx: r[0],
    cy: r[1],
    r: d - s[1] / 2
  });
}
function Ho(e, t, o, n, r, s) {
  const d = Qo(r && !n), p = Ee(t, s), v = Ee(o, s), m = v[0] - p[0], E = v[1] - p[1], w = Math.atan2(E, m), O = Math.cos(w) * d, W = Math.sin(w) * d;
  return ae(x("line"), {
    stroke: e.color,
    "stroke-width": Go(e, n),
    "stroke-linecap": "round",
    "marker-end": "url(#arrowhead-" + e.key + ")",
    opacity: Rt(e, n),
    x1: p[0],
    y1: p[1],
    x2: v[0] - O,
    y2: v[1] - W
  });
}
function Uo(e) {
  const t = ae(x("marker"), {
    id: "arrowhead-" + e.key,
    orient: "auto",
    markerWidth: 4,
    markerHeight: 8,
    refX: 2.05,
    refY: 2.01
  });
  return t.appendChild(ae(x("path"), {
    d: "M0,0 V4 L3,2 Z",
    fill: e.color
  })), t.setAttribute("cgKey", e.key), t;
}
function ae(e, t) {
  for (const o in t)
    Object.prototype.hasOwnProperty.call(t, o) && e.setAttribute(o, t[o]);
  return e;
}
function ot(e, t) {
  return t === "white" ? e : [7 - e[0], 7 - e[1]];
}
function qt(e, t) {
  return {
    color: e.color,
    opacity: Math.round(e.opacity * 10) / 10,
    lineWidth: Math.round(t.lineWidth || e.lineWidth),
    key: [e.key, t.lineWidth].filter((o) => o).join("")
  };
}
function jo() {
  return [3 / 64, 4 / 64];
}
function Go(e, t) {
  return (e.lineWidth || 10) * (t ? 0.85 : 1) / 64;
}
function Rt(e, t) {
  return (e.opacity || 1) * (t ? 0.9 : 1);
}
function Qo(e) {
  return (e ? 20 : 10) / 64;
}
function Ee(e, t) {
  const o = Math.min(1, t.width / t.height), n = Math.min(1, t.height / t.width);
  return [(e[0] - 3.5) * o, (3.5 - e[1]) * n];
}
function zo(e, t) {
  e.innerHTML = "", e.classList.add("cg-wrap");
  for (const v of Qt)
    e.classList.toggle("orientation-" + v, t.orientation === v);
  e.classList.toggle("manipulable", !t.viewOnly);
  const o = J("cg-container");
  e.appendChild(o);
  const n = J("cg-board");
  o.appendChild(n);
  let r, s, d;
  if (t.drawable.visible && (r = ae(x("svg"), {
    class: "cg-shapes",
    viewBox: "-4 -4 8 8",
    preserveAspectRatio: "xMidYMid slice"
  }), r.appendChild(x("defs")), r.appendChild(x("g")), s = ae(x("svg"), {
    class: "cg-custom-svgs",
    viewBox: "-3.5 -3.5 8 8",
    preserveAspectRatio: "xMidYMid slice"
  }), s.appendChild(x("g")), d = J("cg-auto-pieces"), o.appendChild(r), o.appendChild(s), o.appendChild(d)), t.coordinates) {
    const v = t.orientation === "black" ? " black" : "", m = t.ranksPosition === "left" ? " left" : "";
    o.appendChild(nt(Be, "ranks" + v + m)), o.appendChild(nt(We, "files" + v));
  }
  let p;
  return t.draggable.enabled && t.draggable.showGhost && (p = J("piece", "ghost"), He(p, !1), o.appendChild(p)), {
    board: n,
    container: o,
    wrap: e,
    ghost: p,
    svg: r,
    customSvg: s,
    autoPieces: d
  };
}
function nt(e, t) {
  const o = J("coords", t);
  let n;
  for (const r of e)
    n = J("coord"), n.textContent = r, o.appendChild(n);
  return o;
}
function Vo(e, t) {
  if (!e.dropmode.active)
    return;
  le(e), ce(e);
  const o = e.dropmode.piece;
  if (o) {
    e.pieces.set("a0", o);
    const n = pe(t), r = n && ge(n, $(e), e.dom.bounds());
    r && kt(e, "a0", r);
  }
  e.dom.redraw();
}
function xo(e, t) {
  const o = e.dom.elements.board;
  if ("ResizeObserver" in window && new ResizeObserver(t).observe(e.dom.elements.wrap), (e.disableContextMenu || e.drawable.enabled) && o.addEventListener("contextmenu", (r) => r.preventDefault()), e.viewOnly)
    return;
  const n = Yo(e);
  o.addEventListener("touchstart", n, {
    passive: !1
  }), o.addEventListener("mousedown", n, {
    passive: !1
  });
}
function Zo(e, t) {
  const o = [];
  if ("ResizeObserver" in window || o.push(ve(document.body, "chessground.resize", t)), !e.viewOnly) {
    const n = rt(e, No, So), r = rt(e, Io, Co);
    for (const d of ["touchmove", "mousemove"])
      o.push(ve(document, d, n));
    for (const d of ["touchend", "mouseup"])
      o.push(ve(document, d, r));
    const s = () => e.dom.bounds.clear();
    o.push(ve(document, "scroll", s, { capture: !0, passive: !0 })), o.push(ve(window, "resize", s, { passive: !0 }));
  }
  return () => o.forEach((n) => n());
}
function ve(e, t, o, n) {
  return e.addEventListener(t, o, n), () => e.removeEventListener(t, o, n);
}
const Yo = (e) => (t) => {
  e.draggable.current ? Pe(e) : e.drawable.current ? Nt(e) : t.shiftKey || dt(t) ? e.drawable.enabled && ko(e, t) : e.viewOnly || (e.dropmode.active ? Vo(e, t) : Ao(e, t));
}, rt = (e, t, o) => (n) => {
  e.drawable.current ? e.drawable.enabled && o(e, n) : e.viewOnly || t(e, n);
};
function Xo(e) {
  const t = $(e), o = Ce(e.dom.bounds()), n = e.dom.elements.board, r = e.pieces, s = e.animation.current, d = s ? s.plan.anims : /* @__PURE__ */ new Map(), p = s ? s.plan.fadings : /* @__PURE__ */ new Map(), v = e.draggable.current, m = en(e), E = /* @__PURE__ */ new Set(), w = /* @__PURE__ */ new Set(), O = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map();
  let C, y, F, ee, H, U, Y, j, D, X;
  for (y = n.firstChild; y; ) {
    if (C = y.cgKey, Dt(y))
      if (F = r.get(C), H = d.get(C), U = p.get(C), ee = y.cgPiece, y.cgDragging && (!v || v.orig !== C) && (y.classList.remove("dragging"), Z(y, o(K(C), t)), y.cgDragging = !1), !U && y.cgFading && (y.cgFading = !1, y.classList.remove("fading")), F) {
        if (H && y.cgAnimating && ee === _e(F)) {
          const T = K(C);
          T[0] += H[2], T[1] += H[3], y.classList.add("anim"), Z(y, o(T, t));
        } else
          y.cgAnimating && (y.cgAnimating = !1, y.classList.remove("anim"), Z(y, o(K(C), t)), e.addPieceZIndex && (y.style.zIndex = Ne(K(C), t)));
        ee === _e(F) && (!U || !y.cgFading) ? E.add(C) : U && ee === _e(U) ? (y.classList.add("fading"), y.cgFading = !0) : Ie(O, ee, y);
      } else
        Ie(O, ee, y);
    else if (Lt(y)) {
      const T = y.className;
      m.get(C) === T ? w.add(C) : Ie(W, T, y);
    }
    y = y.nextSibling;
  }
  for (const [T, ue] of m)
    if (!w.has(T)) {
      D = W.get(ue), X = D && D.pop();
      const R = o(K(T), t);
      if (X)
        X.cgKey = T, Z(X, R);
      else {
        const G = J("square", ue);
        G.cgKey = T, Z(G, R), n.insertBefore(G, n.firstChild);
      }
    }
  for (const [T, ue] of r)
    if (H = d.get(T), !E.has(T))
      if (Y = O.get(_e(ue)), j = Y && Y.pop(), j) {
        j.cgKey = T, j.cgFading && (j.classList.remove("fading"), j.cgFading = !1);
        const R = K(T);
        e.addPieceZIndex && (j.style.zIndex = Ne(R, t)), H && (j.cgAnimating = !0, j.classList.add("anim"), R[0] += H[2], R[1] += H[3]), Z(j, o(R, t));
      } else {
        const R = _e(ue), G = J("piece", R), te = K(T);
        G.cgPiece = R, G.cgKey = T, H && (G.cgAnimating = !0, te[0] += H[2], te[1] += H[3]), Z(G, o(te, t)), e.addPieceZIndex && (G.style.zIndex = Ne(te, t)), n.appendChild(G);
      }
  for (const T of O.values())
    st(e, T);
  for (const T of W.values())
    st(e, T);
}
function Jo(e) {
  const t = $(e), o = Ce(e.dom.bounds());
  let n = e.dom.elements.board.firstChild;
  for (; n; )
    (Dt(n) && !n.cgAnimating || Lt(n)) && Z(n, o(K(n.cgKey), t)), n = n.nextSibling;
}
function it(e) {
  var t, o;
  const n = e.dom.elements.wrap.getBoundingClientRect(), r = e.dom.elements.container, s = n.height / n.width, d = Math.floor(n.width * window.devicePixelRatio / 8) * 8 / window.devicePixelRatio, p = d * s;
  r.style.width = d + "px", r.style.height = p + "px", e.dom.bounds.clear(), (t = e.addDimensionsCssVarsTo) === null || t === void 0 || t.style.setProperty("--cg-width", d + "px"), (o = e.addDimensionsCssVarsTo) === null || o === void 0 || o.style.setProperty("--cg-height", p + "px");
}
const Dt = (e) => e.tagName === "PIECE", Lt = (e) => e.tagName === "SQUARE";
function st(e, t) {
  for (const o of t)
    e.dom.elements.board.removeChild(o);
}
function Ne(e, t) {
  const n = e[1];
  return `${t ? 3 + 7 - n : 3 + n}`;
}
const _e = (e) => `${e.color} ${e.role}`;
function en(e) {
  var t;
  const o = /* @__PURE__ */ new Map();
  if (e.lastMove && e.highlight.lastMove)
    for (const s of e.lastMove)
      ne(o, s, "last-move");
  if (e.check && e.highlight.check && ne(o, e.check, "check"), e.selected && (ne(o, e.selected, "selected"), e.movable.showDests)) {
    const s = (t = e.movable.dests) === null || t === void 0 ? void 0 : t.get(e.selected);
    if (s)
      for (const p of s)
        ne(o, p, "move-dest" + (e.pieces.has(p) ? " oc" : ""));
    const d = e.premovable.dests;
    if (d)
      for (const p of d)
        ne(o, p, "premove-dest" + (e.pieces.has(p) ? " oc" : ""));
  }
  const n = e.premovable.current;
  if (n)
    for (const s of n)
      ne(o, s, "current-premove");
  else
    e.predroppable.current && ne(o, e.predroppable.current.key, "current-premove");
  const r = e.exploding;
  if (r)
    for (const s of r.keys)
      ne(o, s, "exploding" + r.stage);
  return o;
}
function ne(e, t, o) {
  const n = e.get(t);
  n ? e.set(t, `${n} ${o}`) : e.set(t, o);
}
function Ie(e, t, o) {
  const n = e.get(t);
  n ? n.push(o) : e.set(t, [o]);
}
function tn(e, t) {
  const n = e.drawable.autoShapes.filter((r) => r.piece).map((r) => ({
    shape: r,
    hash: rn(r),
    current: !1
  }));
  De(n, t, (r) => nn(e, r, e.dom.bounds()));
}
function on(e) {
  var t;
  const o = $(e), n = Ce(e.dom.bounds());
  let r = (t = e.dom.elements.autoPieces) === null || t === void 0 ? void 0 : t.firstChild;
  for (; r; )
    ut(r, n(K(r.cgKey), o), r.cgScale), r = r.nextSibling;
}
function nn(e, { shape: t, hash: o }, n) {
  var r, s, d;
  const p = t.orig, v = (r = t.piece) === null || r === void 0 ? void 0 : r.role, m = (s = t.piece) === null || s === void 0 ? void 0 : s.color, E = (d = t.piece) === null || d === void 0 ? void 0 : d.scale, w = J("piece", `${v} ${m}`);
  return w.setAttribute("cgHash", o), w.cgKey = p, w.cgScale = E, ut(w, Ce(n)(K(p), $(e)), E), w;
}
const rn = (e) => {
  var t, o, n;
  return [e.orig, (t = e.piece) === null || t === void 0 ? void 0 : t.role, (o = e.piece) === null || o === void 0 ? void 0 : o.color, (n = e.piece) === null || n === void 0 ? void 0 : n.scale].join(",");
};
function sn(e, t) {
  const o = qo();
  At(o, t || {});
  function n() {
    const r = "dom" in o ? o.dom.unbind : void 0, s = zo(e, o), d = Vt(() => s.board.getBoundingClientRect()), p = (E) => {
      Xo(m), s.autoPieces && tn(m, s.autoPieces), !E && s.svg && Ro(m, s.svg, s.customSvg);
    }, v = () => {
      it(m), Jo(m), s.autoPieces && on(m);
    }, m = o;
    return m.dom = {
      elements: s,
      bounds: d,
      redraw: an(p),
      redrawNow: p,
      unbind: r
    }, m.drawable.prevSvgHash = "", it(m), p(!1), xo(m, v), r || (m.dom.unbind = Zo(m, v)), m.events.insert && m.events.insert(s), m;
  }
  return Ko(n(), n);
}
function an(e) {
  let t = !1;
  return () => {
    t || (t = !0, requestAnimationFrame(() => {
      e(), t = !1;
    }));
  };
}
function be(e) {
  const t = [];
  for (const o of e)
    t.push({ orig: o.to, brush: "yellow" }), o.captured && t.push({ orig: o.from, dest: o.to, brush: "red" }), o.san.includes("+") && t.push({ orig: o.from, dest: o.to, brush: "blue" });
  return t;
}
function fe(e) {
  return e === "w" ? "white" : "black";
}
function ln(e) {
  switch (e) {
    case "p":
      return "pawn";
    case "n":
      return "knight";
    case "b":
      return "bishop";
    case "r":
      return "rook";
    case "q":
      return "queen";
    case "k":
      return "king";
    default:
      return "pawn";
  }
}
function se(e) {
  const t = /* @__PURE__ */ new Map();
  for (const o of Le.SQUARES) {
    const n = e.moves({ square: o, verbose: !0 });
    n.length && t.set(
      n[0].from,
      n.map((r) => r.to)
    );
  }
  return t;
}
function cn(e, t) {
  if (t?.type !== "p")
    return !1;
  const o = t?.color === "w" ? "8" : "1";
  return e[1] === o;
}
function Wt(e, t) {
  for (const o of Object.keys(t))
    t[o] instanceof Object && Object.assign(t[o], Wt(e[o], t[o]));
  return Object.assign(e || {}, t), e;
}
function Ae(e, t, o) {
  if (e.inCheck()) {
    const r = t.state.pieces;
    for (const [s, d] of r)
      if (d.role === "king" && d.color === t?.state.turnColor) {
        t.state.check = s, o("check", t.state.turnColor), e.isCheckmate() && o("checkmate", t.state.turnColor);
        return;
      }
  }
  e.isDraw() && o("draw", !0), e.isStalemate() && o("stalemate", !0);
  const n = e.history({ verbose: !0 }).pop();
  typeof n < "u" && o("move", n);
}
class un {
  game;
  board;
  boardState;
  emit;
  constructor(t, o, n, r) {
    this.game = t, this.board = o, this.boardState = n, this.emit = r;
  }
  /**
   * Resets the board to the initial starting position.
   */
  resetBoard() {
    this.game.reset(), this.board.redrawAll(), this.board.set(this.boardState.boardConfig), this.board.state.check = void 0, this.board.selectSquare(null), this.boardState.showThreats && this.board.setShapes(be(this.game.moves({ verbose: !0 })));
  }
  /**
   * undo last move, if possible
   */
  undoLastMove() {
    if (this.game.undo() == null)
      return;
    const o = this.game.history({ verbose: !0 }).at(-1);
    this.board.set({ fen: this.game.fen() }), this.board.state.turnColor = fe(this.game.turn()), this.board.state.movable.color = this.boardState.playerColor || this.board.state.turnColor, this.board.state.movable.dests = se(this.game), this.board.state.check = void 0, this.game.history().length === 0 || typeof o > "u" ? this.board.state.lastMove = void 0 : this.board.state.lastMove = [o?.from, o?.to], this.boardState.showThreats && this.board.setShapes(be(this.game.moves({ verbose: !0 })));
  }
  /**
   * returns the current material count for white, black and the diff.
   * If diff > 0 white is leading, else black.
   */
  getMaterialCount() {
    const t = this.board.state.pieces, o = /* @__PURE__ */ new Map([
      ["pawn", 1],
      ["knight", 3],
      ["bishop", 3],
      ["rook", 5],
      ["queen", 9],
      ["king", 0]
    ]), n = {
      materialWhite: 0,
      materialBlack: 0,
      materialDiff: 0
    };
    for (const r of t)
      r[1].color === "white" ? n.materialWhite += o.get(r[1].role) || 0 : n.materialBlack += o.get(r[1].role) || 0;
    return n.materialDiff = n.materialWhite - n.materialBlack, n;
  }
  /**
   * toggles the board orientation.
   */
  toggleOrientation() {
    this.board.toggleOrientation();
  }
  /**
   * draws arrows and circles on the board for possible moves/captures
   */
  drawMoves() {
    this.boardState.showThreats = !0, this.board.setShapes(be(this.game.moves({ verbose: !0 })));
  }
  /**
   * removes arrows and circles from the board for possible moves/captures
   */
  hideMoves() {
    this.boardState.showThreats = !1, this.board.setShapes([]);
  }
  /**
   * draws an arrow on the board
   */
  drawMove(t, o, n) {
    this.board.setShapes([
      {
        orig: t,
        dest: o,
        brush: n
      }
    ]);
  }
  /**
   * toggle drawing of arrows and circles on the board for possible moves/captures
   */
  toggleMoves() {
    this.boardState.showThreats = !this.boardState.showThreats, this.boardState.showThreats ? this.board.setShapes(be(this.game.moves({ verbose: !0 }))) : this.board.setShapes([]);
  }
  /**
   * returns the opening name for the current position from lichess api
   */
  async getOpeningName() {
    try {
      const t = this.game.history({ verbose: !0 }).map((r) => r.lan).join(",");
      return (await (await fetch(
        `https://explorer.lichess.ovh/masters?play=${t}`
      )).json()).opening?.name ?? null;
    } catch {
      return null;
    }
  }
  /**
   * make a move programmatically on the board
   * @param move the san move to make like 'e4', 'O-O' or 'e8=Q'
   * @returns true if the move was made, false if the move was illegal
   */
  move(t) {
    const o = this.game.move(t);
    if (o == null)
      return !1;
    if (t === "O-O-O" || t === "O-O") {
      const n = o.to[1];
      t === "O-O-O" ? this.board.move(`a${n}`, `d${n}`) : this.board.move(`h${n}`, `f${n}`);
    }
    if (o.promotion) {
      this.board.state.pieces.set(o.to, {
        color: fe(o.color),
        role: ln(o.promotion),
        promoted: !0
      }), this.board.state.pieces.delete(o.from), this.board.redrawAll();
      const n = o.promotion.toUpperCase();
      this.emit("promotion", {
        color: this.board?.state.turnColor === "white" ? "black" : "white",
        promotedTo: n,
        sanMove: o.san
      });
    } else
      this.board.move(o.from, o.to);
    return this.board.state.movable.dests = se(this.game), this.board.state.turnColor = fe(this.game.turn()), this.board.state.movable.color = this.boardState.playerColor || this.board.state.turnColor, this.board.state.lastMove = [o.from, o.to], this.boardState.showThreats && this.board.setShapes(be(this.game.moves({ verbose: !0 }))), Ae(this.game, this.board, this.emit), !0;
  }
  /**
   * returns the current turn color
   * @returns 'white' or 'black'
   */
  getTurnColor() {
    return this.board.state.turnColor;
  }
  /**
   * returns all possible moves for the current position
   *
   */
  getPossibleMoves() {
    return se(this.game);
  }
  /**
   *
   * @returns the current turn number
   * @example e4 e5 -> turn number is 2
   */
  getCurrentTurnNumber() {
    let t = this.game.history().length;
    return t % 2 === 0 && t !== 0 && (t += 1), Math.ceil(t / 2);
  }
  /**
   *
   * @returns the turn number of the last move
   * @example e4 e5 -> turn number is 1 | e4 e5 Nf3 -> turn number is 2
   */
  getLastMoveTurnNumber() {
    return Math.ceil(this.game.history().length / 2);
  }
  /**
   * returns the latest move made on the board
   */
  getLastMove() {
    return this.game.history({ verbose: !0 }).at(-1);
  }
  /**
   * Retrieves the move history.
   *
   * @param verbose - passing true will add more info
   */
  getHistory(t = !1) {
    return this.game.history({ verbose: t });
  }
  /**
   * Returns the FEN string for the current position.
   */
  getFen() {
    return this.game.fen();
  }
  /**
   * Returns the board position as a 2D array.
   */
  getBoardPosition() {
    return this.game.board();
  }
  /**
   * returns the PGN string for the current position.
   */
  getPgn() {
    return this.game.pgn();
  }
  /**
   * returns true of false depending on if the game is over
   */
  getIsGameOver() {
    return this.game.isGameOver();
  }
  /**
   * returns true or false depending on if a player is checkmated
   */
  getIsCheckmate() {
    return this.game.isCheckmate();
  }
  /**
   * returns true or false depending on if a player is in stalemate
   */
  getIsStalemate() {
    return this.game.isStalemate();
  }
  /**
   * returns true or false depending on if a game is drawn
   */
  getIsDraw() {
    return this.game.isDraw();
  }
  /**
   * returns true or false depending on if a game is drawn by threefold repetition
   */
  getIsThreefoldRepetition() {
    return this.game.isThreefoldRepetition();
  }
  /**
   * returns true or false depending on if a game is drawn by insufficient material
   */
  getIsInsufficientMaterial() {
    return this.game.isInsufficientMaterial();
  }
  /**
   * returns the color of a given square
   */
  getSquareColor(t) {
    return this.game.squareColor(t);
  }
  /**
   * Returns the piece on the square or null if there is no piece
   */
  getSquare(t) {
    return this.game.get(t);
  }
  /**
   * loads a fen into the board
   */
  setPosition(t) {
    this.game.load(t), this.updateGameState();
  }
  /**
   * puts a piece on a given square on the board
   * returns true on success, else false
   */
  putPiece(t, o) {
    return this.game.put(t, o);
  }
  /**
   * removes all pieces from the board
   */
  clearBoard() {
    this.game.clear();
  }
  /**
   * draw multiple arrows on the board
   */
  setShapes(t) {
    this.board.setShapes(t);
  }
  /**
   * loads a pgn into the board
   *
   * @param pgn - the pgn to load
   */
  loadPgn(t) {
    this.game.loadPgn(t), this.updateGameState();
  }
  /**
   * apply the fen game on the board
   */
  updateGameState() {
    this.board.set({ fen: this.game.fen() }), this.board.state.turnColor = fe(this.game.turn()), this.board.state.movable.color = this.boardState.playerColor || this.board.state.turnColor, this.board.state.movable.dests = se(this.game), Ae(this.game, this.board, this.emit);
  }
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
  getPgnInfo() {
    return this.game.header();
  }
}
const dn = /* @__PURE__ */ new Map([
  ["b1", ["a3", "c3"]],
  ["g1", ["f3", "h3"]],
  ["a2", ["a3", "a4"]],
  ["b2", ["b3", "b4"]],
  ["c2", ["c3", "c4"]],
  ["d2", ["d3", "d4"]],
  ["e2", ["e3", "e4"]],
  ["f2", ["f3", "f4"]],
  ["g2", ["g3", "g4"]],
  ["h2", ["h3", "h4"]]
]), fn = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1", Oe = {
  fen: fn,
  orientation: "white",
  turnColor: "white",
  coordinates: !1,
  autoCastle: !0,
  viewOnly: !1,
  disableContextMenu: !1,
  addPieceZIndex: !1,
  blockTouchScroll: !1,
  highlight: {
    lastMove: !0,
    check: !0
  },
  animation: {
    enabled: !0,
    duration: 300
  },
  lastMove: void 0,
  movable: {
    free: !1,
    color: "white",
    showDests: !0,
    dests: dn,
    events: {},
    rookCastle: !0
  },
  premovable: {
    enabled: !0,
    showDests: !0,
    castle: !0,
    events: {}
  },
  predroppable: {
    enabled: !1,
    events: {}
  },
  draggable: {
    enabled: !0,
    distance: 3,
    autoDistance: !0,
    showGhost: !0,
    deleteOnDropOff: !1
  },
  selectable: {
    enabled: !0
  },
  events: {},
  drawable: {
    enabled: !0,
    visible: !0,
    defaultSnapToValidMove: !0,
    eraseOnClick: !0,
    shapes: [],
    autoShapes: [],
    brushes: {
      green: { key: "g", color: "#15781B", opacity: 1, lineWidth: 10 },
      red: { key: "r", color: "#882020", opacity: 1, lineWidth: 10 },
      blue: { key: "b", color: "#003088", opacity: 1, lineWidth: 10 },
      yellow: { key: "y", color: "#e68f00", opacity: 1, lineWidth: 10 },
      paleBlue: { key: "pb", color: "#003088", opacity: 0.4, lineWidth: 15 },
      paleGreen: { key: "pg", color: "#15781B", opacity: 0.4, lineWidth: 15 },
      paleRed: { key: "pr", color: "#882020", opacity: 0.4, lineWidth: 15 },
      paleGrey: {
        key: "pgr",
        color: "#4a4a4a",
        opacity: 0.35,
        lineWidth: 15
      }
    }
  }
}, hn = { class: "main-board" }, pn = { class: "dialog-container" }, mn = /* @__PURE__ */ at({
  __name: "TheChessboard",
  props: {
    boardConfig: {
      type: Object,
      default: Oe
    },
    playerColor: {
      type: [String, void 0],
      default: null
    }
  },
  emits: ["boardCreated", "checkmate", "stalemate", "draw", "check", "promotion", "move"],
  setup(e, { emit: t }) {
    const o = e;
    let n;
    const r = we(null), s = new Le.Chess(), d = we("white"), p = we(), v = we({
      showThreats: !1,
      boardConfig: {},
      openPromotionDialog: !1,
      playerColor: o.playerColor
    });
    Ft(() => {
      if (r.value == null)
        throw new Error("vue3-chessboard: Failed to mount board.");
      o.boardConfig ? v.value.boardConfig = Wt(Oe, o.boardConfig) : v.value.boardConfig = Oe, o.playerColor && (v.value.boardConfig.movable = {
        color: o.playerColor,
        dests: se(s)
      }), o.boardConfig.fen && (s.load(o.boardConfig.fen), v.value.boardConfig.turnColor = fe(s.turn()), v.value.boardConfig.check = s.inCheck(), v.value.boardConfig.movable = {
        color: o.playerColor || v.value.boardConfig.turnColor,
        dests: se(s)
      }), n = sn(r.value, v.value.boardConfig), n.set({
        movable: { events: { after: E() }, dests: se(s) }
      }), d.value = fe(s.turn()), t("boardCreated", new un(s, n, v.value, t)), Ae(s, n, t);
    });
    async function m() {
      return d.value = fe(s.turn()), v.value.openPromotionDialog = !0, new Promise(
        (w) => jt(p, () => w(p.value))
      );
    }
    function E() {
      return async (w, O) => {
        if (typeof n > "u") {
          console.error("vue3-chessboard: No board element found");
          return;
        }
        if (cn(O, s.get(w))) {
          await m(), v.value.openPromotionDialog = !1;
          const W = p.value?.toUpperCase(), C = `${w[0]}x${O}=${W}`;
          t("promotion", {
            color: n.state.turnColor,
            sanMove: C,
            promotedTo: W
          });
        }
        s.move({
          from: w,
          to: O,
          promotion: p.value
        }), p.value = void 0, n.set({
          animation: {
            enabled: !1
          },
          fen: s.fen(),
          turnColor: n.state.turnColor,
          movable: {
            color: o.playerColor || n.state.turnColor,
            dests: se(s)
          }
        }), n.set({
          animation: {
            enabled: !0
          }
        }), Ae(s, n, t), v.value.showThreats && n.setShapes(be(s.moves({ verbose: !0 })));
      };
    }
    return (w, O) => (Ke(), Ht("section", {
      class: ke(["main-wrap", { disabledBoard: v.value.openPromotionDialog }])
    }, [
      ie("div", hn, [
        ie("div", pn, [
          v.value.openPromotionDialog ? (Ke(), lt(Gt, {
            key: 0,
            "turn-color": d.value,
            onPromotionSelected: O[0] || (O[0] = (W) => p.value = W)
          }, null, 8, ["turn-color"])) : Ut("", !0)
        ]),
        ie("div", {
          ref_key: "boardElement",
          ref: r
        }, null, 512)
      ])
    ], 2));
  }
});
export {
  un as BoardApi,
  mn as TheChessboard
};
