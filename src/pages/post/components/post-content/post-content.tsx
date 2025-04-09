import styled from "styled-components"
import { H2, Icon } from "../../../../components"
import { PostContentProps } from "../../../../../public/types"

const PostContentContainer: React.FC<PostContentProps> = ({
  className,
  post: { title, id, image_url, content, published_at },
}) => {
  return (
    <div className={className}>
      <img src={image_url} alt={title} />
      <H2>{title}</H2>
      <div className="special-panel">
        <div className="published-at">
          <Icon id="fa-calendar-o" size="18px" />
          {published_at}
        </div>

        <div className="buttons-panel">
          <Icon id="fa-pencil-square-o" margin="0 10px 0 0" size="18px" />
          <Icon id="fa-trash-o" size="18px" />
        </div>
      </div>
      <div className="post-text">{content}</div>
    </div>
  )
}

export const PostContent = styled(PostContentContainer)`
  & img {
    float: left;
    margin: 0 20px 16px 0;
  }
  & H2 {
    margin: 0 0 20px 0;
  }
  & .special-panel {
    margin: 0 0 20px 0;
    display: flex;
    justify-content: space-between;
    font-size: 16px;
  }
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

  & .post-text {
    font-size: 18px;
  }
`
