環境建立:

npm install  
npm start sever  

--------------------------------
說明:

登入頁面後點名的網頁

帳戶資料寫在根目錄的userdata.json裡面  
需在login頁面登入，取得token才可瀏覽主頁面  
登入後，會將登入時間以及帳戶名記錄在student-call.json裡面，只要用戶登入過就不會重複寫入  
登出，就可以將前端的token移除

--------------------------------
node.js api

/login post req.body{username,password}
用於登入，取得token

/call get req.query{username,token)
用於點名，點名後將資料紀錄於student-call.json，並回傳student-call.json的資料


--------------------------------
備註:

api位置寫於 vue.config.js

