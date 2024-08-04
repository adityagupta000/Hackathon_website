const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  teamName: { type: String, required: true },
  teamSize: { type: Number, required: true }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
