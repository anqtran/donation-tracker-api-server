import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const locationSchema = new Schema({
  name: String, default: "",
  latitude: String, default: "",
  longitude: String, default: "",
  streetAddress: String, default: "",
  city: String, default: "",
  state: String, default: "",
  zip: String, default: "",
  type: String, default: "",
  phone: String, default: "",
  website: String, default: "",
});

module.exports = mongoose.model('Location', locationSchema);