const jwt = require('jsonwebtoken');
// const payload = {foo: 'bar'};
// const secretKey = 'mySecretKey';
// const jwtToken = jwt.sign(payload,secretKey);
// console.log(jwtToken);

const token = jwt.sign({email: 'test@user.com'}, 'our_secret');

const verified = jwt.verify(token, 'our_secret');
console.log(verified);