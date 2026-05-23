# 工作坊：Spec-driven Development（SDD）與 Spec-kit

- 時長：90 分鐘
- 目標：從 vibe coding 轉向規格優先開發
- 講者：Che-Chia Chang

## 參與需求

1. 攜帶筆電
1. 安裝好 VSCode + Codex Extension
1. Azure OpenAI API Key（也可使用講師提供的 Key）

## LAB 清單
1. 環境：依 Spec Kit Option 1（Persistent installation）執行完整步驟。
   ```bash
   # 安裝指定穩定版（建議：把 vX.Y.Z 換成最新 release tag）
   uv tool install specify-cli --from git+https://github.com/github/spec-kit.git@v0.8.9

   # 或安裝 main 最新版（可能含未釋出變更）
   uv tool install specify-cli --from git+https://github.com/github/spec-kit.git

   # 確認版本
   specify version

   # 在既有專案初始化（擇一）
   specify init --here --integration codex
   specify init --here --integration copilot

   # 檢查安裝與工具狀態
   specify check

   # 升級（擇一）
   uv tool install specify-cli --force --from git+https://github.com/github/spec-kit.git@vX.Y.Z
   pipx install --force git+https://github.com/github/spec-kit.git@vX.Y.Z
   ```
2. 憲法：以簡潔性和測試覆蓋率為核心；資料抓取與外部輸入需有明確錯誤處理。
3. 規格：確認 `spec.md` 覆蓋所有 user stories，釐清模糊欄位。
4. 實作：先改規格，不直接改程式碼；更新規格後再重生任務。
5. 驗收：執行 `/speckit.analyze`，最後用 `/speckit.checklist` 完成檢核。

> 參考：Spec Kit README Option 1（Persistent installation, recommended）  
> https://github.com/github/spec-kit#option-1-persistent-installation-recommended


## 預期成果
1. 具備用 Spec-kit 從 0 到 1 做原型的能力。
2. 理解規格是 source of truth。
3. 能用 AI Agent 長時間穩定執行任務。

## 參考資源
- Spec Kit 官方文件：https://github.com/github/spec-kit
- Spec Kit SDD 核心概念：https://github.com/github/spec-kit/blob/main/spec-driven.md
