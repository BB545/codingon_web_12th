//동기화 방식 (sync) : 써있는 순서대로 출력 (앞에있는 애가 끝나지 않으면 실행x)
console.log('Before');
console.log('1');
console.log('After');

//비동기화 방식 (async) : 순서가 실행 명령에 따라 다름, 기다리지 않고 실행할 수 있는 명령 먼저 출력
console.log('Before');
setTimeout(()=>{
    console.log('1')
}, 3000) //3초 기다렸다가 1찍어줘
console.log('After');