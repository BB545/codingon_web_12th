import React, { useEffect, useState } from 'react'
import PracticeItem from './PracticeItem';
import { Post } from '../types/types';

// interface PostInfo {
//     id: number;
//     title: string;
// }

export default function PracticeEx() {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const getPosts = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const jsonData = await res.json();

            setPosts(jsonData.slice(0, 10));
            console.log(jsonData.slice(0, 10))
        };
        setTimeout(() => {
            getPosts();
        }, 2000);
    }, []);

    return (
        <div className='PostList'>
            <header>Post List</header>
            {posts.length > 0 ? (
                posts.map((post) => {
                    return <PracticeItem key={post.id} post={post} />;
                })
            ) : (
                <h2>Loading...</h2>
            )}
        </div>
    )
}
