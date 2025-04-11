import styled from "styled-components"
import { H2 } from "../../../../components"
import { PostContentProps } from "../../../../../public/types"
import { SpecialPanel } from "../special-panel/special-panel"
import { useNavigate } from "react-router-dom"

const PostContentContainer: React.FC<PostContentProps> = ({
  className,
  post: { title, id, image_url, content, published_at },
}) => {
  const navigate = useNavigate()

  return (
    <div className={className}>
      <img src={image_url} alt={title} />
      <H2>{title}</H2>
      <SpecialPanel
        margin="0 0 20px 0"
        published_at={published_at}
        editButton="fa-pencil-square-o"
        editButtonOnClick={() => navigate(`/post/${id}/edit`)}
      />
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

  & .post-text {
    font-size: 18px;
    white-space: pre-line; /* Это ключевое свойство */
    line-height: 1.6; /* Для лучшей читаемости */
  }
`
