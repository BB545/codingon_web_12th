//1
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

let total=0;
function sum(salaries){
    for (let salary of Object.values(salaries)){
        total+=salary
    }
}
sum(salaries);
console.log(total);

//2
let address ={
    street : '세종대로',
    city :'서울시',
    zipcode : '120'
};

function Address(street,city,zipcode){
    return {
        street,
        city,
        zipcode
    }
}

function Address1(street,city,zipcode){
    this.street=street;
    this.city=city;
    this.zipcode=zipcode;
}

console.log(address)
let address1 = new Address('세종대로','서울시','120');
console.log(address1)

//3
let post = {
    title: 'title',
    body: 'body',
    author: 'author',
    views: 'views',
    comments: [
        {contents:'contents1', likes: '10'},
        {contents:'contents2', likes: '20'}
    ],
    onSale: true
}

console.log(post)

//4
function nums(a,b){
    const result=[]
    for(let i=a; i<=b; i++){
        result.push(i)
    }
    return result;
}
const num = nums(1,4);
console.log(num)

//5
const arr=[1,2,3,4,1]
function cnt(arr,target){
    let result=0;
    for (let i in arr){
        if (arr[i]===target){
            result+=1
        }
    }
    return result
}
const count = cnt(arr,1);
console.log(count)

//6
function sumTotal(a, ...b){
    let total = 0;
    for (let i of b) {
        total += i
    }
    return total*(1-a);
}
console.log(sumTotal(0.1,100,20))