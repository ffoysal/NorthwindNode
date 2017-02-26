var mongoose = require('mongoose');
var Schema    = mongoose.Schema;
var idvalidator = require('mongoose-id-validator');

var questionSchema = new Schema({
    title: { type: String, required: true,index: {unique: true}, trim: true },
    answers: [{ type: String, required: true, trim: true }],
    correctAnswer: { type: String, required: true, trim: true },
    creator: String,
    topic:{ type: Schema.Types.ObjectId, ref: 'Topic', required: true }
});

questionSchema.plugin(idvalidator);

var Question = mongoose.model('Question', questionSchema);
module.exports = Question;