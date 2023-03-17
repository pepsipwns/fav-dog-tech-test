import { ButtonProps } from './Button.types'

const Button = (props: ButtonProps) => {
  const { title, disabled, onClick } = props
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="flex flex-1 justify-center items-center gap-2 p-2 bg-blue-300 rounded"
    >
      {title}
    </button>
  )
}

Button.defaultProps = {
  disabled: false,
  onClick: null,
}

export default Button
