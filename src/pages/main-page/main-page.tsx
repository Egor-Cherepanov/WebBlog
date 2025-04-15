import styled from "styled-components"
import { ContainerProps } from "../../../public/types"
import { useEffect, useState } from "react"
import { useServerRequest } from "../../../public/hooks"
import { PostCard } from "./components"

const MainPageContainer: React.FC<ContainerProps> = ({ className }) => {
  const [posts, setPosts] = useState([])
  const requestServer = useServerRequest()

  useEffect(() => {
    requestServer("fetchPosts").then((postsRes) => {
      setPosts(postsRes.res)
    })
  }, [requestServer])

  return (
    <div className={className}>
      <div></div>
      <div className="post-list">
        {posts &&
          posts.map(
            ({ id, title, published_at, comments_count, image_url }) => (
              <PostCard
                key={id}
                id={id}
                title={title}
                published_at={published_at}
                comments_count={comments_count}
                image_url={image_url}
              />
            )
          )}
      </div>
    </div>
  )
}

export const MainPage = styled(MainPageContainer)`
  & .post-list {
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
  }
`
