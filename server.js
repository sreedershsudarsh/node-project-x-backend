import express from 'express';
import { dbConnect } from './db.js';
import mongoose from 'mongoose';

const app = express();
app.use(express.json());

dbConnect()

const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
});
const User = mongoose.model('User', UserSchema);

app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching users' });
  }
});


app.post('/user', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: 'Error creating user' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
})
