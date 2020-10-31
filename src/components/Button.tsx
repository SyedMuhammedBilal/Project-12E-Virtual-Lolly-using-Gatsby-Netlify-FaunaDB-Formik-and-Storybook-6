import React from 'react'
import "../styles/Button.css"

export const Button: React.FC<ButtonProps> = ({ label, onClickFunc }) => {
    return (
        <button onClick={onClickFunc}>{label}</button>
        )
    }
    export interface ButtonProps {
        label: string
        onClickFunc: () => void
    }


