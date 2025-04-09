import styled from "styled-components"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { PostContent, Comments } from "./components"
import { useParams } from "react-router-dom"
import { useServerRequest } from "../../../public/hooks"
import { ContainerProps, PostState } from "../../../public/types"
import { selectPost } from "../../selectors"
import { loadPost } from "../../actions"

const PostContainer: React.FC<ContainerProps> = ({ className }) => {
  const dispatch = useDispatch()
  const params = useParams<{ postId: string }>()
  const requestServer = useServerRequest()
  const post: PostState = useSelector(selectPost)

  useEffect(() => {
    dispatch(loadPost(requestServer, params.postId))
  }, [requestServer, dispatch, params.postId])
  // debugger

  return (
    <div className={className}>
      <PostContent post={post} />
      <Comments comments={post.comments || []} postId={post.id} />
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
