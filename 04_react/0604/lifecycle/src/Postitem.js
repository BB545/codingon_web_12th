export default function Postitem({post}) {
    return (
        <div>
            <div>
                <span>No.{post.id}</span>
                <span> - {post.title}</span>
            </div>
            <p>{post.body.slice(0, 120)}...</p>
        </div>
    )
}
