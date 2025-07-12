import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  head: Object,
  price: String,
  days:String,
  lord:String,
  time:String
});

export const User = mongoose.model('User', UserSchema);
