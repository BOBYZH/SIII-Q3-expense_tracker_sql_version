# Expense tracker SQL version v3.0 (家庭記帳本SQL版，第三版)

## Alpha Camp 學期三(2019年版) Final Exam A29: 「專業知識與技術」題目
### Q3: 老爸的私房錢 - Sequelize
- 免安裝預覽連結：[TBA](#)

(因heroku服務免費版限制，開啟網站時需待主機從休眠狀態恢復，須稍待片刻)

## 開發者：
Bob Yu-Zhen Huang[(BOBYZH)](https://github.com/BOBYZH)

## 如何使用：
0. 至少先在電腦上裝好Node.js、Git、MySQL Community  Server([依作業系統版本對照說明操作](https://dev.mysql.com/downloads/mysql/))
1. 從本專案頁面將檔案下載，或複製(clone)到要操作的電腦上:
```
git clone https://github.com/BOBYZH/SIII-Q3-expense_tracker_sql_version.git
```
2. 開啟終端機(terminal)，將目錄切換至專案資料夾(not-citiesocial)：
```
cd not-citiesocial
```
3. 確認是否有在全域(global)環境安裝nodemon；沒有的話建議安裝，在終端機輸入：
```
npm i nodemon -g
```
4. 使用npm安裝需要的套件，套件列表與版本詳見於[package.json](https://github.com/BOBYZH/not-citiesocial/blob/master/package.json)的"dependencies"：
```
npm i 
```
5. 用以下指令或其他方式建立資料庫，
```
npx sequelize db:create
```
再來可使用migrate與seeder建立資料表與範例資料，供快速檢視功能：
```
npx sequelize db:migrate
npx sequelize db:seed:all
```
以下為測試用的「正確」使用者名稱與對應的帳密：

|(name) | email              | password | (登入後可見資料)     |
| ------| -------------------| ---------| --------------------|
| user1 | user1@example.com  | 12345678 | id #1, #2, #3 號記帳 |
| user2 | user2@example.com  | 12345678 | id #4, #5, #6 號記帳 |
6. 若要測試Facebook登入功能，需到[Facebook for Developers](https://developers.facebook.com/)建立應用程式
7. 在本專案根目錄依據".env.template"內容格式，新增".env"檔案(可使用終端機指令)，
```
cp .envTemplate .env
```
並在.env填入Facebook應用程式編號、應用程式密鑰

8. 執行本專案：
```
npm run dev

# 不使用nodemon的話，可改用以下指令，但無法在修改代碼後即時更新：
npm run start
```
9. 開啟預覽連結
- 若是在本機操作，於瀏覽器網址列輸入[http://localhost:3000](http://localhost:3000)；
- 若使用虛擬主機，則須配合主機服務設定另用網址

## 主要功能：
- 同使用MongoDB的第二版，詳見[其readme說明](https://github.com/BOBYZH/expense_tracker_mongodb_version#%E4%B8%BB%E8%A6%81%E5%8A%9F%E8%83%BD)
### 版本更新：
#### 第三版
- 資料庫改採用MySQL