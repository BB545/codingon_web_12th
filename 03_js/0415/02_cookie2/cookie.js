const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

// coolie-parser는 미들웨어로 등록해서 사용
// app.use(cookieParser());
app.use(cookieParser('secretKey'))

// 쿠키에 사용할 내용을 따로 설정
const cookieConfig = {
    maxAge: 60*1000,
    httpOnly: true,
    signed: true,
}

app.get('/', (req,res)=>{
    res.render('cookie')
})

// cookie.ejs에서 쿠키 설정하기
app.get('/setCookie', (req,res)=>{
    // 쿠키이름, 쿠키값, 옵션
    res.cookie('myCookie', 'cookiegood', cookieConfig)
    res.send('쿠키 설정 완료')
})

// 쿠키 가져오기
app.get('/getCookie', (req,res)=>{
    console.log('얻어온 쿠키:', req.cookies);
    console.log('얻어온 암호화된 쿠키:', req.signedCookies);
})

// 쿠키 삭제
app.get('/clearCookie', (req,res)=>{
    res.clearCookie('myCookie', 'cookiegood', cookieConfig)
    res.send('clear cookie')
})

/** 암호화되지 않은 일반적인 경우
 * 1. 'cookie-parser' 사용
 * 2. app.use(cookieParser()) 미들웨어로 등록
 * 3. res.cookie(이름, 값, 옵션) 쿠키 설정
 * 4. req.cookies() 쿠키 값 확인
 * 5. res.clearCoolie(이름, 값, 옵션) 쿠키 삭제
 */

/** 암호화 된 경우
 * 1. 'cookie-parser' 사용
 * 2. app.use(cookieParser(임의의 문자열)) 미들웨어로 등록
 * 3. 옵션에 signed: true 설정
 * 4. res.cookie(이름, 값, 옵션) 쿠키 설정
 * 5. req.signedCookies() 쿠키 값 객체에서 확인
 * 6. res.clearCookie(이름, 값, 옵션) 쿠키 삭제
 */

app.listen(8000, ()=>{
    console.log('8000 server is running...');
})