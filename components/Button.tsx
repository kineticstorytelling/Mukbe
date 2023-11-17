import React from 'react'

interface ButtonProps {
    // children:React.ReactNode;
    className?: string;
    onClick?: (event: React.<HTMLButtonElement>) => void;
}

const Button = (props: ButtonProps) => {
  return (
    <button onClick={props.onClick}>Button</button>
  )
}

export default Button