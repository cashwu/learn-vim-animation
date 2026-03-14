// ==========================================
// Vim 動畫預覽 - 全部 62 個動畫資料
// 自動從 article*.tsx 提取轉換
// ==========================================

// eslint-disable-next-line no-unused-vars
var demos = {
    // ========== Article 1: 模式與移動 (12) ==========
    '1-01-hjkl': {
        category: 'article1',
        title: 'h/j/k/l - 基本移動',
        keyPoint: '<code>h</code> = ← | <code>j</code> = ↓ | <code>k</code> = ↑ | <code>l</code> = →',
        steps: [
            { content: 'hello world\nvim editor\ntest file', cursor: [0, 6], desc: 'h/j/k/l：Vim 的方向鍵' },
            { content: 'hello world\nvim editor\ntest file', cursor: [0, 6], key: 'h', desc: '按 h（← 左移）' },
            { content: 'hello world\nvim editor\ntest file', cursor: [0, 5], key: 'h', desc: '游標向左移一格' },
            { content: 'hello world\nvim editor\ntest file', cursor: [0, 5], key: 'l', desc: '按 l（→ 右移）' },
            { content: 'hello world\nvim editor\ntest file', cursor: [0, 6], key: 'l', desc: '游標向右移一格' },
            { content: 'hello world\nvim editor\ntest file', cursor: [0, 6], key: 'j', desc: '按 j（↓ 下移）' },
            { content: 'hello world\nvim editor\ntest file', cursor: [1, 6], key: 'j', desc: '游標向下移一行' },
            { content: 'hello world\nvim editor\ntest file', cursor: [1, 6], key: 'k', desc: '按 k（↑ 上移）' },
            { content: 'hello world\nvim editor\ntest file', cursor: [0, 6], key: 'k', desc: '游標向上移一行' },
        ]
    },
    '1-02-gg-G': {
        category: 'article1',
        title: 'gg / G - 檔案導航',
        keyPoint: '<code>gg</code> = 檔首 | <code>G</code> = 檔尾 | <code>NG</code> = 第 N 行',
        steps: [
            { content: 'first line\nsecond line\nthird line\nfourth line\nlast line', cursor: [2, 0], desc: 'gg / G：檔案首尾跳轉' },
            { content: 'first line\nsecond line\nthird line\nfourth line\nlast line', cursor: [2, 0], key: 'gg', desc: '按 gg' },
            { content: 'first line\nsecond line\nthird line\nfourth line\nlast line', cursor: [0, 0], key: 'gg', desc: 'gg：跳到檔案第一行' },
            { content: 'first line\nsecond line\nthird line\nfourth line\nlast line', cursor: [0, 0], key: 'G', desc: '按 G' },
            { content: 'first line\nsecond line\nthird line\nfourth line\nlast line', cursor: [4, 0], key: 'G', desc: 'G：跳到檔案最後一行' },
            { content: 'first line\nsecond line\nthird line\nfourth line\nlast line', cursor: [4, 0], key: '3G', desc: '按 3G' },
            { content: 'first line\nsecond line\nthird line\nfourth line\nlast line', cursor: [2, 0], key: '3G', desc: '3G：跳到第 3 行' },
            { content: 'first line\nsecond line\nthird line\nfourth line\nlast line', cursor: [2, 0], desc: 'gg = 檔首 | G = 檔尾 | NG = 第 N 行' },
        ]
    },
    '1-03-w': {
        category: 'article1',
        title: 'w - Word 移動',
        keyPoint: '<code>w</code>：每個標點都是 word 的分界',
        steps: [
            { content: 'hello-world foo_bar', cursor: 0, desc: 'w 移動：標點符號也算分隔' },
            { content: 'hello-world foo_bar', cursor: 0, key: 'w', desc: '按 w' },
            { content: 'hello-world foo_bar', cursor: 5, key: 'w', desc: '停在 "-"（標點符號）' },
            { content: 'hello-world foo_bar', cursor: 5, key: 'w', desc: '按 w' },
            { content: 'hello-world foo_bar', cursor: 6, key: 'w', desc: '停在 "world"' },
            { content: 'hello-world foo_bar', cursor: 6, key: 'w', desc: '按 w' },
            { content: 'hello-world foo_bar', cursor: 12, key: 'w', desc: '停在 "foo"' },
            { content: 'hello-world foo_bar', cursor: 12, key: 'w', desc: '按 w' },
            { content: 'hello-world foo_bar', cursor: 15, key: 'w', desc: '停在 "_"（標點符號）' },
            { content: 'hello-world foo_bar', cursor: 15, desc: 'w：每個標點都是分界' },
        ]
    },
    '1-04-W': {
        category: 'article1',
        title: 'W - WORD 移動',
        keyPoint: '<code>W</code>：只有空格才是 WORD 的分界',
        steps: [
            { content: 'hello-world foo_bar end', cursor: 0, desc: 'W 移動：只看空格，忽略標點' },
            { content: 'hello-world foo_bar end', cursor: 0, key: 'W', desc: '按 W' },
            { content: 'hello-world foo_bar end', cursor: 12, key: 'W', desc: '直接跳到 "foo"（跳過 hello-world）' },
            { content: 'hello-world foo_bar end', cursor: 12, key: 'W', desc: '按 W' },
            { content: 'hello-world foo_bar end', cursor: 20, key: 'W', desc: '跳到 "end"（跳過 foo_bar）' },
            { content: 'hello-world foo_bar end', cursor: 20, desc: 'W：只有空格才是分界' },
        ]
    },
    '1-05-w-vs-W': {
        category: 'article1',
        title: 'w vs W 比較',
        keyPoint: '小寫 <code>w</code> 在標點處停（4 步），大寫 <code>W</code> 只看空格（1 步）',
        steps: [
            { content: 'hello-world.test end', cursor: 0, desc: 'w vs W 比較' },
            { content: 'hello-world.test end', cursor: 0, key: 'w', desc: '按 w' },
            { content: 'hello-world.test end', cursor: 5, key: 'w', desc: 'w 停在 "-"' },
            { content: 'hello-world.test end', cursor: 5, key: 'w', desc: '按 w' },
            { content: 'hello-world.test end', cursor: 6, key: 'w', desc: 'w 停在 "world"' },
            { content: 'hello-world.test end', cursor: 6, key: 'w', desc: '按 w' },
            { content: 'hello-world.test end', cursor: 11, key: 'w', desc: 'w 停在 "."' },
            { content: 'hello-world.test end', cursor: 11, key: 'w', desc: '按 w' },
            { content: 'hello-world.test end', cursor: 12, key: 'w', desc: 'w 停在 "test"' },
            { content: 'hello-world.test end', cursor: 0, desc: '重置，改用 W' },
            { content: 'hello-world.test end', cursor: 0, key: 'W', desc: '按 W' },
            { content: 'hello-world.test end', cursor: 17, key: 'W', desc: 'W 直接跳到 "end"！' },
            { content: 'hello-world.test end', cursor: 17, desc: 'w = 4 步 | W = 1 步' },
        ]
    },
    '1-06-e': {
        category: 'article1',
        title: 'e - 移到 Word 結尾',
        keyPoint: '<code>e</code>：停在每個 word 的最後一個字元',
        steps: [
            { content: 'hello world test', cursor: 0, desc: 'e 移動：移到 word 結尾' },
            { content: 'hello world test', cursor: 0, key: 'e', desc: '按 e' },
            { content: 'hello world test', cursor: 4, key: 'e', desc: '停在 "hello" 的 o（word 結尾）' },
            { content: 'hello world test', cursor: 4, key: 'e', desc: '按 e' },
            { content: 'hello world test', cursor: 10, key: 'e', desc: '停在 "world" 的 d' },
            { content: 'hello world test', cursor: 10, key: 'e', desc: '按 e' },
            { content: 'hello world test', cursor: 15, key: 'e', desc: '停在 "test" 的 t' },
            { content: 'hello world test', cursor: 15, desc: 'e：停在每個 word 的最後一個字元' },
        ]
    },
    '1-07-e-vs-E': {
        category: 'article1',
        title: 'e vs E 比較',
        keyPoint: '<code>e</code> 在標點處停（3 步），<code>E</code> 只看空格（1 步）',
        steps: [
            { content: 'hello-world test', cursor: 0, desc: 'e vs E 比較' },
            { content: 'hello-world test', cursor: 0, key: 'e', desc: '按 e' },
            { content: 'hello-world test', cursor: 4, key: 'e', desc: 'e 停在 "hello" 的 o' },
            { content: 'hello-world test', cursor: 4, key: 'e', desc: '按 e' },
            { content: 'hello-world test', cursor: 5, key: 'e', desc: 'e 停在 "-"' },
            { content: 'hello-world test', cursor: 5, key: 'e', desc: '按 e' },
            { content: 'hello-world test', cursor: 10, key: 'e', desc: 'e 停在 "world" 的 d' },
            { content: 'hello-world test', cursor: 0, desc: '重置，改用 E' },
            { content: 'hello-world test', cursor: 0, key: 'E', desc: '按 E' },
            { content: 'hello-world test', cursor: 10, key: 'E', desc: 'E 直接到 "d"（跳過 hello-）' },
            { content: 'hello-world test', cursor: 10, desc: 'e = 3 步 | E = 1 步' },
        ]
    },
    '1-08-b': {
        category: 'article1',
        title: 'b - 往回 Word 移動',
        keyPoint: '<code>b</code>：往回移動，停在 word 開頭',
        steps: [
            { content: 'hello-world test', cursor: 15, desc: 'b 移動：往回移到 word 開頭' },
            { content: 'hello-world test', cursor: 15, key: 'b', desc: '按 b' },
            { content: 'hello-world test', cursor: 12, key: 'b', desc: '停在 "test" 的 t' },
            { content: 'hello-world test', cursor: 12, key: 'b', desc: '按 b' },
            { content: 'hello-world test', cursor: 6, key: 'b', desc: '停在 "world" 的 w' },
            { content: 'hello-world test', cursor: 6, key: 'b', desc: '按 b' },
            { content: 'hello-world test', cursor: 5, key: 'b', desc: '停在 "-"' },
            { content: 'hello-world test', cursor: 5, key: 'b', desc: '按 b' },
            { content: 'hello-world test', cursor: 0, key: 'b', desc: '停在 "hello"' },
            { content: 'hello-world test', cursor: 0, desc: 'b：往回，停在 word 開頭' },
        ]
    },
    '1-09-b-vs-B': {
        category: 'article1',
        title: 'b vs B 比較',
        keyPoint: '<code>b</code> 在標點處停（3 步），<code>B</code> 只看空格（2 步）',
        steps: [
            { content: 'hello-world test', cursor: 15, desc: 'b vs B 比較' },
            { content: 'hello-world test', cursor: 15, key: 'b', desc: '按 b' },
            { content: 'hello-world test', cursor: 12, key: 'b', desc: 'b 停在 "test"' },
            { content: 'hello-world test', cursor: 12, key: 'b', desc: '按 b' },
            { content: 'hello-world test', cursor: 6, key: 'b', desc: 'b 停在 "world"' },
            { content: 'hello-world test', cursor: 6, key: 'b', desc: '按 b' },
            { content: 'hello-world test', cursor: 5, key: 'b', desc: 'b 停在 "-"' },
            { content: 'hello-world test', cursor: 15, desc: '重置，改用 B' },
            { content: 'hello-world test', cursor: 15, key: 'B', desc: '按 B' },
            { content: 'hello-world test', cursor: 12, key: 'B', desc: 'B 停在 "test"' },
            { content: 'hello-world test', cursor: 12, key: 'B', desc: '按 B' },
            { content: 'hello-world test', cursor: 0, key: 'B', desc: 'B 直接跳到 "hello"！' },
            { content: 'hello-world test', cursor: 0, desc: 'b 要 3 步 | B 只要 2 步' },
        ]
    },
    '1-10-0-vs-caret': {
        category: 'article1',
        title: '0 vs ^（行首差異）',
        keyPoint: '<code>0</code> = 絕對行首 | <code>^</code> = 跳過縮排',
        steps: [
            { content: '    indented line', cursor: 10, desc: '0 vs ^：都是移到行首，但...' },
            { content: '    indented line', cursor: 10, key: '0', desc: '按 0' },
            { content: '    indented line', cursor: 0, key: '0', desc: '0 移到第 0 格（包含空格）' },
            { content: '    indented line', cursor: 10, desc: '重置，改用 ^' },
            { content: '    indented line', cursor: 10, key: '^', desc: '按 ^' },
            { content: '    indented line', cursor: 4, key: '^', desc: '^ 移到第一個非空白字元' },
            { content: '    indented line', cursor: 4, desc: '0 = 絕對行首 | ^ = 跳過縮排' },
        ]
    },
    '1-11-dollar': {
        category: 'article1',
        title: '$ vs g_（行尾差異）',
        keyPoint: '<code>$</code> = 絕對行尾 | <code>g_</code> = 跳過尾部空白',
        steps: [
            { content: 'text with trailing    ', cursor: 0, desc: '$ vs g_：都是行尾，但...' },
            { content: 'text with trailing    ', cursor: 0, key: '$', desc: '按 $' },
            { content: 'text with trailing    ', cursor: 21, key: '$', desc: '$ 到最後一格（空格上）' },
            { content: 'text with trailing    ', cursor: 0, desc: '重置，改用 g_' },
            { content: 'text with trailing    ', cursor: 0, key: 'g_', desc: '按 g_' },
            { content: 'text with trailing    ', cursor: 17, key: 'g_', desc: 'g_ 到最後一個非空白字元' },
            { content: 'text with trailing    ', cursor: 17, desc: '$ = 絕對行尾 | g_ = 跳過尾部空白' },
        ]
    },
    '1-12-percent': {
        category: 'article1',
        title: '% - 成對符號跳轉',
        keyPoint: '<code>%</code> 支援 <code>()</code> <code>[]</code> <code>{}</code> 等成對符號',
        steps: [
            { content: 'if (x && (y || z))', cursor: 3, desc: '%：在成對符號間跳轉' },
            { content: 'if (x && (y || z))', cursor: 3, key: '%', desc: '游標在 (，按 %' },
            { content: 'if (x && (y || z))', cursor: 17, key: '%', desc: '跳到配對的 )' },
            { content: 'if (x && (y || z))', cursor: 17, key: '%', desc: '再按 %' },
            { content: 'if (x && (y || z))', cursor: 3, key: '%', desc: '跳回 (' },
            { content: 'if (x && (y || z))', cursor: 3, desc: '% 支援 () [] {} 等成對符號' },
        ]
    },

    // ========== Article 2: 編輯基礎 (15) ==========
    '2-01-i-vs-a': {
        category: 'article2',
        title: 'i vs a（插入位置）',
        keyPoint: '<code>i</code> = 游標前插入 | <code>a</code> = 游標後插入',
        steps: [
            { content: 'hello', cursor: 2, desc: 'i vs a：插入位置不同' },
            { content: 'hello', cursor: 2, key: 'i', desc: '按 i（insert）' },
            { content: 'hello', cursor: 2, mode: 'INSERT', desc: 'i：在游標「前」插入' },
            { content: 'heXllo', cursor: 3, mode: 'INSERT', desc: '輸入 X' },
            { content: 'hello', cursor: 2, mode: 'NORMAL', desc: '重置，改用 a' },
            { content: 'hello', cursor: 2, key: 'a', desc: '按 a（append）' },
            { content: 'hello', cursor: 3, mode: 'INSERT', desc: 'a：在游標「後」插入' },
            { content: 'helXlo', cursor: 4, mode: 'INSERT', desc: '輸入 X' },
            { content: 'helXlo', cursor: 4, desc: 'i = 前 | a = 後' },
        ]
    },
    '2-02-I-vs-A': {
        category: 'article2',
        title: 'I vs A（行首/行尾插入）',
        keyPoint: '<code>I</code> = 行首插入 | <code>A</code> = 行尾插入',
        steps: [
            { content: '    hello world', cursor: 8, desc: 'I vs A：行首/行尾插入' },
            { content: '    hello world', cursor: 8, key: 'I', desc: '按 I' },
            { content: '    hello world', cursor: 4, mode: 'INSERT', desc: 'I：跳到行首第一個非空白字元並插入' },
            { content: '    hello world', cursor: 8, mode: 'NORMAL', desc: '重置，改用 A' },
            { content: '    hello world', cursor: 8, key: 'A', desc: '按 A' },
            { content: '    hello world', cursor: 15, mode: 'INSERT', desc: 'A：跳到行尾並插入' },
            { content: '    hello world', cursor: 15, desc: 'I = 行首插入 | A = 行尾插入' },
        ]
    },
    '2-03-o-vs-O': {
        category: 'article2',
        title: 'o vs O（開新行）',
        keyPoint: '<code>o</code> = 下方新行 | <code>O</code> = 上方新行',
        steps: [
            { content: 'line above\ncurrent line\nline below', cursor: [1, 4], desc: 'o vs O：開新行' },
            { content: 'line above\ncurrent line\nline below', cursor: [1, 4], key: 'o', desc: '按 o' },
            { content: 'line above\ncurrent line\n\nline below', cursor: [2, 0], mode: 'INSERT', desc: 'o：在「下方」開新行' },
            { content: 'line above\ncurrent line\nline below', cursor: [1, 4], mode: 'NORMAL', desc: '重置，改用 O' },
            { content: 'line above\ncurrent line\nline below', cursor: [1, 4], key: 'O', desc: '按 O' },
            { content: 'line above\n\ncurrent line\nline below', cursor: [1, 0], mode: 'INSERT', desc: 'O：在「上方」開新行' },
            { content: 'line above\n\ncurrent line\nline below', cursor: [1, 0], desc: 'o = 下方新行 | O = 上方新行' },
        ]
    },
    '2-04-x-vs-X': {
        category: 'article2',
        title: 'x vs X（刪除方向）',
        keyPoint: '<code>x</code> = 刪游標下 | <code>X</code> = 刪游標前',
        steps: [
            { content: 'hello', cursor: 2, desc: 'x vs X：刪除方向不同' },
            { content: 'hello', cursor: 2, key: 'x', desc: '按 x' },
            { content: 'helo', cursor: 2, key: 'x', desc: 'x：刪除游標「下」的字元' },
            { content: 'hello', cursor: 2, desc: '重置，改用 X' },
            { content: 'hello', cursor: 2, key: 'X', desc: '按 X' },
            { content: 'hllo', cursor: 1, key: 'X', desc: 'X：刪除游標「前」的字元' },
            { content: 'hllo', cursor: 1, desc: 'x = 刪游標下 | X = 刪游標前' },
        ]
    },
    '2-05-D-vs-dd': {
        category: 'article2',
        title: 'D vs dd',
        keyPoint: '<code>D</code> = 刪到行尾 | <code>dd</code> = 刪整行',
        steps: [
            { content: 'keep this | delete rest', cursor: 10, desc: 'D vs dd' },
            { content: 'keep this | delete rest', cursor: 10, key: 'D', desc: '按 D（等同 d$）' },
            { content: 'keep this ', cursor: 9, key: 'D', desc: 'D：刪到行尾' },
            { content: 'keep this | delete rest', cursor: 10, desc: '重置，改用 dd' },
            { content: 'keep this | delete rest', cursor: 10, key: 'dd', desc: '按 dd' },
            { content: '', cursor: 0, key: 'dd', desc: 'dd：刪除整行' },
            { content: '', cursor: 0, desc: 'D = 刪到行尾 | dd = 刪整行' },
        ]
    },
    '2-06-s-vs-S': {
        category: 'article2',
        title: 's vs S',
        keyPoint: '<code>s</code> = 刪字元並插入 | <code>S</code> = 刪整行並插入',
        steps: [
            { content: 'hello world', cursor: 2, desc: 's vs S' },
            { content: 'hello world', cursor: 2, key: 's', desc: '按 s' },
            { content: 'helo world', cursor: 2, mode: 'INSERT', desc: 's：刪一個字元並插入' },
            { content: 'hello world', cursor: 2, mode: 'NORMAL', desc: '重置，改用 S' },
            { content: 'hello world', cursor: 2, key: 'S', desc: '按 S' },
            { content: '', cursor: 0, mode: 'INSERT', desc: 'S：刪整行並插入（同 cc）' },
            { content: '', cursor: 0, desc: 's = 刪字元 | S = 刪整行' },
        ]
    },
    '2-07-C-vs-cc': {
        category: 'article2',
        title: 'C vs cc',
        keyPoint: '<code>C</code> = 刪到行尾並插入 | <code>cc</code> = 刪整行並插入',
        steps: [
            { content: 'keep this | change rest', cursor: 10, desc: 'C vs cc' },
            { content: 'keep this | change rest', cursor: 10, key: 'C', desc: '按 C' },
            { content: 'keep this ', cursor: 10, mode: 'INSERT', desc: 'C：刪到行尾並插入' },
            { content: 'keep this | change rest', cursor: 10, mode: 'NORMAL', desc: '重置，改用 cc' },
            { content: 'keep this | change rest', cursor: 10, key: 'cc', desc: '按 cc' },
            { content: '', cursor: 0, mode: 'INSERT', desc: 'cc：刪整行並插入' },
            { content: '', cursor: 0, desc: 'C = 刪到行尾 | cc = 刪整行' },
        ]
    },
    '2-08-r': {
        category: 'article2',
        title: 'r - 取代字元',
        keyPoint: '<code>r</code>：保持在 Normal Mode，快速修正錯字',
        steps: [
            { content: 'hello warld', cursor: 7, desc: 'r：取代單一字元（不進入 Insert Mode）' },
            { content: 'hello warld', cursor: 7, key: 'r', desc: '按 r' },
            { content: 'hello warld', cursor: 7, key: 'ro', desc: '按 o' },
            { content: 'hello world', cursor: 7, key: 'ro', desc: '"a" 被取代成 "o"' },
            { content: 'hello world', cursor: 7, desc: 'r：保持在 Normal Mode，快速修正錯字' },
        ]
    },
    '2-09-u-CtrlR': {
        category: 'article2',
        title: 'u / Ctrl+r - 復原與重做',
        keyPoint: '<code>u</code> = 復原（undo）| <code>Ctrl+r</code> = 重做（redo）',
        steps: [
            { content: 'hello world', cursor: 0, desc: 'u / Ctrl+r：復原與重做' },
            { content: 'hello world', cursor: 0, key: 'dw', desc: '先按 dw 刪除 "hello "' },
            { content: 'world', cursor: 0, key: 'dw', desc: '"hello " 被刪除了' },
            { content: 'world', cursor: 0, key: 'u', desc: '按 u（undo）' },
            { content: 'hello world', cursor: 0, key: 'u', desc: '復原！"hello " 回來了' },
            { content: 'hello world', cursor: 0, key: 'Ctrl+r', desc: '按 Ctrl+r（redo）' },
            { content: 'world', cursor: 0, key: 'Ctrl+r', desc: '重做！又刪除了' },
            { content: 'world', cursor: 0, desc: 'u = 復原 | Ctrl+r = 重做' },
        ]
    },
    '2-10-yy': {
        category: 'article2',
        title: 'yy - 複製整行',
        keyPoint: '<code>yy</code> = 複製行 | <code>p</code> = 貼下方 | <code>P</code> = 貼上方',
        steps: [
            { content: 'line one\nline two\nline three', cursor: [1, 3], desc: 'yy：複製整行' },
            { content: 'line one\nline two\nline three', cursor: [1, 3], key: 'yy', desc: '按 yy（yank 整行）' },
            { content: 'line one\nline two\nline three', cursor: [1, 3], selection: [1, 0, 1, 7], selectionMode: 'line', desc: '整行被複製到寄存器' },
            { content: 'line one\nline two\nline three', cursor: [1, 3], key: 'p', desc: '按 p（paste）' },
            { content: 'line one\nline two\nline two\nline three', cursor: [2, 0], desc: 'p：在下方貼上整行' },
            { content: 'line one\nline two\nline three', cursor: [1, 3], desc: '重置，改用 P' },
            { content: 'line one\nline two\nline three', cursor: [1, 3], key: 'P', desc: '按 P（大寫）' },
            { content: 'line one\nline two\nline two\nline three', cursor: [1, 0], desc: 'P：在上方貼上整行' },
            { content: 'line one\nline two\nline three', cursor: [1, 3], desc: 'yy = 複製行 | p = 貼下方 | P = 貼上方' },
        ]
    },
    '2-11-p-vs-P': {
        category: 'article2',
        title: 'p vs P（貼上位置）',
        keyPoint: '<code>p</code> = 貼在游標後 | <code>P</code> = 貼在游標前',
        steps: [
            { content: 'hello', cursor: 2, desc: 'p vs P：貼上位置不同' },
            { content: 'hello', cursor: 2, key: 'yiw', desc: '先 yiw 複製 "hello"' },
            { content: 'hello', cursor: 2, key: 'p', desc: '按 p' },
            { content: 'helhellollo', cursor: 7, key: 'p', desc: 'p：貼在游標「後」' },
            { content: 'hello', cursor: 2, desc: '重置，改用 P' },
            { content: 'hello', cursor: 2, key: 'P', desc: '按 P' },
            { content: 'hehellollo', cursor: 6, key: 'P', desc: 'P：貼在游標「前」' },
            { content: 'hehellollo', cursor: 6, desc: 'p = 後 | P = 前' },
        ]
    },
    '2-12-J': {
        category: 'article2',
        title: 'J - 合併行',
        keyPoint: '<code>J</code> 常用於合併被斷開的句子',
        steps: [
            { content: 'first line\nsecond line', cursor: [0, 0], desc: 'J：合併下一行' },
            { content: 'first line\nsecond line', cursor: [0, 0], key: 'J', desc: '按 J' },
            { content: 'first line second line', cursor: 10, key: 'J', desc: '兩行合併，中間加空格' },
            { content: 'first line second line', cursor: 10, desc: 'J 常用於合併被斷開的句子' },
        ]
    },
    '2-13-tilde': {
        category: 'article2',
        title: '~ - 大小寫切換',
        keyPoint: '<code>~</code> = 逐字切換大小寫',
        steps: [
            { content: 'Hello World', cursor: 0, desc: '~ 大小寫轉換' },
            { content: 'Hello World', cursor: 0, key: '~', desc: '按 ~' },
            { content: 'hEllo World', cursor: 1, key: '~', desc: 'H→h, e→E' },
            { content: 'hELlo World', cursor: 2, key: '~', desc: '連按 ~' },
            { content: 'hELLo World', cursor: 3, key: '~', desc: '逐字轉換' },
            { content: 'hELLO World', cursor: 4, key: '~', desc: '' },
            { content: 'hELLO World', cursor: 5, desc: '~ = 切換大小寫' },
        ]
    },
    '2-14-gu-gU': {
        category: 'article2',
        title: 'gu / gU - 大小寫轉換',
        keyPoint: '<code>gu</code> = 轉小寫 | <code>gU</code> = 轉大寫',
        steps: [
            { content: 'Hello World', cursor: 0, desc: 'gu / gU：整批轉換大小寫' },
            { content: 'Hello World', cursor: 0, key: 'guiw', desc: '按 guiw（轉小寫）' },
            { content: 'hello World', cursor: 0, key: 'guiw', desc: '"Hello" → "hello"' },
            { content: 'hello World', cursor: 6, key: 'w', desc: '移到 World' },
            { content: 'hello World', cursor: 6, key: 'gUiw', desc: '按 gUiw（轉大寫）' },
            { content: 'hello WORLD', cursor: 6, key: 'gUiw', desc: '"World" → "WORLD"' },
            { content: 'hello WORLD', cursor: 6, desc: 'gu = 轉小寫 | gU = 轉大寫' },
        ]
    },
    '2-15-indent': {
        category: 'article2',
        title: '>> << - 縮排',
        keyPoint: '<code>&gt;&gt;</code> = 向右縮排 | <code>&lt;&lt;</code> = 向左縮排',
        steps: [
            { content: 'indented text', cursor: 0, desc: '>> / <<：縮排操作' },
            { content: 'indented text', cursor: 0, key: '>>', desc: '按 >>（向右縮排）' },
            { content: '    indented text', cursor: 4, key: '>>', desc: '整行向右縮排一層' },
            { content: '    indented text', cursor: 4, key: '>>', desc: '再按 >>' },
            { content: '        indented text', cursor: 8, key: '>>', desc: '再縮排一層' },
            { content: '        indented text', cursor: 8, key: '<<', desc: '按 <<（向左縮排）' },
            { content: '    indented text', cursor: 4, key: '<<', desc: '縮排減少一層' },
            { content: '    indented text', cursor: 4, desc: '>> = 向右縮排 | << = 向左縮排' },
        ]
    },

    // ========== Article 3: Visual Mode (4) ==========
    '3-01-v-char': {
        category: 'article3',
        title: 'v - 字元選取',
        keyPoint: '選取後可用 <code>d</code> 刪除、<code>y</code> 複製、<code>c</code> 修改',
        steps: [
            { content: 'select some text here', cursor: 7, desc: 'v：字元選取' },
            { content: 'select some text here', cursor: 7, key: 'v', mode: 'VISUAL', desc: '按 v 進入 Visual Mode' },
            { content: 'select some text here', cursor: 7, mode: 'VISUAL', selection: [7, 7], desc: '開始選取' },
            { content: 'select some text here', cursor: 11, key: 'e', mode: 'VISUAL', selection: [7, 10], desc: '按 e 選到 word 結尾' },
            { content: 'select some text here', cursor: 16, key: 'e', mode: 'VISUAL', selection: [7, 15], desc: '繼續按 e 擴展' },
            { content: 'select some text here', cursor: 16, key: 'd', mode: 'NORMAL', desc: '按 d 刪除選取' },
            { content: 'select here', cursor: 7, desc: '選取後可用 d/y/c 操作' },
        ]
    },
    '3-02-V-line': {
        category: 'article3',
        title: 'V - 整行選取',
        keyPoint: '<code>V</code> 選取以「行」為單位，不管游標在哪',
        steps: [
            { content: 'first line\nselect this\nthird line', cursor: [1, 3], desc: 'V：整行選取' },
            { content: 'first line\nselect this\nthird line', cursor: [1, 3], key: 'V', mode: 'VISUAL', desc: '按 V' },
            { content: 'first line\nselect this\nthird line', cursor: [1, 3], mode: 'VISUAL', selection: [1, 0, 1, 10], selectionMode: 'line', desc: '整行被選取（不管游標在哪）' },
            { content: 'first line\nselect this\nthird line', cursor: [2, 3], key: 'j', mode: 'VISUAL', selection: [1, 0, 2, 9], selectionMode: 'line', desc: '按 j 向下擴展選取' },
            { content: 'first line\nselect this\nthird line', cursor: [2, 3], mode: 'VISUAL', selection: [1, 0, 2, 9], selectionMode: 'line', desc: 'V 選取以「行」為單位' },
        ]
    },
    '3-03-Ctrl-v': {
        category: 'article3',
        title: 'Ctrl+v - 區塊選取',
        keyPoint: '<code>Ctrl+v</code> 區塊選取，常用於多行編輯',
        steps: [
            { content: 'line1 abc\nline2 def\nline3 ghi', cursor: [0, 6], desc: 'Ctrl+v：區塊（矩形）選取' },
            { content: 'line1 abc\nline2 def\nline3 ghi', cursor: [0, 6], key: 'Ctrl+v', mode: 'VISUAL', desc: '按 Ctrl+v' },
            { content: 'line1 abc\nline2 def\nline3 ghi', cursor: [0, 6], mode: 'VISUAL', selection: [0, 6, 0, 6], selectionMode: 'block', desc: '進入區塊選取模式' },
            { content: 'line1 abc\nline2 def\nline3 ghi', cursor: [0, 8], key: 'l', mode: 'VISUAL', selection: [0, 6, 0, 8], selectionMode: 'block', desc: '向右擴展' },
            { content: 'line1 abc\nline2 def\nline3 ghi', cursor: [1, 8], key: 'j', mode: 'VISUAL', selection: [0, 6, 1, 8], selectionMode: 'block', desc: '按 j 向下擴展矩形' },
            { content: 'line1 abc\nline2 def\nline3 ghi', cursor: [2, 8], key: 'j', mode: 'VISUAL', selection: [0, 6, 2, 8], selectionMode: 'block', desc: '矩形選取 3 行 × 3 欄' },
            { content: 'line1 abc\nline2 def\nline3 ghi', cursor: [2, 8], mode: 'VISUAL', selection: [0, 6, 2, 8], selectionMode: 'block', desc: 'Ctrl+v 常用於多行編輯' },
        ]
    },
    '3-04-gv': {
        category: 'article3',
        title: 'gv - 重新選取',
        keyPoint: '<code>gv</code>：快速重新選取上次的 Visual 範圍',
        steps: [
            { content: 'select this text here', cursor: 7, desc: 'gv：重新選取上次的範圍' },
            { content: 'select this text here', cursor: 7, key: 'v', mode: 'VISUAL', desc: '按 v 進入 Visual Mode' },
            { content: 'select this text here', cursor: 11, key: 'e', mode: 'VISUAL', selection: [7, 10], desc: '選取 "this"' },
            { content: 'select this text here', cursor: 11, key: 'U', mode: 'NORMAL', desc: '按 U 轉大寫' },
            { content: 'select THIS text here', cursor: 7, desc: '"this" 變成 "THIS"' },
            { content: 'select THIS text here', cursor: 7, key: 'gv', mode: 'VISUAL', desc: '按 gv' },
            { content: 'select THIS text here', cursor: 11, mode: 'VISUAL', selection: [7, 10], desc: '重新選取同一範圍！' },
            { content: 'select THIS text here', cursor: 11, desc: 'gv：快速重選上次的 Visual 範圍' },
        ]
    },

    // ========== Article 4: 語法系統 (10) ==========
    '4-01-d-motion': {
        category: 'article4',
        title: 'd + motion（刪除到哪裡）',
        keyPoint: '<code>d</code> + 數字 + 移動 = 刪除 N 個',
        steps: [
            { content: 'delete some words here', cursor: 0, desc: 'd + 移動 = 刪除到那裡' },
            { content: 'delete some words here', cursor: 0, key: 'dw', desc: '按 dw（刪除一個 word）' },
            { content: 'some words here', cursor: 0, key: 'dw', desc: '"delete " 被刪除' },
            { content: 'some words here', cursor: 0, key: 'd2w', desc: '按 d2w（刪除 2 個 word）' },
            { content: 'here', cursor: 0, key: 'd2w', desc: '"some words " 被刪除' },
            { content: 'here', cursor: 0, desc: 'd + 數字 + 移動 = 刪除 N 個' },
        ]
    },
    '4-02-c-motion': {
        category: 'article4',
        title: 'c + motion（修改）',
        keyPoint: '<code>c</code> = <code>d</code> + <code>i</code>（刪除 + 插入）',
        steps: [
            { content: 'change this word', cursor: 7, desc: 'c + 移動 = 刪除並進入 Insert Mode' },
            { content: 'change this word', cursor: 7, key: 'cw', desc: '按 cw' },
            { content: 'change  word', cursor: 7, mode: 'INSERT', desc: '"this" 被刪，進入 Insert Mode' },
            { content: 'change that word', cursor: 11, mode: 'INSERT', desc: '輸入 "that"' },
            { content: 'change that word', cursor: 10, mode: 'NORMAL', desc: 'c = d + i（刪除 + 插入）' },
        ]
    },
    '4-03-y-motion': {
        category: 'article4',
        title: 'y + motion（複製）',
        keyPoint: '<code>y</code> = 複製（yank）| <code>p</code> = 貼上（paste）',
        steps: [
            { content: 'copy this word', cursor: 5, desc: 'y + 移動 = 複製' },
            { content: 'copy this word', cursor: 5, key: 'yw', desc: '按 yw（yank word）' },
            { content: 'copy this word', cursor: 5, key: 'yw', desc: '"this" 被複製到預設寄存器' },
            { content: 'copy this word', cursor: 5, key: '$', desc: '移到行尾' },
            { content: 'copy this word', cursor: 13, key: 'p', desc: '按 p（paste）' },
            { content: 'copy this wordthis', cursor: 17, key: 'p', desc: '貼在游標後' },
            { content: 'copy this wordthis', cursor: 17, desc: 'y = 複製 | p = 貼上' },
        ]
    },
    '4-04-iw-vs-aw': {
        category: 'article4',
        title: 'iw vs aw',
        keyPoint: '<code>i</code> = inner（裡面）| <code>a</code> = around（周圍）',
        steps: [
            { content: 'hello world test', cursor: 8, desc: 'iw vs aw：內部 vs 周圍' },
            { content: 'hello world test', cursor: 8, key: 'diw', desc: '按 diw（delete inner word）' },
            { content: 'hello  test', cursor: 6, key: 'diw', desc: 'diw：只刪單字，留下 2 個空格' },
            { content: 'hello world test', cursor: 8, desc: '重置，改用 daw' },
            { content: 'hello world test', cursor: 8, key: 'daw', desc: '按 daw（delete a word）' },
            { content: 'hello test', cursor: 6, key: 'daw', desc: 'daw：刪單字 + 旁邊的空格' },
            { content: 'hello test', cursor: 6, desc: 'i = inner（裡面）| a = around（周圍）' },
        ]
    },
    '4-05-i-quote-vs-a-quote': {
        category: 'article4',
        title: 'i" vs a"',
        keyPoint: '<code>i"</code> = 保留引號 | <code>a"</code> = 含引號一起刪',
        steps: [
            { content: 'say "hello world" here', cursor: 10, desc: 'i" vs a"：引號內 vs 含引號' },
            { content: 'say "hello world" here', cursor: 10, key: 'di"', desc: '按 di"' },
            { content: 'say "" here', cursor: 5, key: 'di"', desc: 'di"：只刪引號內的內容' },
            { content: 'say "hello world" here', cursor: 10, desc: '重置，改用 da"' },
            { content: 'say "hello world" here', cursor: 10, key: 'da"', desc: '按 da"' },
            { content: 'say  here', cursor: 4, key: 'da"', desc: 'da"：連引號一起刪' },
            { content: 'say  here', cursor: 4, desc: 'i" = 保留引號 | a" = 含引號' },
        ]
    },
    '4-06-ib-vs-ab': {
        category: 'article4',
        title: 'ib vs ab（括號）',
        keyPoint: '<code>ib</code>/<code>ab</code> 操作括號，<code>b</code> = <code>()</code> | <code>B</code> = <code>{}</code>',
        steps: [
            { content: 'func(arg1, arg2)', cursor: 8, desc: 'ib vs ab：括號內 vs 含括號' },
            { content: 'func(arg1, arg2)', cursor: 8, key: 'dib', desc: '按 dib（或 di(）' },
            { content: 'func()', cursor: 5, key: 'dib', desc: 'dib：只刪括號內' },
            { content: 'func(arg1, arg2)', cursor: 8, desc: '重置，改用 dab' },
            { content: 'func(arg1, arg2)', cursor: 8, key: 'dab', desc: '按 dab（或 da(）' },
            { content: 'func', cursor: 3, key: 'dab', desc: 'dab：連括號一起刪' },
            { content: 'func', cursor: 3, desc: 'b = () | B = {}' },
        ]
    },
    '4-07-it-vs-at': {
        category: 'article4',
        title: 'it vs at（HTML 標籤）',
        keyPoint: '<code>t</code> = tag，操作 HTML/XML 標籤內容',
        steps: [
            { content: '<div>content</div>', cursor: 7, desc: 'it vs at：標籤內 vs 含標籤' },
            { content: '<div>content</div>', cursor: 7, key: 'dit', desc: '按 dit' },
            { content: '<div></div>', cursor: 5, key: 'dit', desc: 'dit：只刪標籤內容' },
            { content: '<div>content</div>', cursor: 7, desc: '重置，改用 dat' },
            { content: '<div>content</div>', cursor: 7, key: 'dat', desc: '按 dat' },
            { content: '', cursor: 0, key: 'dat', desc: 'dat：連標籤一起刪' },
            { content: '', cursor: 0, desc: 't = tag（HTML/XML 標籤）' },
        ]
    },
    '4-08-ci-quote-practical': {
        category: 'article4',
        title: 'ci" 實用範例',
        keyPoint: '<code>ci"</code> 游標在引號內任意位置都可以，不需要精確選取',
        steps: [
            { content: 'name = "John Doe"', cursor: 12, desc: 'ci" 實用範例：修改字串內容' },
            { content: 'name = "John Doe"', cursor: 12, key: 'ci"', desc: '游標在引號內任意位置，按 ci"' },
            { content: 'name = ""', cursor: 8, mode: 'INSERT', desc: '引號內容清空，準備輸入新內容' },
            { content: 'name = "Jane Smith"', cursor: 18, mode: 'INSERT', desc: '輸入新的名字' },
            { content: 'name = "Jane Smith"', cursor: 17, mode: 'NORMAL', desc: '完成！不需要精確選取' },
        ]
    },
    '4-09-dw-diw-daw': {
        category: 'article4',
        title: 'dw vs diw vs daw',
        keyPoint: '<code>dw</code> ≈ <code>daw</code> | <code>diw</code> = 只刪字本身',
        steps: [
            { content: 'hello world test', cursor: 6, desc: 'dw vs diw vs daw：三種刪除比較' },
            { content: 'hello world test', cursor: 6, key: 'dw', desc: '按 dw' },
            { content: 'hello test', cursor: 6, key: 'dw', desc: 'dw：刪到下個 word 開頭（含尾部空格）' },
            { content: 'hello world test', cursor: 6, desc: '重置，改用 diw' },
            { content: 'hello world test', cursor: 6, key: 'diw', desc: '按 diw' },
            { content: 'hello  test', cursor: 6, key: 'diw', desc: 'diw：只刪單字本身（留下空格）' },
            { content: 'hello world test', cursor: 6, desc: '重置，改用 daw' },
            { content: 'hello world test', cursor: 6, key: 'daw', desc: '按 daw' },
            { content: 'hello test', cursor: 6, key: 'daw', desc: 'daw：刪單字 + 周圍空格' },
            { content: 'hello test', cursor: 6, desc: 'dw ≈ daw | diw = 只刪字' },
        ]
    },
    '4-10-number-motion': {
        category: 'article4',
        title: '數字 + 動作',
        keyPoint: '數字可以和大部分指令組合：<code>3w</code>、<code>2b</code>、<code>d3w</code>',
        steps: [
            { content: 'one two three four five six', cursor: 0, desc: '數字 + 動作 = 重複 N 次' },
            { content: 'one two three four five six', cursor: 0, key: '3w', desc: '按 3w' },
            { content: 'one two three four five six', cursor: 14, key: '3w', desc: '一次移動 3 個 word' },
            { content: 'one two three four five six', cursor: 14, key: '2b', desc: '按 2b' },
            { content: 'one two three four five six', cursor: 4, key: '2b', desc: '往回 2 個 word' },
            { content: 'one two three four five six', cursor: 4, key: 'd3w', desc: '按 d3w' },
            { content: 'one five six', cursor: 4, key: 'd3w', desc: '刪除 3 個 word' },
            { content: 'one five six', cursor: 4, desc: '數字可以和大部分指令組合' },
        ]
    },

    // ========== Article 5: 搜尋技巧 (8) ==========
    '5-01-f': {
        category: 'article5',
        title: 'f - 向後搜尋（停在字元上）',
        keyPoint: '<code>f</code> = 停在字元上 | <code>;</code> = 下一個',
        steps: [
            { content: 'find the first f here', cursor: 0, desc: 'f 搜尋：向後找，停在字元上' },
            { content: 'find the first f here', cursor: 0, key: 'f', desc: '按 f' },
            { content: 'find the first f here', cursor: 0, key: 'ft', desc: '搜尋 "t"' },
            { content: 'find the first f here', cursor: 5, key: 'ft', desc: '停在第一個 "t" 上' },
            { content: 'find the first f here', cursor: 5, key: ';', desc: '按 ; 找下一個' },
            { content: 'find the first f here', cursor: 10, key: ';', desc: '停在第二個 "t"（first 的 t）' },
            { content: 'find the first f here', cursor: 10, desc: 'f = 停在字元上 | ; = 下一個' },
        ]
    },
    '5-02-t': {
        category: 'article5',
        title: 't - 向後搜尋（停在字元前）',
        keyPoint: '<code>t</code> = till，停在字元「前」一格',
        steps: [
            { content: 'find the first f here', cursor: 0, desc: 't 搜尋：向後找，停在字元「前」' },
            { content: 'find the first f here', cursor: 0, key: 't', desc: '按 t' },
            { content: 'find the first f here', cursor: 0, key: 'tt', desc: '搜尋 "t"' },
            { content: 'find the first f here', cursor: 4, key: 'tt', desc: '停在 "t" 的前一格（空格上）' },
            { content: 'find the first f here', cursor: 4, key: ';', desc: '按 ; 找下一個' },
            { content: 'find the first f here', cursor: 9, key: ';', desc: '停在 "first" 的 t 前一格' },
            { content: 'find the first f here', cursor: 9, desc: 't = 停在字元「前」' },
        ]
    },
    '5-03-f-vs-t': {
        category: 'article5',
        title: 'f vs t（停的位置不同）',
        keyPoint: '<code>dt(</code> 刪到 <code>(</code> 之前，保留括號；<code>df(</code> 則連括號一起刪',
        steps: [
            { content: 'delete(this)', cursor: 0, desc: 'f vs t 比較：停的位置不同' },
            { content: 'delete(this)', cursor: 0, key: 'f(', desc: '按 f(' },
            { content: 'delete(this)', cursor: 6, key: 'f(', desc: 'f( 停在 "(" 上' },
            { content: 'delete(this)', cursor: 0, desc: '重置，改用 t' },
            { content: 'delete(this)', cursor: 0, key: 't(', desc: '按 t(' },
            { content: 'delete(this)', cursor: 5, key: 't(', desc: 't( 停在 "(" 前一格（e 上）' },
            { content: 'delete(this)', cursor: 5, desc: '技巧：dt( 可以刪到 ( 之前' },
            { content: '(this)', cursor: 0, key: 'dt(', desc: 'dt( 結果：只留下 (this)' },
            { content: '(this)', cursor: 0, desc: 't 常用於「刪到某字元之前」' },
        ]
    },
    '5-04-F-T': {
        category: 'article5',
        title: 'F/T - 向前搜尋',
        keyPoint: '<code>F</code>/<code>T</code> = 向前搜尋 | <code>;</code> = 同向 | <code>,</code> = 反向',
        steps: [
            { content: 'search backward here', cursor: 19, desc: 'F/T：大寫 = 向前（往左）搜尋' },
            { content: 'search backward here', cursor: 19, key: 'Fa', desc: '按 Fa（向前找 a）' },
            { content: 'search backward here', cursor: 11, key: 'Fa', desc: '往左找到 "backward" 的 a' },
            { content: 'search backward here', cursor: 11, key: ';', desc: '按 ; 繼續向前' },
            { content: 'search backward here', cursor: 8, key: ';', desc: '找到 "backward" 的第一個 a' },
            { content: 'search backward here', cursor: 8, key: ',', desc: '按 , 反向（變向後）' },
            { content: 'search backward here', cursor: 11, key: ',', desc: '回到剛才那個 a' },
            { content: 'search backward here', cursor: 11, desc: 'F/T = 向前 | ; = 同向 | , = 反向' },
        ]
    },
    '5-05-number-f': {
        category: 'article5',
        title: '數字 + f（找第 N 個）',
        keyPoint: '數字 + <code>f</code>：直接跳到第 N 個匹配，少按很多 <code>;</code>',
        steps: [
            { content: 'a b c d e f g', cursor: 0, desc: '數字 + f：找第 N 個' },
            { content: 'a b c d e f g', cursor: 0, key: '3f␣', desc: '按 3f空格（找第 3 個空格）' },
            { content: 'a b c d e f g', cursor: 5, key: '3f␣', desc: '直接跳到第 3 個空格' },
            { content: 'a b c d e f g', cursor: 5, key: '2f␣', desc: '按 2f空格' },
            { content: 'a b c d e f g', cursor: 9, key: '2f␣', desc: '再跳 2 個空格' },
            { content: 'a b c d e f g', cursor: 9, desc: '數字前綴可以少按很多 ;' },
        ]
    },
    '5-06-semicolon-comma': {
        category: 'article5',
        title: '; / , - 重複搜尋',
        keyPoint: '<code>;</code> = 同方向重複 | <code>,</code> = 反方向重複',
        steps: [
            { content: 'the cat sat on the mat', cursor: 0, desc: '; / ,：重複上次的 f/t 搜尋' },
            { content: 'the cat sat on the mat', cursor: 0, key: 'ft', desc: '按 ft（找 "t"）' },
            { content: 'the cat sat on the mat', cursor: 0, key: 'ft', desc: '找到第一個 "t"' },
            { content: 'the cat sat on the mat', cursor: 4, key: ';', desc: '按 ;（重複同方向搜尋）' },
            { content: 'the cat sat on the mat', cursor: 8, key: ';', desc: '找到 "sat" 的 t' },
            { content: 'the cat sat on the mat', cursor: 8, key: ';', desc: '再按 ;' },
            { content: 'the cat sat on the mat', cursor: 14, key: ';', desc: '找到 "the" 的 t' },
            { content: 'the cat sat on the mat', cursor: 14, key: ',', desc: '按 ,（反方向搜尋）' },
            { content: 'the cat sat on the mat', cursor: 8, key: ',', desc: '回到 "sat" 的 t' },
            { content: 'the cat sat on the mat', cursor: 8, desc: '; = 同方向重複 | , = 反方向重複' },
        ]
    },
    '5-07-star-hash': {
        category: 'article5',
        title: '* / # - 游標字搜尋',
        keyPoint: '<code>*</code> = 向後搜尋游標字 | <code>#</code> = 向前搜尋游標字',
        steps: [
            { content: 'foo bar foo baz foo', cursor: 0, desc: '* / #：搜尋游標所在的字' },
            { content: 'foo bar foo baz foo', cursor: 0, key: '*', desc: '游標在 "foo"，按 *' },
            { content: 'foo bar foo baz foo', cursor: 8, key: '*', desc: '* 向後跳到下一個 "foo"' },
            { content: 'foo bar foo baz foo', cursor: 8, key: '*', desc: '再按 *' },
            { content: 'foo bar foo baz foo', cursor: 16, key: '*', desc: '跳到第三個 "foo"' },
            { content: 'foo bar foo baz foo', cursor: 16, key: '#', desc: '按 #（向前搜尋）' },
            { content: 'foo bar foo baz foo', cursor: 8, key: '#', desc: '# 向前跳回上一個 "foo"' },
            { content: 'foo bar foo baz foo', cursor: 8, desc: '* = 向後找同字 | # = 向前找同字' },
        ]
    },
    '5-08-slash-search': {
        category: 'article5',
        title: '/ - 多行搜尋（搭配 n / N）',
        keyPoint: '<code>/關鍵字</code> = 全文搜尋 | <code>n</code> = 下一個 | <code>N</code> = 上一個',
        steps: [
            { content: 'const user = findUser()\nconst order = findOrder()\nconst log = findLog()', cursor: [0, 0], desc: '/：跨整個檔案搜尋關鍵字', statusLeft: '-- NORMAL --' },
            { content: 'const user = findUser()\nconst order = findOrder()\nconst log = findLog()', cursor: [0, 0], key: '/', desc: '按 / 進入搜尋模式', statusLeft: '/' },
            { content: 'const user = findUser()\nconst order = findOrder()\nconst log = findLog()', cursor: [0, 0], key: '/find', desc: '輸入 find 後按 Enter', statusLeft: '/find' },
            { content: 'const user = findUser()\nconst order = findOrder()\nconst log = findLog()', cursor: [0, 13], key: '/find', desc: '跳到第 1 行的 find', statusLeft: '/find', statusRight: 'match 1/3' },
            { content: 'const user = findUser()\nconst order = findOrder()\nconst log = findLog()', cursor: [0, 13], key: 'n', desc: '按 n 找下一個結果', statusLeft: '/find', statusRight: 'match 1/3' },
            { content: 'const user = findUser()\nconst order = findOrder()\nconst log = findLog()', cursor: [1, 14], key: 'n', desc: '跳到第 2 行的 find', statusLeft: '/find', statusRight: 'match 2/3' },
            { content: 'const user = findUser()\nconst order = findOrder()\nconst log = findLog()', cursor: [1, 14], key: 'n', desc: '再按 n', statusLeft: '/find', statusRight: 'match 2/3' },
            { content: 'const user = findUser()\nconst order = findOrder()\nconst log = findLog()', cursor: [2, 12], key: 'n', desc: '跳到第 3 行的 find', statusLeft: '/find', statusRight: 'match 3/3' },
            { content: 'const user = findUser()\nconst order = findOrder()\nconst log = findLog()', cursor: [2, 12], key: 'N', desc: '按 N 反方向回上一個', statusLeft: '/find', statusRight: 'match 3/3' },
            { content: 'const user = findUser()\nconst order = findOrder()\nconst log = findLog()', cursor: [1, 14], key: 'N', desc: '回到第 2 行的 find', statusLeft: '/find', statusRight: 'match 2/3' },
            { content: 'const user = findUser()\nconst order = findOrder()\nconst log = findLog()', cursor: [1, 14], desc: '/ = 全文搜尋 | n = 下一個 | N = 上一個', statusLeft: '-- NORMAL --' },
        ]
    },

    // ========== Article 6: 效率倍增 (5) ==========
    '6-01-dot': {
        category: 'article6',
        title: '. - 重複上一個動作',
        keyPoint: '<code>.</code> 是 Vim 最強大的功能，讓編輯動作可重複使用',
        steps: [
            { content: 'foo bar foo bar foo', cursor: 0, desc: '. 重複：Vim 最強大的功能' },
            { content: 'foo bar foo bar foo', cursor: 0, key: 'ciwbaz', desc: '用 ciw 把 "foo" 改成 "baz"' },
            { content: 'baz bar foo bar foo', cursor: 2, mode: 'INSERT', desc: '輸入 "baz"' },
            { content: 'baz bar foo bar foo', cursor: 2, key: 'Esc', mode: 'NORMAL', desc: '按 Esc' },
            { content: 'baz bar foo bar foo', cursor: 8, key: 'n', desc: '用 * 或 n 找下一個 foo' },
            { content: 'baz bar foo bar foo', cursor: 8, key: '.', desc: '按 . 重複上次修改' },
            { content: 'baz bar baz bar foo', cursor: 10, key: '.', desc: '自動把 "foo" 改成 "baz"！' },
            { content: 'baz bar baz bar foo', cursor: 16, key: 'n.', desc: '繼續 n.（找下一個+重複）' },
            { content: 'baz bar baz bar baz', cursor: 18, key: 'n.', desc: '全部改完！' },
            { content: 'baz bar baz bar baz', cursor: 18, desc: '. 讓編輯動作可重複使用' },
        ]
    },
    '6-02-register': {
        category: 'article6',
        title: '寄存器（多個剪貼簿）',
        keyPoint: '<code>"X</code> = 指定寄存器（a-z），相當於多個剪貼簿',
        steps: [
            { content: 'save to register a', cursor: 0, desc: '寄存器：多個剪貼簿' },
            { content: 'save to register a', cursor: 0, key: '"ayiw', desc: '按 "ayiw（複製到寄存器 a）' },
            { content: 'save to register a', cursor: 0, key: '"ayiw', desc: '"save" 存到寄存器 a' },
            { content: 'save to register a', cursor: 0, key: 'w', desc: '移動到其他位置' },
            { content: 'save to register a', cursor: 8, key: '"ap', desc: '按 "ap（從寄存器 a 貼上）' },
            { content: 'save to saveregsiter a', cursor: 11, key: '"ap', desc: '從寄存器 a 貼上' },
            { content: 'save to saveregsiter a', cursor: 11, desc: '"X = 指定寄存器（a-z）' },
        ]
    },
    '6-03-register-0': {
        category: 'article6',
        title: '"0 寄存器',
        keyPoint: '<code>"0</code> = 最近複製的內容 | <code>""</code> = 最近操作的內容',
        steps: [
            { content: 'important text delete', cursor: 10, desc: '"0 寄存器：解決複製貼上問題' },
            { content: 'important text delete', cursor: 0, key: 'yiw', desc: '先複製 "important"' },
            { content: 'important text delete', cursor: 10, key: 'w..', desc: '移到 "delete"' },
            { content: 'important text delete', cursor: 15, key: 'dw', desc: '刪除 "delete"' },
            { content: 'important text ', cursor: 15, key: 'p', desc: '按 p... 糟糕！' },
            { content: 'important text delete', cursor: 20, key: 'p', desc: 'p 貼的是剛刪除的 "delete"！' },
            { content: 'important text ', cursor: 15, desc: '解決方案：用 "0p' },
            { content: 'important text ', cursor: 15, key: '"0p', desc: '"0p = 貼最近複製的內容' },
            { content: 'important text important', cursor: 23, key: '"0p', desc: '成功貼上 "important"！' },
            { content: 'important text important', cursor: 23, desc: '"0 = 最近 yank | "" = 最近操作' },
        ]
    },
    '6-04-Ctrl-a-x': {
        category: 'article6',
        title: 'Ctrl+a/x - 數字加減',
        keyPoint: '<code>Ctrl+a</code> = 數字加 | <code>Ctrl+x</code> = 數字減',
        steps: [
            { content: 'count = 10', cursor: 8, desc: 'Ctrl+a / Ctrl+x：數字加減' },
            { content: 'count = 10', cursor: 8, key: 'Ctrl+a', desc: '按 Ctrl+a' },
            { content: 'count = 11', cursor: 9, key: 'Ctrl+a', desc: '10 → 11（+1）' },
            { content: 'count = 11', cursor: 9, key: '5Ctrl+a', desc: '按 5Ctrl+a' },
            { content: 'count = 16', cursor: 9, key: '5Ctrl+a', desc: '11 → 16（+5）' },
            { content: 'count = 16', cursor: 9, key: 'Ctrl+x', desc: '按 Ctrl+x' },
            { content: 'count = 15', cursor: 9, key: 'Ctrl+x', desc: '16 → 15（-1）' },
            { content: 'count = 15', cursor: 9, desc: 'Ctrl+a = 加 | Ctrl+x = 減' },
        ]
    },
    '6-05-macro': {
        category: 'article6',
        title: 'Macro - 錄製與播放',
        keyPoint: '<code>qa</code> 錄製 → <code>q</code> 停止 → <code>@a</code> 播放 → <code>@@</code> 重播',
        steps: [
            { content: 'item: hello', cursor: 0, desc: 'Macro：錄製與播放巨集' },
            { content: 'item: hello', cursor: 0, key: 'qa', desc: '按 qa（開始錄製到寄存器 a）' },
            { content: 'item: hello', cursor: 0, key: '錄製中', desc: '狀態列顯示 recording @a' },
            { content: 'item: hello', cursor: 0, key: '0f:lldw', desc: '執行編輯：0f:lldw' },
            { content: 'item: ', cursor: 6, key: '錄製中', desc: '刪除了 "hello"' },
            { content: 'item: ', cursor: 6, key: 'q', desc: '按 q 停止錄製' },
            { content: 'item: ', cursor: 6, desc: '巨集已存到寄存器 a' },
            { content: 'item: ', cursor: 6, key: '@a', desc: '按 @a 播放巨集' },
            { content: 'item: ', cursor: 6, key: '@a', desc: '對下一行執行相同操作' },
            { content: 'item: ', cursor: 6, desc: 'qa 錄 → q 停 → @a 播 → @@ 重播' },
        ]
    },
    '3-05-ggVG': {
        category: 'article3',
        title: 'ggVG - 全選整個檔案',
        keyPoint: '<code>gg</code> 到檔首 → <code>V</code> 行選取 → <code>G</code> 到檔尾',
        steps: [
            { content: 'alpha one\nbeta two\ngamma three\ndelta four', cursor: [1, 2], desc: 'ggVG：快速選取整個檔案' },
            { content: 'alpha one\nbeta two\ngamma three\ndelta four', cursor: [1, 2], key: 'gg', desc: '先按 gg 到檔案開頭' },
            { content: 'alpha one\nbeta two\ngamma three\ndelta four', cursor: [0, 0], key: 'gg', desc: '游標到第一行' },
            { content: 'alpha one\nbeta two\ngamma three\ndelta four', cursor: [0, 0], key: 'V', mode: 'VISUAL', selection: [0, 0, 0, 8], selectionMode: 'line', desc: '按 V 進入行選取' },
            { content: 'alpha one\nbeta two\ngamma three\ndelta four', cursor: [3, 0], key: 'G', mode: 'VISUAL', selection: [0, 0, 3, 9], selectionMode: 'line', desc: '再按 G，選到檔案結尾' },
            { content: 'alpha one\nbeta two\ngamma three\ndelta four', cursor: [3, 0], key: 'y', desc: '按 y 可一次複製整份內容' },
            { content: 'alpha one\nbeta two\ngamma three\ndelta four', cursor: [3, 0], desc: 'ggVG = 全選（最常見組合）' },
        ]
    },
    '3-06-v-percent': {
        category: 'article3',
        title: 'v% - 選取到配對符號',
        keyPoint: '<code>v%</code>：進入 Visual 後直接跳到配對括號',
        steps: [
            { content: 'call(foo(bar))', cursor: 8, desc: 'v%：快速選到配對括號範圍' },
            { content: 'call(foo(bar))', cursor: 8, key: 'v', mode: 'VISUAL', selection: [8, 8], desc: '按 v 開始選取' },
            { content: 'call(foo(bar))', cursor: 12, key: '%', mode: 'VISUAL', selection: [8, 12], desc: '按 % 跳到配對 )，範圍自動選好' },
            { content: 'call(foo(bar))', cursor: 8, key: 'd', desc: '按 d 刪除整段括號內容' },
            { content: 'call(foo)', cursor: 8, desc: '完成：內層 (bar) 被刪除' },
            { content: 'call(foo)', cursor: 8, desc: 'v% 很適合操作括號包住的區塊' },
        ]
    },
    '3-07-visual-o': {
        category: 'article3',
        title: 'Visual o - 切換選取端點',
        keyPoint: '<code>o</code> 可在 Visual Mode 中切換游標到另一端',
        steps: [
            { content: 'select middle text', cursor: 7, desc: 'Visual o：切換選取的另一端' },
            { content: 'select middle text', cursor: 7, key: 'v', mode: 'VISUAL', selection: [7, 7], desc: '按 v 開始選取' },
            { content: 'select middle text', cursor: 12, key: 'e', mode: 'VISUAL', selection: [7, 12], desc: '向右擴展，選到 "middle"' },
            { content: 'select middle text', cursor: 7, key: 'o', mode: 'VISUAL', selection: [7, 12], desc: '按 o，游標切到選取另一端' },
            { content: 'select middle text', cursor: 8, key: 'l', mode: 'VISUAL', selection: [8, 12], desc: '從左端微調範圍（排除 m）' },
            { content: 'select middle text', cursor: 8, key: 'y', desc: '按 y 複製修正後的範圍' },
            { content: 'select middle text', cursor: 8, desc: 'o 可快速修正選取邊界，不用重選' },
        ]
    },
    '3-08-block-I-A': {
        category: 'article3',
        title: 'Block I/A - 多行批次插入',
        keyPoint: '<code>I</code> 左側批次插入 | <code>A</code> 右側批次插入',
        steps: [
            { content: 'cat\ndog\npig', cursor: [0, 0], desc: 'Block I / A：多行同時插入' },
            { content: 'cat\ndog\npig', cursor: [0, 0], key: 'Ctrl+v', mode: 'VISUAL', selection: [0, 0, 0, 0], selectionMode: 'block', desc: '先用 Ctrl+v 進入區塊選取' },
            { content: 'cat\ndog\npig', cursor: [2, 0], key: '2j', mode: 'VISUAL', selection: [0, 0, 2, 0], selectionMode: 'block', desc: '選取三行第一欄' },
            { content: 'cat\ndog\npig', cursor: [0, 0], key: 'I> ', mode: 'INSERT', selection: [0, 0, 2, 0], selectionMode: 'block', desc: '按 I 輸入前綴 > ' },
            { content: '> cat\n> dog\n> pig', cursor: [0, 2], key: 'Esc', desc: '按 Esc，一次套用到所有行（左側）' },
            { content: 'cat\ndog\npig', cursor: [0, 2], desc: '重置，改示範 A（右側）' },
            { content: 'cat\ndog\npig', cursor: [0, 2], key: 'Ctrl+v', mode: 'VISUAL', selection: [0, 2, 0, 2], selectionMode: 'block', desc: '再次區塊選取行尾欄位' },
            { content: 'cat\ndog\npig', cursor: [2, 2], key: '2j', mode: 'VISUAL', selection: [0, 2, 2, 2], selectionMode: 'block', desc: '向下選滿三行' },
            { content: 'cat\ndog\npig', cursor: [0, 2], key: 'A,', mode: 'INSERT', selection: [0, 2, 2, 2], selectionMode: 'block', desc: '按 A 輸入後綴 ,' },
            { content: 'cat,\ndog,\npig,', cursor: [0, 3], key: 'Esc', desc: 'Esc 後三行同時加上後綴（右側）' },
            { content: 'cat,\ndog,\npig,', cursor: [0, 3], desc: 'I/A 能快速完成多行欄位補字' },
        ]
    },
    '4-11-3dd-vs-d3j': {
        category: 'article4',
        title: '3dd vs d3j',
        keyPoint: '<code>3dd</code> 刪 3 行；<code>d3j</code> 刪 4 行（含當前行）',
        steps: [
            { content: 'aaa\nbbb\nccc\nddd\neee\nfff', cursor: [1, 0], desc: '3dd vs d3j：看起來像，結果不同' },
            { content: 'aaa\nbbb\nccc\nddd\neee\nfff', cursor: [1, 0], key: '3dd', desc: '按 3dd（重複 dd 三次）' },
            { content: 'aaa\neee\nfff', cursor: [1, 0], key: '3dd', desc: '刪除 bbb/ccc/ddd（共 3 行）' },
            { content: 'aaa\nbbb\nccc\nddd\neee\nfff', cursor: [1, 0], desc: '重置，改用 d3j' },
            { content: 'aaa\nbbb\nccc\nddd\neee\nfff', cursor: [1, 0], key: 'd3j', desc: '按 d3j（刪到往下 3 行）' },
            { content: 'aaa\nfff', cursor: [1, 0], key: 'd3j', desc: '刪除 bbb/ccc/ddd/eee（共 4 行）' },
            { content: 'aaa\nfff', cursor: [1, 0], desc: '差異關鍵：motion 會包含目前行' },
        ]
    },
    '5-09-d-search-pattern': {
        category: 'article5',
        title: 'd/pattern - 搜尋搭配刪除',
        keyPoint: '<code>d/return</code>：刪到搜尋結果之前，可跨行',
        steps: [
            { content: 'function hello() {\n  console.log(\"hello\");\n  return \"hello world\";\n}', cursor: [0, 0], desc: 'd/pattern：刪除到搜尋結果之前（可跨行）', statusLeft: '-- NORMAL --' },
            { content: 'function hello() {\n  console.log(\"hello\");\n  return \"hello world\";\n}', cursor: [0, 0], key: 'd', desc: '先按 d（等待範圍）', statusLeft: 'd' },
            { content: 'function hello() {\n  console.log(\"hello\");\n  return \"hello world\";\n}', cursor: [0, 0], key: '/return', desc: '輸入 /return 後 Enter', statusLeft: 'd/return' },
            { content: 'return \"hello world\";\n}', cursor: [0, 0], key: 'd/return', desc: '刪除到 return 前，跨行內容一次清掉', statusLeft: '-- NORMAL --' },
            { content: 'return \"hello world\";\n}', cursor: [0, 0], desc: 'd + /pattern = 更精準的跨行刪除' },
        ]
    },
    '6-06-reg-inspect': {
        category: 'article6',
        title: ':reg + "0/"1/"- 寄存器檢視',
        keyPoint: '<code>:reg 0 1 -</code> 可快速看出 yank / delete / 小刪除來源',
        steps: [
            { content: 'important text delete', cursor: 0, desc: ':reg：查看寄存器狀態' },
            { content: 'important text delete', cursor: 0, key: 'yiw', desc: '先 yiw 複製 "important"' },
            { content: 'important text delete', cursor: 15, key: 'dw', desc: '再刪除 "delete"（覆蓋預設寄存器）' },
            { content: 'important text ', cursor: 15, key: ':reg 0 1 -', statusLeft: ':reg 0 1 -', desc: '查詢 "0、"1、"- 三個寄存器' },
            { content: 'Type Name Content\nc    "0   important\nl    "1   delete^J\nc    "-   delete', cursor: [1, 0], statusLeft: '-- NORMAL --', desc: '"0 還是 yank；"1 是刪除歷史；"- 是小刪除' },
            { content: 'important text ', cursor: 15, key: '"0p', desc: '用 "0p 貼回原本複製內容' },
            { content: 'important text important', cursor: 23, key: '"0p', desc: '寄存器資訊可直接指導貼上策略' },
        ]
    },
    '6-07-macro-repeat': {
        category: 'article6',
        title: '@@ - 重播上次 Macro',
        keyPoint: '<code>@a</code> 先播一次，後續用 <code>@@</code> 連續重播',
        steps: [
            { content: 'apple\nbanana\ncherry', cursor: [0, 0], desc: '@@：重播上一次執行的 macro' },
            { content: 'apple\nbanana\ncherry', cursor: [0, 0], key: 'qa', desc: 'qa 開始錄製 macro a' },
            { content: 'apple\nbanana\ncherry', cursor: [0, 4], key: 'A, Esc j0', desc: '錄製動作：行尾加逗號，移到下一行' },
            { content: 'apple,\nbanana\ncherry', cursor: [1, 0], key: 'q', desc: 'q 停止錄製，第一行已完成' },
            { content: 'apple,\nbanana\ncherry', cursor: [1, 0], key: '@a', desc: '先按 @a 播放一次' },
            { content: 'apple,\nbanana,\ncherry', cursor: [2, 0], key: '@a', desc: '第二行套用成功' },
            { content: 'apple,\nbanana,\ncherry', cursor: [2, 0], key: '@@', desc: '再按 @@（重播上次 macro）' },
            { content: 'apple,\nbanana,\ncherry,', cursor: [2, 6], key: '@@', desc: '第三行也完成，不用再打 @a' },
            { content: 'apple,\nbanana,\ncherry,', cursor: [2, 6], desc: '@@ 適合連續套用相同巨集' },
        ]
    },
};

// eslint-disable-next-line no-unused-vars
var categories = {
    article1: ['1-01-hjkl','1-02-gg-G','1-03-w','1-04-W','1-05-w-vs-W','1-06-e','1-07-e-vs-E','1-08-b','1-09-b-vs-B','1-10-0-vs-caret','1-11-dollar','1-12-percent'],
    article2: ['2-01-i-vs-a','2-02-I-vs-A','2-03-o-vs-O','2-04-x-vs-X','2-05-D-vs-dd','2-06-s-vs-S','2-07-C-vs-cc','2-08-r','2-09-u-CtrlR','2-10-yy','2-11-p-vs-P','2-12-J','2-13-tilde','2-14-gu-gU','2-15-indent'],
    article3: ['3-01-v-char','3-02-V-line','3-03-Ctrl-v','3-04-gv','3-05-ggVG','3-06-v-percent','3-07-visual-o','3-08-block-I-A'],
    article4: ['4-01-d-motion','4-02-c-motion','4-03-y-motion','4-04-iw-vs-aw','4-05-i-quote-vs-a-quote','4-06-ib-vs-ab','4-07-it-vs-at','4-08-ci-quote-practical','4-09-dw-diw-daw','4-10-number-motion','4-11-3dd-vs-d3j'],
    article5: ['5-01-f','5-02-t','5-03-f-vs-t','5-04-F-T','5-05-number-f','5-06-semicolon-comma','5-07-star-hash','5-08-slash-search','5-09-d-search-pattern'],
    article6: ['6-01-dot','6-02-register','6-03-register-0','6-04-Ctrl-a-x','6-05-macro','6-06-reg-inspect','6-07-macro-repeat'],
};
