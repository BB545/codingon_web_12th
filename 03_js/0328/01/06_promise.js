
/*console.log("Before")

async function displayConmmits(){
    const user =  await getUser(1);
    const repos = await getRepo(user.gitHubUsername);
    const commit = await getCommits(repos[0]);
    console.log(commit)
}
displayConmmits();

console.log("After")*/

console.log("Before")

async function displayConmmits(){
    try{
        const user =  await getUser(1);
        const repos = await getRepo(user.gitHubUsername);
        const commit = await getCommits(repos[0]);
        console.log(commit)
    } catch(err){ //실행되다 오류나면 catch문으로 오도록
        console.log('Error', err.message)
    }
}
displayConmmits();

console.log("After")

function getUser(id){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log('Reading a user from a DATABASE');
            res({id:id, gitHubUsername:'Hong'})
        }, 1000)
    })
}

function getRepo(username){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log('gitHub API...');
            res(['repo1', 'repo2', 'repo3'])
        }, 1000)
    })
}

function getCommits(repo){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log('Commits');
            res(['commit'])
        }, 1000)
    })
}