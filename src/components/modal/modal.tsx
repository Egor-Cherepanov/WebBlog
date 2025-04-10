import styled from "styled-components"
import { Button } from "../button/button"
import { useSelector } from "react-redux"
import {
  selectModalIsOpen,
  selectModalOnCancel,
  selectModalOnConfirm,
  selectModalText,
} from "../../selectors"
import { ContainerProps } from "../../../public/types"

const ModalContainer: React.FC<ContainerProps> = ({ className }) => {
  const text = useSelector(selectModalText)
  const onConfirm = useSelector(selectModalOnConfirm)
  const onCancel = useSelector(selectModalOnCancel)
  const isOpen = useSelector(selectModalIsOpen)

  if (!isOpen) {
    return null
  }

  return (
    <div className={className}>
      <div className="overlay">
        <div className="box">
          <h3>{text}</h3>
          <div className="buttons">
            <Button $width="120px" onClick={onConfirm}>
              Да
            </Button>
            <Button $width="120px" onClick={onCancel}>
              Отмена
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export const Modal = styled(ModalContainer)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 20;

  & .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }

  & .box {
    position: relative;
    top: 50%;
    transform: translate(0, -50%);
    width: 400px;
    margin: auto;
    background-color: #fff;
    border: 1px solid #000;
    z-index: 30;
    padding: 0 20px 20px;
    text-align: center;
  }

  & .buttons {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
  }
`
