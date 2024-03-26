const eventEmitter = require('events')
//events는 클래스이다
const emitter = new eventEmitter() //eventEmitter을 하나 생성해서 그대로 emitter에 주겠다.
emitter.on('mymsg',function(){
    console.log('listener 호출')
})

emitter.emit('mymsg')