import styled from "styled-components"
import { Icon } from "../../../../components"
import { SpecialPanelProps } from "../../../../../public/types"
import { useDispatch } from "react-redux"
import { CLOSE_MODAL, openModal, removePostAsync } from "../../../../actions"
import { useServerRequest } from "../../../../../public/hooks"
import { useNavigate } from "react-router-dom"

const SpecialPanelContainer: React.FC<SpecialPanelProps> = ({
  id,
  className,
  published_at,
  editButton,
  editButtonOnClick,
}) => {
  const dispatch = useDispatch()
  const requestServer = useServerRequest()
  const navigate = useNavigate()

  const onPostRemove = (postToDeleteId: string) => {
    dispatch(
      openModal({
        text: "Удалить пост?",
        onConfirm: () => {
          dispatch(removePostAsync(requestServer, postToDeleteId)).then(() =>
            navigate("/")
          )
          dispatch(CLOSE_MODAL)
        },
        onCancel: () => dispatch(CLOSE_MODAL),
      })
    )
  }

  return (
    <div className={className}>
      {published_at && (
        <div className="published-at">
          <Icon id="fa-calendar-o" size="18px" />
          {published_at}
        </div>
      )}

      <div className="buttons-panel">
        <Icon id={editButton} size="18px" onClick={editButtonOnClick} />
        {published_at && (
          <Icon
            id="fa-trash-o"
            margin="0 0 0 10px"
            size="18px"
            onClick={() => onPostRemove(id)}
          />
        )}
      </div>
    </div>
  )
}

export const SpecialPanel = styled(SpecialPanelContainer)`
  margin: ${({ margin }) => margin || "20px 0"};
  display: flex;
  justify-content: space-between;
  font-size: 16px;

  & .published-at {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  & i {
    font-size: 18px;
  }

  & .buttons-panel {
    display: flex;
    gap: 10px;
  }
`
