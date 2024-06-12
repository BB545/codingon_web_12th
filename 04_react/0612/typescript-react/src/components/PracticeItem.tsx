import React from 'react'
import { Post } from '../types/types'

interface Props {
    post: Post
}

export default function PracticeItem({ post }: Props) {
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
