import { useState } from 'react'
import './App.css'

import CommentSection from "./components/layout/CommentSection.tsx"
import Form from './components/layout/Form.tsx'

const App: React.FC  = () => {
  const [valor, setValor] = useState<string>("")
  const [comment, setComment] = useState<string>("")
  const [commentList, setCommentList] = useState<string[]>([])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValor(event.target.value)
  }

  const sendComment = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()
    setComment(valor)
    setCommentList([...commentList, valor])
    cleanInput()
  }

  const commentDelete = (index: number) => {
    setCommentList(commentList.filter((_, i) => {
      return i !== index
    }))
  }

  const cleanInput = () => {
    setValor("")
  }

  return (
    <main className="vw-100 vh-100 bg-dark d-flex justify-content-center align-items-center flex-column">
      <CommentSection comment={comment} commentList={commentList} commentDelete={commentDelete} />

      <Form valor={valor} handleChange={handleChange} sendComment={sendComment} />
    </main>
  )
}

export default App
