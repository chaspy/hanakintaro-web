import './Button.css'

type ButtonProps = {
  text: string
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

function Button(props: ButtonProps) {
  return (
    <button className={props.text} onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

export default Button
