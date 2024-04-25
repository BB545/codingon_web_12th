const Visitor = require('../model/Visitor');

exports.main = (req,res)=>{
    res.render('index')
}

exports.allVisitorList = (req,res)=>{
    // 모델의 콜백이 보낸 결과를 result가 받음
    Visitor.allVisitorsList(result=>{
        res.render('visitors', {data: result})
    })
}

exports.addVisitor = (req,res)=>{
    const {name, comment} = req.body;
    Visitor.postAddVisitor(req.body, (result)=>{
        res.send({id: result, name, comment})
    })
}

exports.getShowAVisitor = (req,res)=>{
    Visitor.getShowAvisitor(req.params.id, (result)=>{
        res.send(result)
    })
}

exports.patchVisitor = (req,res)=>{
    Visitor.patchContent(req.body, (result)=>{
        res.send(result)
    })
}

exports.deleteVisitor = (req,res)=>{
    Visitor.deletedb(req.body.id, (result)=>{
        res.send('삭제 완료')
    })
}