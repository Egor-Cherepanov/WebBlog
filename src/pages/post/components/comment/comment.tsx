import styled from "styled-components"
import { CommentProps } from "../../../../../public/types"
import { Icon } from "../../../../components"
import { useDispatch } from "react-redux"
import { openModal, removeComment, CLOSE_MODAL } from "../../../../actions"
import { useServerRequest } from "../../../../../public/hooks"

const CommentContainer: React.FC<CommentProps> = ({
  postId,
  className,
  id,
  content,
  published_at,
  author,
}) => {
  const dispatch = useDispatch()
  const requestServer = useServerRequest()

  const onCommentRemove = (commentToDeleteId: string) => {
    dispatch(
      openModal({
        text: "Удалить комментарий?",
        onConfirm: () => {
          dispatch(removeComment(requestServer, commentToDeleteId, postId))
          dispatch(CLOSE_MODAL)
        },
        onCancel: () => dispatch(CLOSE_MODAL),
      })
    )
  }

  return (
    <div className={className}>
      <div className="comment">
        <div className="information-panel">
          <span className="author">
            <Icon id="fa-user-circle-o" size="18px" margin="0 10px 0 0" />
            {author}
          </span>
          <span className="published-at">
            <Icon id="fa-calendar-o" size="18px" margin="0 10px 0 0" />
            {published_at}
          </span>
        </div>
        <div className="comment-text">{content}</div>
      </div>
      <Icon
        id="fa-trash-o"
        size="18px"
        margin="0 0 0 10px"
        className="trash-icon"
        onClick={() => onCommentRemove(id)}
      />
    </div>
  )
}

export const Comment = styled(CommentContainer)`
  display: flex;
  margin: 10px 0 0;

  & .comment {
    width: 550px;
    border: 1px solid #000;
    padding: 5px 10px;
  }

  & .information-panel {
    display: flex;
    justify-content: space-between;
  }

  & .author {
    display: flex;
  }

  & .published-at {
    display: flex;
  }

  & .trash-icon {
  }
`
