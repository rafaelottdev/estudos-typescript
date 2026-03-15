import Input from "../form/Input"
import SendBtn from "../form/SendBtn"

type InputProps = {
  valor: any
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  sendComment: (event: React.SyntheticEvent<HTMLFormElement>) => void
}

const Form: React.FC<InputProps> = ({ valor, handleChange, sendComment }) => {
    return (
        <section>
            <form className="d-flex flex-column row-gap-2" onSubmit={sendComment}>
                <Input valor={valor} handleChange={handleChange} />

                <SendBtn />
            </form>
        </section>
    )
}

export default Form
