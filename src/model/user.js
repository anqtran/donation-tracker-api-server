import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String, default: "",
  email: String, default: "",
  userType: String, default: "",
  location: String, default: ""
});

module.exports = mongoose.model('User', userSchema);
