var mongoose = require('mongoose');

var topicSchema = mongoose.Schema({
    displayNname: { type: String, required: false, trim: true },
    topic: { type: String, required: true, trim: true },
    creator: String
});

var Topic = mongoose.model('Topic', topicSchema);

module.exports = Topic;