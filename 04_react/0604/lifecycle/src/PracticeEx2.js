import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function PracticeEx() {
    const [posts, setPosts] = useState([]);

    const URL = "https://jsonplaceholder.typicode.com/posts";

    const fetchPosts = async () => {
        try {
            const response = await axios.get(URL);
            // 데이터 10개만 저장
            setPosts(response.data.slice(0, 10));
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        setTimeout(() => {
            fetchPosts();
        }, 2000);
    }, []);

    return (
        <div>
            <div style={{width: '100%', height: '50px', backgroundColor: 'cornflowerblue', color: 'white', textAlign: 'center', lineHeight: '50px', fontWeight: 'bold'}}>Post List</div>
            {posts.length === 0 ? (
                <h1>Loading...</h1>
            ) : (
                posts.map((value) => {
                    return <div key={value.id} style={{width: '800px', height: '115px', backgroundColor: 'aliceblue', borderRadius: '15px', margin: 'auto', display: 'flex', alignItems: 'center', marginBottom: '20px', marginTop: '20px'}}>
                        <div>
                            <p style={{color: 'grey'}}><span style={{color: 'cornflowerblue'}}>No.{value.id}</span> - {value.title}</p>
                            <p>{value.body}</p>
                        </div>
                    </div>
                })
            )}
        </div>
    );
}
