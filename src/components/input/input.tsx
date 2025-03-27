import styled from "styled-components"
import { forwardRef } from "react"
import { InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  $width?: string | number
}

const InputContainer = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return <input className={className} {...props} ref={ref} />
  }
)
export const Input = styled(InputContainer)<{ $width?: string }>`
  width: ${({ $width }) => $width || "100%"}; // По умолчанию 100% ширины
  height: 40px;
  margin: 0 0 10px;
  padding: 10px;
  border: 1px solid #000;
  border-radius: 3px;
  font-size: 18px;
`
