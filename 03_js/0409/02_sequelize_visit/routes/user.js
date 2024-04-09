const express = require('express');
const router = express.Router();
const controller = require('../controller/Cuser');

//회원가입 페이지
router.get('/signin', controller.get_signin)
router.get('/signup', controller.get_signup)

//로그인 요청
router.post('/signin', controller.post_signin)
//회원가입 요청
router.post('/signup', controller.post_signup)

//로그인 성공 후 profile
router.post('/profile', controller.post_profile)
//로그인 성공 후 profile에서 수정
router.patch('/profile/edit', controller.edit_profile)
//로그인 성공 후 profile에서 삭제
router.delete('/profile/delete', controller.delete_profile)

module.exports = router;