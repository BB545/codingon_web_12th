const colorjs = document.querySelectorAll('.color');
const colorjquery = $('.color');
// 계속해서 사용할 것 같으면 함수 밖에서 전역으로 변수 선언

console.log(Array.isArray(colorjs)); // isArray : ()안에 있는 것이 배열인가??
console.log(Array.isArray(colorjquery));

function submitjs(){
    // colorjs.forEach((color)=>{
    //     color.addEventListener('click', function(){
    //         //console.log(this) //this=대명사로 console.log(color)와 같이(동일하게) 받을 수 있다.
    //         this.style.color='red';
    //     })
    // }) //반복문

    for(let i=0; i<colorjs.length; i++){
        colorjs[i].addEventListener('click', function(){{
            colorjs[i].style.color='red';
        }})
    }

    // document.getElementById('div1').innerText='반갑습니다.';
    // document.getElementById('div1').setAttribute('style', 'border: 2px solid red');
}

function submitjquery(){
    colorjquery.on('click', function(){
        // console.log(this); //여기서의 this는 모양만 같을뿐 다르다.
        // this.css('background-color', 'skyblue') //따라서 이렇게 하면 실행이 안됨
        $(this).css('background-color', 'skyblue') //jquery에선 구분을 해줘야함
    }) // 이벤트 붙이는 게 얘는 on을 사용함

    // const div1 = $('#div1');
    // div1.text('새로 왔습니다.');
    // div1.css('border', '3px dashed gold');
}