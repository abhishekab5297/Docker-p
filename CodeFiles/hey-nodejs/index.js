const express = require('express');
const app = express();
const port = 7000;

app.get('/', (req, res) => {
  res.json({
    "hey": "Nodejs"
  });
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
