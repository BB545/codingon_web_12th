const Visitor = require('../model/Visitor');

//첫화면
exports.main = (req,res)=>{
    console.log('controller > Cvisitor');
    res.render('index')
}

// 모든 방문자
exports.get_visitors = (req,res)=>{
    console.log('Visitor.getVisitor 함수 콜');
    //콜백함수로 보낸 데이터 rows를 매개변수로 받음
    Visitor.getVisitors(result => {
        console.log('controller > Cvisitor > get_visitors');
        res.render('visitor', {data: result})
    })
}