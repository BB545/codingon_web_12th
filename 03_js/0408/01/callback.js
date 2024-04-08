//콜백의 원리, 작동방법
console.log('before');

getUser(1, function(user){
    console.log('user', user);
});

console.log('after');

function getUser(id, abc){
    setTimeout(()=>{
        console.log('Reading database...');
        abc({id:id, githubUsername: 'hong'})
    }, 2000)
}