import styled from "styled-components"
import { Icon } from "../../../../components"
import { SpecialPanelProps } from "../../../../../public/types"

const SpecialPanelContainer: React.FC<SpecialPanelProps> = ({
  className,
  published_at,
  editButton,
  editButtonOnClick,
}) => {
  return (
    <div className={className}>
      <div className="published-at">
        <Icon id="fa-calendar-o" size="18px" />
        {published_at}
      </div>

      <div className="buttons-panel">
        <Icon
          id={editButton}
          margin="0 10px 0 0"
          size="18px"
          onClick={editButtonOnClick}
        />
        <Icon id="fa-trash-o" size="18px" />
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
