import styled from "styled-components"
import { useEffect, useLayoutEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { PostContent, Comments, PostForm } from "./components"
import { Error, Loader, PrivateContent } from "../../components"
import { useParams, useMatch } from "react-router-dom"
import { useServerRequest } from "../../../public/hooks"
import { ContainerProps, PostState } from "../../../public/types"
import { selectPost } from "../../selectors"
import { loadPost, RESET_POST_DATA } from "../../actions"
import { ROLE } from "../../../public/constants"

const PostContainer: React.FC<ContainerProps> = ({ className }) => {
  const [error, setError] = useState("")
  const dispatch = useDispatch()
  const params = useParams<{ postId: string }>()
  const [isLoading, setIsLoading] = useState(true)
  const isEditing = useMatch("/post/:id/edit")
  const isCreating = useMatch("/post")
  const requestServer = useServerRequest()
  const post: PostState = useSelector(selectPost)

  useLayoutEffect(() => {
    dispatch(RESET_POST_DATA)
  }, [dispatch, isCreating])

  useEffect(() => {
    if (isCreating) {
      setIsLoading(false)
      return
    }

    dispatch(loadPost(requestServer, params.postId)).then((postData) => {
      if (postData.error) {
        setError(postData.error)
        setIsLoading(false)
      } else {
        setError("")
        setIsLoading(false)
      }
    })
  }, [requestServer, dispatch, params.postId, isCreating])

  if (isLoading) {
    return <Loader />
  }

  const SpecificPostPage =
    isCreating || isEditing ? (
      <PrivateContent access={[ROLE.ADMIN]}>
        <div className={className}>
          <PostForm post={post} />
        </div>
      </PrivateContent>
    ) : (
      <div className={className}>
        <PostContent post={post} />
        <Comments comments={post.comments || []} postId={post.id} />
      </div>
    )

  return error ? (
    <Error error={error} />
  ) : (
    <div className={className}>{SpecificPostPage}</div>
  )
}

export const Post = styled(PostContainer)`
  display: flex;
  padding: 0 80px;
  margin: 40px 0;
  flex-direction: column;
  gap: 20px;
`
