import React from 'react'

export default function PracticeItem({ post }: any) {
    return (
        <div className='PostItem'>
            <div>
                <span className='id'>No. {post.id}</span>
                <span className='title'>- {post.title}</span>
            </div>
            <p className='body'>{post.body.slice(0, 120)}...</p>
        </div>
    )
}
