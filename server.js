
import express from 'express';

const app = express();

app.get('/hi', (req, res) => {
  res.send('Hello from the Node server!');
  console.log('👀 Server starting...');

});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
