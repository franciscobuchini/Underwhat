const express = require('express');
const app = express();
const cors = require('cors');
const corsOptions = {
  origin: 'http://localhost:5173',
};

app.use(cors(corsOptions));

app.get('/api', (req, res) => {
  res.json({ fruits: ["apple", "orange", "banana"] });
});

app.listen(3002, () => {
  console.log('Server is running on http://localhost:3002');
});