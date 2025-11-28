const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// Database file
const DB_FILE = path.join(__dirname, 'data.json');

// Initialize database
function initDB() {
  if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify({}));
  }
}

// Load entries from database
function loadEntries() {
  try {
    const data = fs.readFileSync(DB_FILE, 'utf8');
    return JSON.parse(data);
  } catch (e) {
    return {};
  }
}

// Save entries to database
function saveEntries(entries) {
  fs.writeFileSync(DB_FILE, JSON.stringify(entries, null, 2));
}

// API Routes

// GET all entries
app.get('/api/entries', (req, res) => {
  const entries = loadEntries();
  res.json(entries);
});

// POST/UPDATE entries
app.post('/api/entries', (req, res) => {
  const { entries } = req.body;
  if (!entries || typeof entries !== 'object') {
    return res.status(400).json({ error: 'Invalid entries' });
  }
  saveEntries(entries);
  res.json({ success: true, entries });
});

// PUT single entry
app.put('/api/entries/:date', (req, res) => {
  const { date } = req.params;
  const { text, status } = req.body;
  
  const entries = loadEntries();
  if (!entries[date]) {
    entries[date] = {};
  }
  
  if (text !== undefined) entries[date].text = text;
  if (status !== undefined) entries[date].status = status;
  
  saveEntries(entries);
  res.json({ success: true, entry: entries[date] });
});

// DELETE single entry
app.delete('/api/entries/:date', (req, res) => {
  const { date } = req.params;
  const entries = loadEntries();
  delete entries[date];
  saveEntries(entries);
  res.json({ success: true });
});

// Start server
initDB();
app.listen(PORT, () => {
  console.log(`Trading Journal server running on http://localhost:${PORT}`);
});
