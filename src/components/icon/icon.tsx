import React from "react"
import { IconContainerProps } from "../../../public/types"
import styled from "styled-components"

const IconContainer: React.FC<IconContainerProps> = ({
  className,
  id,
  onClick,
}) => {
  return (
    <div className={className} onClick={onClick}>
      <i className={`fa ${id}`} aria-hidden="true"></i>
    </div>
  )
}

export const Icon = styled(IconContainer)<IconContainerProps>`
  font-size: ${({ size }) => size || "24px"};
  margin: ${({ margin }) => margin || 0};
  cursor: pointer;
`
