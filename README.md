# 🚀 工作坊：Spec-driven Development (SDD) 與 Spec-kit 實戰
**時長**：90 分鐘
**主題**：從「Vibe Coding」轉向「規格導向開發」，打造可維護的 AI 軟體
**講者**：Che-Chia Chang

## 📅 課程時間分配 (Timeline)
| 時間 | 環節 | 內容重點 |
|---|---|---|
| **00-10m** | **觀念導入** | 什麼是 SDD？為什麼規格比程式碼更重要？ |
| **10-20m** | **環境準備** | specify init、API Key 設定與 Agent 檢查 |
| **20-30m** | **定義憲法** | 建立專案不變的原則 (/speckit.constitution) |
| **30-75m** | **實戰 LAB** | 串接 YouBike 2.0 API 並產生前端網頁 (4 步驟 Prompt) |
| **75-85m** | **驗證與修復** | 處理 AI 邏輯偏移與規格更新 (/speckit.clarify) |
| **85-90m** | **結語 Q&A** | 邁向「我寫規格，我不讀代碼」的境界 |

## 🛠️ 實戰小專案：台北市 YouBike 2.0 即時站點查詢器
本實作將使用台北市政府公開資料，無需 API Key 即可串接。
 * **API Endpoint**: https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json
 * **目標**：建立一個具備搜尋與過濾功能的單頁靜態網頁。

## 📝 核心開發流程與 Prompt (四步驟)

### 第一步：/speckit.specify —— 擷取需求與「為什麼」
> **提示詞：**
> "/speckit.specify '建立一個單頁 Web 應用：台北市 YouBike 2.0 即時站點查詢器。
> 核心需求：
>  1. 自動從政府 API 抓取 JSON 站點資訊。
>  2. 搜尋框：可依據「站點地址」或「名稱」過濾。
>  3. 列表呈現：站點名稱、可用車輛、剩餘空位。
>  4. UI 警告：剩餘車位小於 3 台時，該數字顯示為紅色。'"
> 
### 第二步：/speckit.plan —— 制定「怎麼做」與技術棧
> **提示詞：**
> "/speckit.plan '技術要求如下：
>  1. 靜態網頁：使用 index.html 與 main.js，不需後端。
>  2. CSS 框架：透過 CDN 引入 Tailwind CSS。
>  3. JavaScript：使用原生 Fetch API，不使用 React/Vue。
>  4. 資料源：https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json
>  5. 確保資料處理邏輯與 DOM 渲染分離。'"
> 
### 第三步：/speckit.tasks —— 分解任務為原子步驟
> **提示詞：**
> "/speckit.tasks '請根據 plan.md 分解為可執行的任務清單。
> 必須包含：
>  1. HTML 結構與 Tailwind 初始化。
>  2. API Fetch 邏輯與錯誤處理。
>  3. 資料過濾功能 (Search Filter)。
>  4. 動態列表渲染邏輯。
>  5. 最終 UI 調整與 RWD。'"
> 
### 第四步：/speckit.implement —— 執行任務與生成代碼
> **提示詞：**
> "/speckit.implement '請依照 tasks.md 順序開始實作。優先建立 API 抓取邏輯，完成後請提醒我進行手動測試。'"
> 
## 🔍 LAB 實作詳細動作清單 (Detailed Actions)
 * **環境初始化**
   * 使用 uv 安裝 CLI 工具。
   * 執行 specify init --ai [你的Agent] (如 claude 或 copilot)。
   * 執行 specify check 確保環境與 Git 分支權限正常。
 * **憲法定義 (Constitution)**
   * 定義命名規範（如：變數使用小駝峰式命名）。
   * 要求所有資料抓取必須包含 try-catch 異常處理。
 * **規格與計畫管理**
   * AI 生成 spec.md 後，檢查是否包含所有的 user stories。
   * 使用 /speckit.clarify 解決模糊不清的欄位名稱定義。
 * **全自動實作實踐**
   * **挑戰**：在實作過程中，嚴格遵守「不改代碼，只改規格」的原則。
   * 若 UI 呈現與預期不符，回頭更新 spec.md 後重新產出任務。
 * **最後驗收**
   * 執行 /speckit.analyze 進行規格 vs 代碼的一致性掃描。
   * 利用 /speckit.checklist 建立最後的 QA 檢核表。
## 🎯 預期成果
 1. **實作能力**：掌握從 0 到 1 使用 Spec-kit 快速開發原型的能力。
 2. **思維轉換**：理解「規格是真實來源 (Source of truth)」，程式碼只是規格的表現形式。
 3. **效率提升**：學會利用 AI Agent 進行長時間、自動化的任務執行而不偏移軌道。
## 📚 參考資源
 * **官方 User Guide**:
 * **SDD 核心哲學**:
 * **Spec Kit GitHub**:
