import { useState } from "react"
import { Comment } from "../comment/comment"
import styled from "styled-components"
import { Icon } from "../../../../components"
import { CommentsProps } from "../../../../../public/types"
import { useDispatch, useSelector } from "react-redux"
import { selectUserId } from "../../../../selectors"
import { useServerRequest } from "../../../../../public/hooks"
import { addComment } from "../../../../actions"

const CommentsContainer: React.FC<CommentsProps> = ({
  className,
  comments,
  postId,
}) => {
  const [newComment, setNewComment] = useState("")
  const currentUserId = useSelector(selectUserId)
  const dispatch = useDispatch()
  const requestServer = useServerRequest()

  const onNewCommentAdd = (
    requestServer: (operation: string, ...params: any[]) => Promise<any>,
    postId: string,
    currentUserId: string,
    content: string
  ) => {
    dispatch(addComment(requestServer, postId, currentUserId, content))
    setNewComment("")
  }

  return (
    <div className={className}>
      <div className="new-comment">
        <textarea
          name="comment"
          value={newComment}
          placeholder="Комментарий..."
          onChange={({ target }) => setNewComment(target.value)}
        ></textarea>
        <Icon
          id="fa-paper-plane-o"
          size="18px"
          margin="0 0 0 10px"
          onClick={() =>
            onNewCommentAdd(requestServer, postId, currentUserId, newComment)
          }
        />
      </div>
      <div className="comments">
        {comments.length == 0 ? (
          <div className="no-comments">
            Комментариев к этой публикации пока нет
          </div>
        ) : (
          comments.map(({ id, author_id, content, published_at, author }) => (
            <Comment
              postId={postId}
              key={id}
              id={id}
              author_id={author_id}
              content={content}
              published_at={published_at}
              author={author}
            />
          ))
        )}
      </div>
    </div>
  )
}

export const Comments = styled(CommentsContainer)`
  width: 580px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  & .new-comment {
    display: flex;
  }

  & .new-comment textarea {
    resize: none;
    width: 550px;
    height: 120px;
    font-size: 18px;
  }

  & .no-comments {
    text-align: center;
    color: #666;
    padding: 20px;
  }
`
