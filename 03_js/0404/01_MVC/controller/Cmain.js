const Comment = require('../model/Comments');
exports.main = (req,res)=>{
    console.log('controller > Cmain.js');
    res.render('index')
}

// 다보여줌
exports.comments = (req,res)=>{
    console.log('controller > Cmain > comments', Comment.commentsInfo());
    res.render('comments', {commentsInfos : Comment.commentsInfo()})
}

//개별적인것
exports.comment = (req,res)=>{
    console.log('req.params', req.params.id);
    const comments = Comment.commentsInfo();
    //전체내용
    const commentId = req.params.id; //자세히보기 원하는 댓글의 id
    res.render('comment', {commentInfo : comments[commentId-1]}) //배열 인덱스 번호 위해 -1해줌
}