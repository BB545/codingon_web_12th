const express = require('express');
const router = express.Router(); //express의 router기능만 필요
const controller = require('../controller/Cmain');

router.get('/', controller.main) //라우터에 이게 들어오면 어디로 가!
router.get('/comments', controller.comments)
router.get('/comment/:id', controller.comment)

module.exports = router; //다른 곳에서 이 모듈을 사용할 수 있게 공개