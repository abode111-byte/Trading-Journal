# Trading Journal

A web-based trading journal application with cloud sync for tracking and analyzing trading activities across multiple devices.

## Features

- 📅 Track trading entries with detailed information
- 📊 Analyze trading performance with real-time statistics
- 🔄 Cloud sync - access your data from any device
- 💾 Offline support - works without internet connection
- 🎨 Modern dark theme UI

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm

### Steps

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the server:**
   ```bash
   npm start
   ```
   The server will run on `http://localhost:3000`

3. **Open in browser:**
   - Open `http://localhost:3000` in your web browser
   - Start recording your trades

## Usage

1. **Select a date** on the calendar
2. **Write your trade notes** in the text area
3. **Mark as Win or Loss** using the buttons
4. **Save Entry** - your data syncs to the cloud automatically
5. **View all entries** in the "Saved Entries" panel

## Cloud Sync

- All entries are automatically synced to the server
- Access your data from any device by running the same server
- Offline mode: changes are saved locally and synced when online

## File Structure

- `index.html` - Frontend application
- `server.js` - Node.js backend server
- `package.json` - Dependencies
- `data.json` - Cloud database (auto-generated)
