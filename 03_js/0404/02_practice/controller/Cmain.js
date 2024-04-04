const Comment = require('../model/Comments');

exports.main = (req,res)=>{
    res.render('index')
}

exports.comments = (req,res)=>{
    res.render('comments', {commentInfos : Comment.commentInfo()})
}

exports.comment = (req,res)=>{
    console.log(req.params);
    console.log(req.params.id);
    const commentId = req.params.id;
    const comments = Comment.commentInfo();
    res.render('comment', {commentInfo : comments[commentId-1]})
}