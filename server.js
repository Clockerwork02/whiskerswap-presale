const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

// Serve static files from attached_assets and public directories
app.use('/attached_assets', express.static(path.join(__dirname, 'attached_assets')));
app.use('/public', express.static(path.join(__dirname, 'public')));
const PORT = 5000;

// Serve static files
app.use(express.static('.'));

// Serve the WhiskerToken HTML at /presale route
app.get('/presale', (req, res) => {
  const filePath = path.join(__dirname, 'whiskertoken-presale.html');
  
  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    res.status(404).send('File not found');
  }
});

// Default route redirects to presale
app.get('/', (req, res) => {
  res.redirect('/presale');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});