const express = require('express');
const app = express();

const cors = require('cors');

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
    sendEvent({ message: `Current time: ${new Date().toLocaleTimeString()}` });
  }, 5000);

  res.on('close', () => {
    clearInterval(interval);
  });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});