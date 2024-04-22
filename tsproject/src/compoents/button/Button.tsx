import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: "primary";
    size: "small";
    children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
    variant,
    size,
    children,
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
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;
