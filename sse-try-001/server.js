const express = require('express');
const app = express();

const cors = require('cors');

const matchdata01 = {
  "teama": "Team A",
  "teamb": "Team B",
  "teamaScore": 3,
  "teambScore": 2,
  "msp1": "Player 1",
  "msp1s": 11,
  "msp2s": 9,
  "msp2": "Player 2",
  "mdp1": "Player 3",
  "mdp1s": 6,
  "mdp2s": 11,
  "mdp2": "Player 4",
  "wsp1": "Player 5",
  "wsp1s": 11,
  "wsp2s": 7,
  "wsp2": "Player 6",
  "wdp1": "Player 7",
  "wdp1s": 11,
  "wdp2s": 8,
  "wdp2": "Player 8",
  "xdp1": "Player 9",
  "xdp1s": 9,
  "xdp2s": 11,
  "xdp2": "Player 10"
}

// Configure CORS
app.use(cors({
  origin: 'http://localhost:3000', // Replace with the origin URL of your React app
  credentials: true
}));

app.get('/stream', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  const sendEvent = (data) => {
    res.write(`data: ${JSON.stringify(data)}\n\n`);
  };

  sendEvent({ message: 'Hello, client!' });

  const interval = setInterval(() => {
    sendEvent({ message: `Current time: ${new Date().toLocaleTimeString()} + ${JSON.stringify(matchdata01)}` });
  }, 5000);

  res.on('close', () => {
    clearInterval(interval);
  });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});