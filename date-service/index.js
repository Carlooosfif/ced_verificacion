const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/api/date/get', (req, res) => {
  const today = new Date();
  res.json({
    date: today.toISOString().split('T')[0]
  });
});

app.listen(port, () => {
  console.log(`Date Service API running on port ${port}`);
});
