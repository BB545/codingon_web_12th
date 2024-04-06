const Visitor = require('../model/Visitor');

exports.main = (req,res)=>{
    res.render('index')
}

exports.get_Visitors = (req,res)=>{
    Visitor.getVisitors(result=>{
        res.render('visitor', {data: result})
    })
}