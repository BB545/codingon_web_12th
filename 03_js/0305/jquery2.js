/** val() input value값 가져오기 / 설정하기 */
function getValue(){
    // let inputVal = document.querySelector('input').value;
    // console.log(inputVal)
    let inputVal = $('input').val();
    console.log(inputVal)
}

function setValue(){
    // document.querySelector('input').value = '설정을 완료했습니다.';
    $('input').val('제이쿼리 사용함') ///설정할 내용을 안에 넣으면 됨
}

function changeCssJS(){
    let span = document.querySelector('span');
    span.style = 'font-size: 2rem; color: hotpink';
}

function changeCssJquery(){
    // $('span').css('font-size', '2rem');
    // $('span').css('color', 'hotpink');
    $('span').css({fontSize: '2rem', color: 'hotpink'}) //여러값 주려할 때, 그니까 위에 2개를 합쳐서 쓴것, 단 표기법이 다를 수 있음
}

function getCssJquery(){
    console.log($('span').css('color'))
    console.log(document.querySelector('span').style.color)
}

function changeAttrJS(){
    let a = document.querySelector('a');
    a.setAttribute('href', 'https://www.naver.com')
}

function changeAttrJquery(){
    $('a').attr('href', 'https://www.daum.net')
}

function changeTextJS(){
    let p = document.querySelector('.p-text');
    p.textContent='자바스크립트로 변경';
}

function changeTextJquery(){
    $('.p-text').text('제이쿼리로 변경')
}

function changeHtmlJS(){
    let p = document.querySelector('.p-html');
    p.innerHTML='<h3>javascript</h3>'
}

function changeHtmlJquery(){
    $('.p-html').html('<h3>jquery</h3>');
}


// ------------------------
/**
 * append() : 컨텐츠를 선택한 요소 내부의 끝부분에 삽입
 * prepend() : 컨텐츠를 선택한 요소의 시작부분에 삽입
 * after() : 선택한 요소 뒤에 컨텐츠 삽입
 * before() : 선택한 요소 앞에 컨텐츠 삽입
 */

function appendJS(){
    let ul = document.querySelector('.colors');
    let li = document.createElement('li');
    li.innerText='마지막에 자식으로 추가된 요소 js';
    ul.append(li);
}

function appendJquery(){
    $('.colors').append('<li>마지막에 자식으로 추가됨 jquery</li>');
}

function prependJS(){
    let ul = document.querySelector('.colors');
    let li = document.createElement('li');
    li.innerText='마지막에 자식으로 추가된 요소 js';
    ul.prepend(li);
}

function prependJquery(){
    $('.colors').prepend('<li>마지막에 자식으로 추가됨 jquery</li>');
}

function beforeJS(){
    let green = document.querySelector('.green');
    let li = document.createElement('li');
    li.innerText='마지막에 자식으로 추가된 요소 js';
    green.before(li);
}

function beforeJquery(){
    $('.green').before('<li>마지막에 자식으로 추가됨 jquery</li>');
}

function afterJS(){
    let green = document.querySelector('.green');
    let li = document.createElement('li');
    li.innerText='마지막에 자식으로 추가된 요소 js';
    green.after(li);
}

function afterJquery(){
    $('.green').after('<li>마지막에 자식으로 추가됨 jquery</li>');
}


// --------------------

function removeJS(){
    let li2 = document.querySelector('#li2');
    li2.remove();
}

function removeJquery(){
    $('#li2').remove();
}

function emptyJS(){
    let nums = document.querySelector('ul.nums');
    nums.innerHTML=''; // js에서는 empty함수가 없어서 innerHTML을 이용하여 공백으로 만들어줌
}

function emptyJquery(){
    $('ul.nums').empty();
}

function findParent(){
    console.log(document.querySelector('.child2').parentElement);
    console.log($('.child2').parent());
}

function findParents(){
    console.log($('.child2').parents()); //부모뿐만아니라 조상까지 나옴
}

function findNext(){
    console.log(document.querySelector('.child2').nextElementSibling); //형제
    console.log($('.child2').next());
}

function findPrev(){
    console.log(document.querySelector('.child2').previousElementSibling);
    console.log($('.child2').prev());
}

function findChildren(){
    console.log(document.querySelector('.parent').children); // 부모 기준 자식들
    console.log($('.parent').children());
}

function addClass(){
    document.querySelector('#hi').classList.add('fs-50');
    $('#hi').addClass('fs-50');
}

function removeClass(){
    document.querySelector('#hi').classList.remove('fs-50');
    $('#hi').removeClass('fs-50');
}

function hasClass(){
    console.log(document.querySelector('#hi').classList.contains('fs-50'));
    console.log($('#hi').hasClass('fs-50'));
}

function toggleClass(){
    document.querySelector('#hi').classList.toggle('bg-pink');
    $('#hi').toggleClass('bg-pink');
}