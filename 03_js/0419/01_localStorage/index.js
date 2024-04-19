const inputKey = document.getElementById('inputKey');
const inputValue = document.getElementById('inputValue');
const btnInsert = document.getElementById('btnInsert');
const IsOutput = document.getElementById('IsOutput');

btnInsert.onclick = ()=>{
    const key = inputKey.value;
    const value = inputValue.value;

    // key 변수가 존재하고 비어있지 않은지 확인하는 조건문. key 변수가 존재하고 비어있지 않으면 true를 반환하고, 그렇지 않으면 false를 반환.
    if(key && key){
        localStorage.setItem(key, value);
        // 현재 페이지를 새로고침
        location.reload();
    }
}

for(let i=0; i<localStorage.length; i++){
    const key = localStorage.key(i)
    const value = localStorage.getItem(key)
    IsOutput.innerHTML += `${key} : ${value} <br>`
}