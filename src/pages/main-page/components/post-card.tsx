import styled from "styled-components"
import { Link } from "react-router-dom"
import { PostCardProps } from "../../../../public/types"
import { Icon } from "../../../components"

const PostCardContainer: React.FC<PostCardProps> = ({
  className,
  id,
  title,
  published_at,
  comments_count,
  image_url,
}) => {
  return (
    <div className={className}>
      <Link to={`/post/${id}`}>
        {image_url && (
          <img src={image_url} alt={title} className="post-image" />
        )}
        <div className="post-card-footer">
          <h4 className="post-title">{title}</h4>
          <div className="post-info">
            <div className="published-at">
              <Icon id="fa-calendar-o" size="18px" margin="0 7px 0 0" />

              {published_at}
            </div>
            <div className="post-comments">
              <Icon id="fa-comment-o" size="18px" margin="0 7px 0 0" />
              {comments_count}
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export const PostCard = styled(PostCardContainer)`
  width: 280px;
  display: flex;
  flex-direction: column;
  margin: 20px;
  border: 1px solid #000;

  & .post-image {
    display: block;
    width: 100%;
    height: 150px;
  }

  & .post-card-footer {
    border-top: 1px solid #000;
    padding: 5px;
  }

  & .post-title {
    margin: 0;
    font-size: 16px;
    font-weight: 500;
  }

  & .post-info {
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
  }

  & .published-at {
    display: flex;
  }

  & .post-comments {
    display: flex;
  }
`
