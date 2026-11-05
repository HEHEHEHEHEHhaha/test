const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello World! API đang chạy 24/7 trên Google Cloud Run!');
});

app.listen(port, () => {
  console.log(`Server đang chạy tại port ${port}`);
});