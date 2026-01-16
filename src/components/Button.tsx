import React from "react";
import "../styles/components/_button.scss";

interface ButtonProps {
    label: string;
    onClick: () => void;
    disabled: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false }) => {
    return (
        <button className="button" onClick={onClick} disabled={disabled}>
            {label}
        </button>
    )
}

export default Button;