const express = require('express');
const cors = require('cors');
const route = require('./route'); 

const app = express();
app.use(cors()); // 啟用CORS中間件
app.use('/', route);

app.listen(3000, () => {
  console.log('伺服器運行在 http://localhost:3000');
});