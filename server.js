
import express from 'express';

const app = express();

app.get('/hi', (req, res) => {
  res.send('Hello from the Node server!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
