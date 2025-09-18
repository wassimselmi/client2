const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Plant Project is under maintenance 🛠️');
});

app.get('/plants', (req, res) => {
  res.send('more plants to come! 🛠️');
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', time: new Date() });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
