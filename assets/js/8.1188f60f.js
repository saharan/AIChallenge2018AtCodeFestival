(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{139:function(a,v,_){"use strict";_.r(v);var t={props:["slot-key"]},s=_(1),r=Object(s.a)(t,function(){var a=this,v=a.$createElement,_=a._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":a.slotKey}},[_("h1",{attrs:{id:"ルール（概要版）"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#ルール（概要版）","aria-hidden":"true"}},[a._v("#")]),a._v(" ルール（"),_("strong",[a._v("概要版")]),a._v("）")]),a._v(" "),_("p",[a._v("パズルゲーム "),_("a",{attrs:{href:"https://ja.wikipedia.org/wiki/2048_(%E3%82%B2%E3%83%BC%E3%83%A0)",target:"_blank",rel:"noopener noreferrer"}},[a._v("2048"),_("OutboundLink")],1),a._v(" が対戦ゲームになった！\n（本概要版を2018/11/03 (土)に公開しました。ベータ版が2018/11/07 (水)に、正式版が2018/11/10 (土)に公開予定。）")]),a._v(" "),_("h2",{attrs:{id:"ゲームルール"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#ゲームルール","aria-hidden":"true"}},[a._v("#")]),a._v(" ゲームルール")]),a._v(" "),_("p",[a._v("2 人のプレイヤーはそれぞれ "),_("strong",[a._v("あるサイズ(TBD)の")]),a._v(" ボードと 0 のスコアを持っています。\nボードの各マスには高々 1 個の正整数が入ります。\nゲーム開始時、ボードのすべてのマスは空です。\nゲームでは 2 人のプレイヤーに交互にターン（手番）が回り、自分のとる行動を選択します。\nターンは次の 2 個のフェーズからなります。\nなお、対戦相手や先攻・後攻は、オンライン対戦システムによって自動的に決定されます。")]),a._v(" "),_("p",[a._v("どちらかのプレイヤーが勝利条件を満たす、もしくは、\n2 人のプレイヤーがそれぞれ "),_("strong",[a._v("一定数(TBD)の")]),a._v(" ターン行動するとゲーム終了となり、勝敗が決まります。\n勝利条件および勝敗の決め方については、後述の勝利条件をご覧ください。")]),a._v(" "),_("h3",{attrs:{id:"メインフェーズ"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#メインフェーズ","aria-hidden":"true"}},[a._v("#")]),a._v(" メインフェーズ")]),a._v(" "),_("p",[a._v("ターンプレイヤーは上下左右のいずれかの向きを 1 個選択します。\nボード上の数たちは、選択された向きに、ボードの端か他の数にぶつかるまで移動します。\nこのとき 2 個の等しい数がぶつかると、それらがマージ（加算）されて 1 個の数になります。\n"),_("strong",[a._v("マージが発生するたび、マージによってできた数に等しい値がスコアに加算されます。(TBD)")])]),a._v(" "),_("h4",{attrs:{id:"例-1"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#例-1","aria-hidden":"true"}},[a._v("#")]),a._v(" 例 1")]),a._v(" "),_("p",[a._v("次のような状態のボードについて「右」を選択した場合を考えます。\n（"),_("code",[a._v(".")]),a._v("は空マスを表します。以下の図示は"),_("strong",[a._v("ゲームソフトウェアが与える実際の入力形式とは異なります")]),a._v("。）")]),a._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[a._v(". 4 . 4\n4 2 . .\n2 2 2 .\n4 2 . 2\n")])])]),_("p",[a._v("1 行目の 4 と 4 はマージされて 8 になります。\n2 行目の 4 と 2 は順序を保ったまま右に移動します。\n3 行目の 3 個の 2 は移動の先頭（右端）から順にマージが発生し 4 と 2 になります。\n4 行目の 2 と 2 はマージされて 4 になります。続けて 4 とマージはされません。\nその結果、ボードは次のように変化しました。")]),a._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[a._v(". . . 8\n. . 4 2\n. . 2 4\n. . 4 4\n")])])]),_("h4",{attrs:{id:"例-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#例-2","aria-hidden":"true"}},[a._v("#")]),a._v(" 例 2")]),a._v(" "),_("p",[a._v("次のような状態のボードについて「右」を選択した場合を考えます。\n（"),_("code",[a._v(".")]),a._v("は空マスを表します。以下の図示は"),_("strong",[a._v("ゲームソフトウェアが与える実際の入力形式とは異なります")]),a._v("。）")]),a._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[a._v("2 2 2 2\n. . . .\n. . . .\n. . . .\n")])])]),_("p",[a._v("1 行目の 2 と 2 の各ペアはマージされて、それぞれ 4 になります。 8 ではないことに注意してください。\nその結果、ボードは次のように変化しました。")]),a._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[a._v(". . 4 4\n. . . .\n. . . .\n. . . .\n")])])]),_("h3",{attrs:{id:"アタックフェーズ"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#アタックフェーズ","aria-hidden":"true"}},[a._v("#")]),a._v(" アタックフェーズ")]),a._v(" "),_("p",[_("strong",[a._v("(TBD)")])]),a._v(" "),_("h2",{attrs:{id:"入出力"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#入出力","aria-hidden":"true"}},[a._v("#")]),a._v(" 入出力")]),a._v(" "),_("p",[a._v("以下に入出力の形式を記します。出力後に標準出力を flush しなければなりません。")]),a._v(" "),_("h3",{attrs:{id:"ゲーム開始前の入力"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#ゲーム開始前の入力","aria-hidden":"true"}},[a._v("#")]),a._v(" ゲーム開始前の入力")]),a._v(" "),_("pre",[a._v("Player\n")]),a._v(" "),_("ul",[_("li",[a._v("Player: プレイヤー番号\n"),_("ul",[_("li",[_("code",[a._v("0")]),a._v(": 先攻プレイヤー")]),a._v(" "),_("li",[_("code",[a._v("1")]),a._v(": 後攻プレイヤー")])])])]),a._v(" "),_("h3",{attrs:{id:"ゲーム開始前の出力"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#ゲーム開始前の出力","aria-hidden":"true"}},[a._v("#")]),a._v(" ゲーム開始前の出力")]),a._v(" "),_("pre",[a._v("0\n")]),a._v(" "),_("ul",[_("li",[_("code",[a._v("0")]),a._v(": ゲームを開始する準備ができたことを知らせる出力")])]),a._v(" "),_("h3",{attrs:{id:"各ターンの入力"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#各ターンの入力","aria-hidden":"true"}},[a._v("#")]),a._v(" 各ターンの入力")]),a._v(" "),_("pre",[a._v("A"),_("sub",[a._v("1,1")]),a._v(" A"),_("sub",[a._v("1,2")]),a._v(" ... A"),_("sub",[a._v("1,M")]),a._v("\nA"),_("sub",[a._v("2,1")]),a._v(" A"),_("sub",[a._v("2,2")]),a._v(" ... A"),_("sub",[a._v("2,M")]),a._v("\n:\nA"),_("sub",[a._v("N,1")]),a._v(" A"),_("sub",[a._v("N,2")]),a._v(" ... A"),_("sub",[a._v("N,M")]),a._v("\nB"),_("sub",[a._v("1,1")]),a._v(" B"),_("sub",[a._v("1,2")]),a._v(" ... B"),_("sub",[a._v("1,M")]),a._v("\nB"),_("sub",[a._v("2,1")]),a._v(" B"),_("sub",[a._v("2,2")]),a._v(" ... B"),_("sub",[a._v("2,M")]),a._v("\n:\nB"),_("sub",[a._v("N,1")]),a._v(" B"),_("sub",[a._v("N,2")]),a._v(" ... B"),_("sub",[a._v("N,M")]),a._v("\n")]),a._v(" "),_("ul",[_("li",[a._v("A"),_("sub",[a._v("i,j")]),a._v(": 自分のボードの i 行目 j 列目のマスの状態")]),a._v(" "),_("li",[a._v("B"),_("sub",[a._v("i,j")]),a._v(": 相手のボードの i 行目 j 列目のマスの状態\n"),_("ul",[_("li",[_("code",[a._v("0")]),a._v(" のとき、そのマスは空である。")]),a._v(" "),_("li",[a._v("正整数 a のとき、そのマスの数は 2"),_("sup",[a._v("a")]),a._v(" である。")])])])]),a._v(" "),_("h3",{attrs:{id:"各ターンの出力"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#各ターンの出力","aria-hidden":"true"}},[a._v("#")]),a._v(" 各ターンの出力")]),a._v(" "),_("p",[_("strong",[a._v("(TBD)")])]),a._v(" "),_("h2",{attrs:{id:"勝利条件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#勝利条件","aria-hidden":"true"}},[a._v("#")]),a._v(" 勝利条件")]),a._v(" "),_("p",[a._v("以下の条件のどちらかを満たすことで、ゲームに勝利できます。")]),a._v(" "),_("ol",[_("li",[a._v("対戦相手のプレイヤーのターンに、以下の条件のいずれかを満たした場合\n"),_("ul",[_("li",[a._v("対戦相手のメインフェーズにおいて、対戦相手が行動してもボードの状態が変化しなかった場合")]),a._v(" "),_("li",[a._v("対戦相手の AI プログラムが、ゲームからの入力を受け取らなかった場合")]),a._v(" "),_("li",[a._v("対戦相手の AI プログラムの出力が、定められたフォーマットもしくは制約を満たさなかった場合")])])]),a._v(" "),_("li",[a._v("2 人のプレイヤーがそれぞれ "),_("strong",[a._v("一定数(TBD)の")]),a._v(" ターンで行動した後、自分のスコアが対戦相手のスコアより高かった場合")]),a._v(" "),_("li",[a._v("2 人のプレイヤーがそれぞれ "),_("strong",[a._v("一定数(TBD)の")]),a._v(" ターンで行動した後、自分のスコアと対戦相手のスコアが等しく、かつ、自分が後攻であった場合")])]),a._v(" "),_("h2",{attrs:{id:"実行時間"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#実行時間","aria-hidden":"true"}},[a._v("#")]),a._v(" 実行時間")]),a._v(" "),_("p",[_("strong",[a._v("(TBD)")])])])},[],!1,null,null,null);r.options.__file="index.md";v.default=r.exports}}]);