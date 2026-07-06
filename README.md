# CPE 備考 — Cambridge C2 Proficiency 練習

純靜態單頁應用（vanilla HTML/CSS/JS，無框架、無 build step、無外部依賴），可直接以 `file://` 開啟或部署到 GitHub Pages。

## 功能

- **Use of English**：對應 CPE Reading & Use of English Part 1–4 的四種練習模式
  - Part 1 選擇題克漏字（12 題）
  - Part 2 開放式克漏字（12 題）
  - Part 3 構詞（12 題）
  - Part 4 關鍵詞改寫（10 題）
  - 逐題作答、即時對錯回饋與英文解說、回合結束顯示分數，紀錄存入 localStorage
- **Writing**：8 張原創題目卡（4 篇 Part 1 essay 含雙文本 + review / report / article / letter 各一），附評分檢核表與 model；45 分鐘可調倒數計時器；草稿區含即時字數統計並自動儲存
- **Speaking**：Part 3 long turn 抽題（10 張題卡）+ 2 分鐘計時，時間到顯示高分句型；附 Part 1 & 2 小提示
- **字彙卡**：60 張 C2 字彙／搭配詞／慣用語，Leitner 三盒間隔複習（盒 1 每天、盒 2 每 2 天、盒 3 每 5 天）
- **進度**：各 Part 答題數、正確率、上次練習時間；字彙各盒張數；可一鍵清除所有資料

所有題目皆為原創（CPE 風格、C2 難度），介面繁體中文、題目內容英文。所有資料只存在瀏覽器 localStorage，無任何網路請求。

## 檔案結構

```
index.html        主頁面
css/style.css     深色主題樣式（mobile-first）
js/questions.js   Use of English 題庫 + Writing / Speaking 題目
js/vocab.js       字彙卡資料（60 張）
js/app.js         應用邏輯
test/test.js      資料完整性與純邏輯測試（Node）
```

## 測試

```bash
node test/test.js
```

驗證題庫完整性（答案存在、Part 1 四選項、Part 4 關鍵詞出現在答案中、字彙不重複…）以及答案正規化比對與 Leitner 排程邏輯。

## 部署到 GitHub Pages

推到 GitHub repo 後，Settings → Pages → 選擇 branch（root）即可。
