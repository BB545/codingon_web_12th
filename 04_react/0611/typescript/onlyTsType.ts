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


// Interface
interface Student {
    name: string,
    isPassed: boolean,
}

const Student1: Student = {
    name: 'codingon',
    isPassed: true,
    // addr: 'string', // 타입에 없는 값 넣으려 하면 에러
}

// type : 지정해둔 값 이외의 값이 들어오면 에러
type Score = 'A+' | 'A' | 'B' | 'C';
let score1: Score = 'A';
// let score2: Score = 'D'; // error

type Score2 = 100 | 90 | 80;
let score2: Score2 = 80;

// type vs enum
enum Score3 {
    A = 100,
    B = 90,
    C = 80,
}

// enum
console.log(Score3.A);
// type은 바로 값을 적으면 된다.


// interface 상속
interface BaseBallClub extends Student {
    position: string;
    height: number;
    readonly backNumber?: number; // ? : 있어도 되고, 없어도 된다는 의미
    [grade: number]: Score3
}

const player1: BaseBallClub = {
    name: 'otani',
    isPassed: true,
    position: 'pitcher',
    height: 190,
    // backNumber: 17,
    1: Score3.A, // 학년: 점수
    // 2: 'A', // error Score3에 없는 값을 쓰고 있으므로 에러
}

console.log(player1)
player1.position = '투수';
player1['height'] = 180; // 키값으로도 접근 가능
// player1.backNumber = 188; // error : readonly이기 때문에 수정불가

// 교차 타입 : 두개 이상 타입을 합치는 것
interface Toy {
    name: string;
    start(): void; // 함수도 들어갈 수 있음
}

interface Car {
    name: string;
    color: string;
    price: number;
}

type ToyCar = Toy & Car;
const toyCar: ToyCar = {
    name: 'tayo',
    start(){
        console.log('출발~');
    },
    color: 'blue',
    price: 5000,
}