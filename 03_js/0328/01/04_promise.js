function callPromise(name){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(name)
        }, 1000)
    })
}

function backPromise(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res('backPromise is back')
        }, 1000)
    })
}

function hellPromise(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res('What the Hell')
        }, 1000)
    })
}

/*callPromise('Kim').then(function(name){
    console.log(`${name} 반가워`) //res(name) 성공하면 얘를 출력해줘
    return backPromise() //다음으로 backPromise를 실행해줘
}).then(function(txt){
    console.log(`${txt}을 실행했군요`)
    return hellPromise()
}).then(function(msg){
    console.log(msg)
});*/


//async ~ await 사용 - 위의 방법이 너무 복잡하므로 조금 보기 쉽게 정리한 것
async function exec(){
    const name = await callPromise('Kim');
    console.log(`${name} 반가워`)
    const txt = await backPromise();
    console.log(`${txt}을 실행했군요`)
    const msg = await hellPromise();
    console.log(msg)
}
exec();