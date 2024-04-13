const user = require('../model/Cuser');

exports.user = (req,res) => {
    res.render('index', {userInfo: user.userInfo()})
}