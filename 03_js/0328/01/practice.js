function call(name, cb){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log(name)
            res({name:name, cb:name})
        }, 1000)
    })
}

function back(back){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log('back')
            res(['back'])
        }, 1000)
    })
}

function hell(hell){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log('callback hell')
            res(['callback hell'])
        }, 1000)
    })
}

async function callBack_Promise(){
    try{
        const call1 =  await call('Kim');
        console.log(`${call1.name} 반가워`)
        const back1 = await back(call1.cb);
        console.log(`${back1}을 실행했구나`)
        const hell1 = await hell(back1);
        console.log(`여기는 ${hell1}`)
    } catch(err){ //실행되다 오류나면 catch문으로 오도록
        console.log('Error', err.message)
    }
}
callBack_Promise();