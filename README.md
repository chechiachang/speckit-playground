# 工作坊：Spec-driven Development（SDD）與 Spec-kit

- 時長：90 分鐘
- 目標：從 vibe coding 轉向規格優先開發
- 講者：Che-Chia Chang

## 時間安排
| 時間 | 環節 | 重點 |
|---|---|---|
| 00-10m | 導入 | 什麼是 SDD、為何規格是真實來源 |
| 10-20m | 環境準備 | `specify init`、API Key、Agent 檢查 |
| 20-30m | 憲法定義 | 定義專案原則（`/speckit.constitution`） |
| 30-75m | 實作 LAB | 用 4 步驟 Prompt 建立 YouBike 2.0 網頁 |
| 75-85m | 驗證修正 | 修正偏移並更新規格（`/speckit.clarify`） |
| 85-90m | Q&A | 收尾與問答 |

## LAB 清單
1. 環境：安裝 CLI，執行 `specify init --ai [agent]`，再執行 `specify check`。
2. 憲法：定義命名規範，資料抓取需有 `try-catch`。
3. 規格：確認 `spec.md` 覆蓋所有 user stories，釐清模糊欄位。
4. 實作：先改規格，不直接改程式碼；更新規格後再重生任務。
5. 驗收：執行 `/speckit.analyze`，最後用 `/speckit.checklist` 完成檢核。

## 預期成果
1. 具備用 Spec-kit 從 0 到 1 做原型的能力。
2. 理解規格是 source of truth。
3. 能用 AI Agent 長時間穩定執行任務。

## 參考資源
- Spect Kit 官方文件：https://github.com/github/spec-kit
- Spect Kit SDD 核心概念：https://github.com/github/spec-kit/blob/main/spec-driven.md

---

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
