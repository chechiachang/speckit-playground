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
>  4. 資料源：使用上方 `API Endpoint`。
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
