console.log('Before');

getUser(1, function(user){ //콜백함수 형태
    console.log('User', user)
})

console.log(('After'));

function getUser(id,abc){ //abc 매개변수 원형은 함수 -> 콜백함수 (가장 기초적인 콜백 형태)
    setTimeout(()=>{
        console.log('Reading data...');
        abc({id:id, gitHubUsername:'hong'})
    }, 2000)
}