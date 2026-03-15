type InputProps = {
  valor: any
  handleChange: (event: any) => void
}

const Input: React.FC<InputProps> = ({ valor, handleChange }) => {
    return (
        <>
            <textarea value={valor} onChange={handleChange} id="floatingTextarea" className="form-control" style={{height: '80px', width: '500px', resize: 'none'}}></textarea>
        </>
    )
}

export default Input
