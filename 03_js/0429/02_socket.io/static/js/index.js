let socket = io();

/**
 * socket.on('이벤트', 함수)
 */

socket.on('connect', function(){
    let name = prompt('반갑습니다','');
    if(!name){
        name='아무개씨'
    }
    // 서버에 접속한 새로운 유저가 누군지 알려준다
    socket.emit('newUser', name)
})

socket.on('update', function(data){
    let chat = document.getElementById('chat');
    let message = document.createElement('div');
    let node = document.createTextNode(`${data.name} : ${data.message}`);
    // 내가 보낸 것 다른 사람이 보낸 것 클래스 지정해 구변하기 위함
    let className = '';

    switch(data.type){
        case 'message':
            className='other';
            break;
        case 'connect':
            className='connect';
            break;
        case 'disconnect':
            className='disconnect';
            break;
        }
        
        message.classList.add(className);
        message.appendChild(node);
        chat.appendChild(message)
})

function send(){
    let message = document.getElementById('test').value;
    // input 초기화
    document.getElementById('test').value = '';

    let chat = document.getElementById('chat');
    let msg = document.createElement('div');
    let node = document.createTextNode(message);

    msg.classList.add('me');
    msg.appendChild(node);
    chat.appendChild(msg)

    // 서버로 message 이벤트 전송하면서 data 함께 보내기
    socket.emit('message', {type: 'message', message: message})
}