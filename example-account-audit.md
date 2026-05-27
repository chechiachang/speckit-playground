## 🛠️ 實戰小專案：內部帳號稽核報表
本範例建立一個簡單的內部服務帳號稽核流程。
 * **範圍**：Grafana、Prometheus、GitHub 等內部服務
 * **目標**：彙整帳號清單、標示管理員權限，並輸出為 CSV

## 📝 核心流程與 Prompt（四步驟）

### 第一步：/speckit.specify —— 定義需求與目的

"/speckit.specify '建立一份內部帳號稽核報表。
核心需求：
 1. 列出來自內部服務（例如 Grafana、Prometheus、GitHub）的帳號。
 2. 列出具有管理員權限的帳號。
 3. 最終輸出格式必須為 CSV。'"

### 第二步：/speckit.plan —— 規劃做法與技術需求
> **提示詞：**
> "/speckit.plan '技術需求如下：
>  1. 從各服務來源讀取帳號資料。
>  2. 將欄位正規化為統一結構：service, account, role, is_admin。
>  3. 合併所有服務資料為單一資料集。
>  4. 匯出最終結果為 CSV 檔。'"

### 第三步：/speckit.tasks —— 拆解為可執行任務
> **提示詞：**
> "/speckit.tasks '請根據 plan.md 拆解為可執行任務清單。
> 必須包含：
>  1. Grafana、Prometheus、GitHub 的資料讀取。
>  2. 欄位映射與資料正規化。
>  3. 管理員權限篩選。
>  4. CSV 產生與輸出驗證。'"

### 第四步：/speckit.implement —— 依序實作並輸出結果
> **提示詞：**
> "/speckit.implement '請依照 tasks.md 順序實作。
> 需產出：
>  1. 完整帳號清單 CSV
>  2. 僅管理員帳號清單 CSV
> 完成後請提醒我驗證 CSV 檔案。'"
