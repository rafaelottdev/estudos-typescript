import Comment from "../Comment.tsx"

type CommentMessage = {
    comment: string | undefined
    commentList: string[]
    commentDelete: (index: number) => void
}

const CommentSection: React.FC<CommentMessage> = ({ comment, commentList, commentDelete }) => {
    return (
        <section style={{width: '500px', marginBottom: '20px'}}>
            <Comment comment={comment} commentList={commentList} commentDelete={commentDelete} />
        </section>
    )
}

export default CommentSection
