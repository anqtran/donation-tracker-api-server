import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  category: String, default: "",
  description: String, default: "",
  location: String, default: "",
  longDescription: String, default: "",
  value: Number, default: 0,
  timestamp: {
    type: Date,
    default: Date.now
}
});

module.exports = mongoose.model('Item', itemSchema);
