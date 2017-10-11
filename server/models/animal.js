var mongoose = require('mongoose');
var MongooseSchema = new mongoose.Schema({
  name: {
    type: String
  },
  info: {
    type: String
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});
mongoose.model('Animal', MongooseSchema);
