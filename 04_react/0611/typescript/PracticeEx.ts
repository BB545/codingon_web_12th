let olimpic_newgame: readonly [object, boolean] = [
    {
        name: '쇼트트랙',
        type: '혼성계주',
    },
    true,
]

// olimpic_newgame[1] = false; // 수정 안됨
console.log(olimpic_newgame);

// interface 실습
interface Game {
    title: string,
    price: number,
    desc?: string,
    category: string,
    platform: string,
}

let heroGame_A: Game = {
    title: 'DC 언체인드',
    price: 50000,
    desc: 'DC 히어로 & 빌런 각각의 개성은 물론, 액션의 재미까지!',
    category: '액션',
    platform: '모바일',
}

let heroGame_B: Game = {
    title: 'MARVEL 퓨처파이트',
    price: 65000,
    category: '롤플레잉',
    platform: '모바일',
}