const { where } = require('sequelize');
const models = require('../models/index');
const Visitor = models.Visitor;

//첫 화면
exports.main = (req,res)=>{
    res.render('index')
}

//모든 방명록 보기
exports.allVisitorList = (req,res)=>{
    Visitor.findAll().then(result=>{
        console.log('allVisitorList ->',result);
        res.render('visitors', {data: result})
    })
}

//사용자 추가
exports.addVisitor = (req,res)=>{
    console.log('홈에서 데이터 추가', req.body);
    const {name,comment} = req.body;
    Visitor.create({
        name: name,
        comment: comment
    }).then(result=>{
        console.log('Add visitor userid', result);
        res.send(result)
    })
}

//1명 선택
exports.getShowAvisitor = (req,res)=>{
    console.log('1명 선택', req.params.id, req.params);
    Visitor.findOne({
        where: {id:req.params.id}
    }).then(result => {
        console.log('getShowAvisitor');
        res.send(result)
    })
}

//수정버튼
exports.patchVisitor = (req,res)=>{
    console.log('수정', req.body);
    Visitor.update({
        name: req.body.name,
        comment: req.body.comment
    }, {
        where: {id: req.body.id}
    }).then(result=>{
        console.log('수정 후', req.body);
        res.send(result)
    })
}

//삭제버튼
exports.deleteVisitor = (req,res)=>{
    console.log('삭제', req.body.id);
    Visitor.destroy({
        where: {id: req.body.id}
    }).then(result=>{
        res.send('삭제 성공');
    })
}