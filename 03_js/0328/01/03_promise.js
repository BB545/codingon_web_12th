//1
/*const p = new Promise((re, rej)=>{
    res(1)
    // reject(new Error('message'))
})

// p.then((result)=>{console.log('결과는', result)})
p.then(result=>console.log('결과는', result))*/ //한줄일때는 (),{}필요x

//2
// const p = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res(1)
//     }, 2000)
// })
// p.then(result=>console.log('2초 후의 결과는', result))

//3
const p = new Promise((res,rej)=>{
    setTimeout(()=>{
        rej(new Error('오마이갓'))
    }, 2000)
})
p
.then(result=>console.log('2초 후의 결과는', result)) //성공하면
.catch(err=>console.log('에러 발생', err.message)) //실패하면
// p.then().catch() - 체이닝 방식