import styled from "styled-components"
import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  // className?: string
  $width?: string
}

const ButtonContainer = ({ className, children, ...props }: ButtonProps) => {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  )
}

export const Button = styled(ButtonContainer)<{ $width?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  height: 32px;
  border: 1px solid rgb(0, 0, 0);
  background-color: rgb(238, 238, 238);
  width: ${({ $width }) => $width || "100%"}; // По умолчанию 100% ширины

  cursor: pointer;
`
