import { useEffect, useState } from 'react';
import axios from 'axios';
import Postitem from './Postitem';

export default function PostList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // 1. then 사용 - 가독성 떨어짐
        /* axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
            console.log(res.data);
            setPosts(res.data.slice(0,10));
        }) */

        
        // 2. async - await
        /* const result = await axios.get("https://jsonplaceholder.typicode.com/posts"); */
        // useEffect 안에서 비동기 작업을 할때 useEffect 내부에서 async - await 직접 적을 수는 X - 따로 비동기 함수를 만든 후 호출해야한다.
        const getPosts = async () => {
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
            setPosts(res.data.slice(0,10));
        }

        getPosts();
    }, [])

    return (
        <div>
            <header>Post List</header>
            {posts.length > 0 ? (
                posts.map((post) => {
                    return (
                        // post를 props로 컴포넌트에 보내주기
                        // 반복값을 따로 컴포넌트로 뺄 경우에는 key값을 해당 컴포넌트에 적어줘야한다.
                        <Postitem key={post.id} post={post} />
                    )
                })
            ):(
                <h2>Loading...</h2>
            )}
        </div>
    )
}
