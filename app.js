const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Menampilkan file index.html saat domain diakses
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Structura Server aktif pada port ${port}`);
});