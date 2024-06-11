// only typescript type

// Tuple : 길이 고정, 자료형 고정
let drink: [string, string] = ['사이다', '롯데'];
drink[0] = 'cider';
drink.push('야호'); // tuple의 한계, push로 하면 요소가 배열에 들어감 (2개만 받겠다 설정해놨지만)
console.log(drink);

let drink2: readonly [string, number] = ['사이다', 2000];
// drink2.push('야호'); // readonly 속성 때문에 push 안됨

type productInfo = [number, string, number]; // type 선언, 자료형만 들어갈 수 있음
let product1: productInfo = [1, '로지텍', 1300];
// let product2: productInfo = ['로지텍', 1, '1300']; // 타입 안맞추면 에러남


// Enum
// 문자 열거형
enum Auth {
    admin = 0,
    user = 1,
    guest = 2,
}

// 숫자 열거형
enum Cafe {
    americano = '아메리카노',
    latte = '카페라떼',
}

console.log(Auth.admin);
console.log(Cafe.americano);

// 값을 지정하지 않으면 기본으로 숫자 지정
enum Cake {
    choco,
    vanilla,
    strawberry = '딸기케이크',
}

console.log(Cake.choco);
console.log(Cake.strawberry);


// any : 아무 타입이나 다 들어갈 수 있음
// 명시적으로
let val: any;
val = true;
val = '하이';
val = 100;
val = { number: 100 };

// 암묵적으로
let val2;
val2 = false;
val2 = '하이';