<!--
Sync Impact Report
Version change: uninitialized template tokens -> 0.1.0
Modified principles: 5/5 placeholders -> concrete rules
Added sections: none (placeholders filled)
Removed sections: none
Templates requiring updates:
✅ .specify/memory/constitution.md
Follow-up TODOs:
TODO(RATIFICATION_DATE): Set original ratification date after first constitution approval.
-->

# Speckit-Playground Constitution

## Core Principles

### 1. 規格優先開發（Source of Truth）
所有需求與變更必須先落到規格與流程產出（`/speckit.specify` -> `/speckit.plan`
-> `/speckit.tasks`），並以規格/計畫為唯一真實來源；不得在規格落地前直接先改程式碼。
若規格被更新，必須重新生成任務並以新任務為實作依據。

### 2. 命名一致性（命名規範）
專案內的檔名、資料夾名、變數/函數/類別命名必須可辨識其用途，且對同一概念在同一專案內使用一致命名；除非在規格中明確說明，否則不得任意更名或引入同義但不同命名。

### 3. 資料抓取錯誤防護（try-catch）
所有外部資料擷取（例如 HTTP/API/檔案 IO/第三方 SDK）必須具備 try-catch 或等效錯誤處理。
錯誤必須被記錄並以可預期方式回傳/顯示（讓後續 checklist 驗收可以判定是否處理正確）。

### 4. 關注點分離（資料邏輯 vs 呈現）
資料處理與 UI/渲染邏輯必須分離：同一模組不得同時承擔抓取/轉換與直接呈現細節。
資料處理需能獨立驗證（例如可獨立測試或可被任務驗收流程檢核）。

### 5. 驗收收斂（/speckit.analyze + /speckit.checklist）
每個階段/功能完成後必須執行 `/speckit.analyze`，並以 `/speckit.checklist` 完成最終檢核；不得僅靠局部輸出視為完成。

## 附加約束（Additional Constraints）
1. 所有外部變更都必須反映到對應規格/計畫/任務文件（`spec`/`plan.md`/`tasks.md`）中。
2. 任何偏離原則的必要決策，必須在規格或計畫中註明理由，並在 checklist 中明確可檢核地說明如何驗證偏離是安全的。

## 開發流程與品質閘（Development Workflow）
1. `/speckit.specify`：擷取需求與「為什麼」；先釐清目標與邊界。
2. `/speckit.plan`：制定技術棧與實作策略（以 plan.md 為主）。
3. `/speckit.tasks`：拆成原子步驟任務清單，任務需可獨立完成與驗收。
4. `/speckit.implement`：依照 tasks.md 順序實作；若規格變更，必須重新生成任務再繼續。
5. `/speckit.analyze` + `/speckit.checklist`：完成驗收與合規檢核。

## Governance
本憲法優先於所有其他專案規範；憲法的任何更新都必須同步維持流程輸出與模板的一致性。

**Versioning policy**: MAJOR/MINOR/PATCH 規則如下。
- MAJOR：不相容的治理/原則移除或重定義。
- MINOR：新增原則/章節，或對既有指引做重大擴充。
- PATCH：文字釐清、修正錯字、非語意性的細節調整。

**Amendment procedure**
1. 在 PR 中修改 `.specify/memory/constitution.md`，並明確說明修改目的、影響原則、以及需同步更新的檔案。
2. PR 合併前必須重新跑憲法/流程檢核（至少完成 `/speckit.analyze` 與 `/speckit.checklist`），確認輸出文件未出現與新憲法不一致的情況。

**Compliance expectations**
- 規格/計畫/任務/檢核文件必須能對照上述原則逐一驗證；若存在例外，必須在文件中明確記錄可檢核的理由與驗證方式。
- 實作任務需可被完成且可由 checklist 驗收判定是否達標。

**Version**: 0.1.0 | **Ratified**: TODO(RATIFICATION_DATE): Original adoption date unknown | **Last Amended**: 2026-05-21
