const fs = require('fs');
fs.readFile('./blog.txt', (err, data)=>{
    //파일 존재 제대로 불러오는 경우 or 파일 없어서 불러오지 못하는 경우
    if (err) {
        console.log(err)
    } else {
        console.log(data.toString())
        //data만 쓰면 16진수로 바뀌어져 나오니 우리가 알 수 있는 문자열로(toString) 바꿔서보여줘.
    }
})