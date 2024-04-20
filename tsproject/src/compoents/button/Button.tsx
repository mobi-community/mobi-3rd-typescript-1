import type { FC, PropsWithChildren } from 'react';
import type { ButtonProps } from './Button.type';

const Button: FC<PropsWithChildren<ButtonProps>> = ( props, rest ) => {
  return (
    <button
      style={{
        backgroundColor: props.variant === "primary" ? "blue" : "red",
        fontSize: props.size === "small" ? "10px" : "20px",
        color: "white",
        padding: "10px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
      }}
      {...rest}
    >
      {props.children}
    </button>
  );
};

export default Button;
