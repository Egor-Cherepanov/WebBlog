import styled, { keyframes } from "styled-components"
import { H2 } from "../h2/h2"

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`

const shake = keyframes`
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
  20%, 40%, 60%, 80% { transform: translateX(5px); }
`

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  background-color: ${({ theme }) => theme?.colors?.errorBg || "#ffebee"};
  border-radius: 8px;
  border-left: 4px solid ${({ theme }) => theme?.colors?.error || "#d32f2f"};
  width: 600px;
  margin: 1rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.3s ease-out, ${shake} 0.5s ease-in-out;
`

const ErrorIcon = styled.div`
  font-size: 5rem;
  color: #333;
  filter: grayscale(100%);
  opacity: 0.8;
`

const ErrorMessage = styled.div`
  color: ${({ theme }) => theme?.colors?.errorText || "#5f2120"};
  text-align: center;
  line-height: 1.5;
`

const ErrorDetails = styled.details`
  width: 100%;
  margin-top: 1rem;
  summary {
    cursor: pointer;
    color: ${({ theme }) => theme?.colors?.error || "#d32f2f"};
    font-size: 0.9rem;
  }
  pre {
    background: rgba(0, 0, 0, 0.05);
    padding: 1rem;
    border-radius: 4px;
    overflow-x: auto;
    margin-top: 0.5rem;
    font-size: 0.85rem;
  }
`

interface ErrorProps {
  error?: string | Error | null
  title?: string
  showDetails?: boolean
}

export const Error = ({
  error,
  title = "Ошибка",
  showDetails = true,
}: ErrorProps) => {
  if (!error) return null

  const errorMessage = typeof error === "string" ? error : error.message
  const errorStack = typeof error === "string" ? null : error.stack

  return (
    <ErrorContainer role="alert">
      <ErrorIcon>⚠️</ErrorIcon>
      <H2>{title}</H2>
      <ErrorMessage>{errorMessage}</ErrorMessage>

      {showDetails && errorStack && (
        <ErrorDetails>
          <summary>Подробности</summary>
          <pre>{errorStack}</pre>
        </ErrorDetails>
      )}
    </ErrorContainer>
  )
}
