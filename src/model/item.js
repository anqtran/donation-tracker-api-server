import mongoose from 'mongoose';

const Schema = mongoose.Schema;

var mongoosastic = require("mongoosastic");

const itemSchema = new Schema({
  category: String, default: "",
  description: { type:String, es_indexed:true }, default: "",
  location: String, default: "",
  longDescription: String, default: "",
  value: Number, default: 0,
  timestamp: {
    type: Date,
    default: Date.now
}
});

itemSchema.plugin(mongoosastic);
var Item = mongoose.model('Item', itemSchema);


Item.createMapping(function(err, mapping) {
  if (err) {
    console.log('error creating mapping (you can safely ignore this)');
  } else {
    console.log('mapping created!');
    console.log(mapping);
  }
});

module.exports = Item