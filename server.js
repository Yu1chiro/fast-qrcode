const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const view = (file) => path.join(__dirname, 'public', file);

// Static assets (css/js/images if you add them later)
app.use(express.static(path.join(__dirname, 'public'), { index: false }));

// Views
app.get('/', (req, res) => res.sendFile(view('index.html')));
app.get('/generate-qr', (req, res) => res.sendFile(view('generate-qr.html')));
app.get('/unlock', (req, res) => res.sendFile(view('unlock.html')));

// Anything else goes back to the landing page
app.use((req, res) => res.redirect('/'));

app.listen(PORT, () => {
  console.log(`hiro-qrcode running on http://localhost:${PORT}`);
});