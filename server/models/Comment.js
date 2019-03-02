var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
  body: { type: String },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  article: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Article' }],
}, {timestamps: true});


CommentSchema.methods.toJSONFor = function(comment){
  return {
    body: this.body ,
    author: this.author,
    article: this.article
  };
};

export default mongoose.model('Comment', CommentSchema);
