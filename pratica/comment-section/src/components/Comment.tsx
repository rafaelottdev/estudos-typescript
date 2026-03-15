type CommentMessage = {
    comment: string | undefined
    commentList: string[]
    commentDelete: (index: number) => void
}

const Comment: React.FC<CommentMessage> = ({ comment, commentList, commentDelete }) => {

    return (
        <>
            {
                comment ? 
                
                commentList.map((txt, index) => {
                    return (
                        <div className="d-flex align-items-center" key={index} style={{width: '100%', marginBottom: '15px', position: 'relative', paddingRight: '75px'}}>
                            <div style={{border: '.5px solid rgba(255, 255, 255, 0.2)', marginRight: '10px', padding: '3px 5px', borderRadius: '5px'}}>
                                <p className="text-primary" style={{marginBottom: '0', marginTop: '0', overflowWrap: "break-word",
                                wordBreak: "break-word"}}>{txt}</p>
                            </div>

                            <button  className="btn btn-danger" style={{position: 'absolute', right: '0'}} onClick={() => commentDelete(index)}>Excluir</button>
                        </div>
                    )
                })

                :

                ""
            }
        </>
    )
}

export default Comment
