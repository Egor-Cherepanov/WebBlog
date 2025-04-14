import styled from "styled-components"
import { useEffect, useLayoutEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { PostContent, Comments, PostForm } from "./components"
import { useParams, useMatch } from "react-router-dom"
import { useServerRequest } from "../../../public/hooks"
import { ContainerProps, PostState } from "../../../public/types"
import { selectPost } from "../../selectors"
import { loadPost, RESET_POST_DATA } from "../../actions"

const PostContainer: React.FC<ContainerProps> = ({ className }) => {
  const dispatch = useDispatch()
  const params = useParams<{ postId: string }>()
  const isEditing = useMatch("/post/:id/edit")
  const isCreating = useMatch("/post")
  const requestServer = useServerRequest()
  const post: PostState = useSelector(selectPost)

  useLayoutEffect(() => {
    dispatch(RESET_POST_DATA)
  }, [dispatch, isCreating])

  useEffect(() => {
    if (isCreating) return

    dispatch(loadPost(requestServer, params.postId))
  }, [requestServer, dispatch, params.postId, isCreating])

  return (
    <div className={className}>
      {isCreating || isEditing ? (
        <PostForm post={post} />
      ) : (
        <>
          <PostContent post={post} />
          <Comments comments={post.comments || []} postId={post.id} />
        </>
      )}
    </div>
  )
}

export const Post = styled(PostContainer)`
  display: flex;
  padding: 0 80px;
  margin: 40px 0;
  flex-direction: column;
  gap: 20px;
`
