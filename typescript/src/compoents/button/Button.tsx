import { FC, PropsWithChildren } from "react"
type BtnProps = {
  variant?: "primary"
  size?: "small"
  onClick: () => void
}
const Button: FC<PropsWithChildren<BtnProps>> = ({
  variant,
  size,
  children,
  onClick,
  ...rest
}) => {
  return (
    <button
      style={{
        backgroundColor: variant === "primary" ? "blue" : "red",
        fontSize: size === "small" ? "10px" : "20px",
        color: "white",
        padding: "10px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
      }}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
