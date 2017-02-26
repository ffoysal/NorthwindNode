var mongoose = require('mongoose');
var Schema    = mongoose.Schema;
var idvalidator = require('mongoose-id-validator');

var userQuestioinSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref:'User', required: true, index: {unique: true}},
  questions:[
      {
        question:{type: Schema.Types.ObjectId, ref: 'Question'},
        failedAttempt:Number,
        answered: Boolean
      }
    ]
});

userQuestioinSchema.plugin(idvalidator);

var UserQuestion = mongoose.model('UserQuestion', userQuestioinSchema);
module.exports = UserQuestion;

