// Com o react + typescript é possivel tipar props é preciso utilizar o FunctionComponent
// Para definir um children é utilizar o ReactNode que é outra interface, o ReactNode é um elemento do react (ex: <div><div>)
// Button.tsx

// import { FunctionComponent, ReactNode } from 'react'

// interface ButtonProps {
//   text: string
//   onClick?: () => {}
//   children?: ReactNode
// }

// const Button: FunctionComponent<ButtonProps> = ({ text, onClick }) => {
//    return <div onClick={onClick}>{text}<div>
// }

// export default Button

// <Button text='teste'/>
