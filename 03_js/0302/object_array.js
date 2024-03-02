let student=[
    {"name": '철수', "score": 90},
    {"name": '영희', "score": 95},
    {"name": '민수', "score": 83},
    {"name": '형준', "score": 75},
]
for (let i=0; i<4; i++) {
    console.log(student[i]["score"]) //2차원 배열이기에 값으로 줘야지만 정상 실행된다.
}