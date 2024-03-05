// console.log(document);
// console.log($(document));
// ready() - 모든 엘리먼트가 로딩을 마치면 실행됨
$(document).ready(function(){
    console.log('문서의 DOM 트리가 완성되면 실행되는 것으로 body 태그 이전에 사용된다.')
}) //문서가 준비가 되면. 이라는 뜻

$(function(){
    console.log('로딩')
})

// 로딩에 관련된 이벤트 이름
document.addEventListener('load', function(){
    //엘리먼트 모두 읽어오고, 외부 css, 이미지 등이 모두 로딩을 마치면 실행됨
    //window와 함께 사용
})

document.addEventListener('DOMCContentLoaded', function(){
    //위와 다르게 외부 css, 이미지 등 안읽어와도 DOM 내부의 내용이 다 읽히면 실행됨
    //document와 함께 사용
})

//마우스 이벤트
$('.p-msg').click(function(){
    $('.p-msg').css('color', 'red');
});

// $('.num').click(function(){
//     // $('.num').css('color', 'orange');
//     $(this).css('color', 'orange');
// })

$('.num').on('click', function(){
    $(this).css('color', 'purple');
})

// mouseover() : 요소에 마우스를 올렸을 때
// $('.numbers').mouseover(function(){
//     // $('.numbers').css('background-color', 'skyblue');
//     $(this).css('background-color', 'skyblue');
// })

$('.numbers').on('mouseover', function(){
    $(this).css('background-color', 'skyblue');
    $(this).append('<div>Handler for .mouseover() called.</div>')
})

//hover() : 2가지 동작을 가지고 있다.
$('.div-hover').hover(function(){
    $(this).addClass('hover');
}, function(){
    $(this).removeClass('hover');
})

//scroll()
// $(window).scroll(function(){
//     console.log('스크롤');
// })

$(window).on('scroll', function(){
    console.log('--->스크롤');
})

//Key event
$('.input-key').keydown(function(e){
    if(e.code === 'ArrowRight'){
        console.log('up');
    }
    else if(e.code === 'ArrowLeft'){
        console.log('right');
    }
    else if(e.code === 'ArrowDown'){
        console.log('left');
    }
    else if(e.code === 'ArrowUp'){
        console.log('down');
    }
    else{
        console.log('그 외');
    }
})

//form
$('#todo-form').submit(function(e){
    e.preventDefault();
    const todo = $('input[name="todo"]').val(); //값
    $('.todos').append(`<li>${todo}</li>`); //값 넣기
    $('input[name="todo"]').val(''); //재입력을 위해 초기화
})

//this
const btns = document.querySelectorAll('.btn');
const spans = document.querySelectorAll('.span');
function setBgcolr(){
    // console.log('컬러설정')
    let colorValue=Math.floor(Math.random()*100);
    this.style.backgroundColor='#ffff'+colorValue;
}
for(let btn of btns){
    // console.log(btn);
    // btn.style.backgroundColor='royalblue';
    // btn.addEventListener('click', function(){
    //     this.style.backgroundColor='yellowgreen'
    // })

    btn.addEventListener('click', setBgcolr) //함수이지만 여기엔 ()쓰면x
}

$('a#inactive').on('click', function(event){
    event.preventDefault();
    $('#text').append('해당 링크는 동작하지 않습니다.');
})