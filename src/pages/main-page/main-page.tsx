import styled from "styled-components"
import { ContainerProps } from "../../../public/types"
import { useEffect, useState } from "react"
import { useServerRequest } from "../../../public/hooks"
import { PostCard, Pagination } from "./components"
import { PAGINATION_LIMIT } from "../../../public/constants"

const MainPageContainer: React.FC<ContainerProps> = ({ className }) => {
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)
  const [totalPosts, setTotalPosts] = useState(0)
  const requestServer = useServerRequest()

  useEffect(() => {
    requestServer("fetchPosts", page, PAGINATION_LIMIT).then((postsRes) => {
      setPosts(postsRes.res)

      setTotalPosts(postsRes.total)
    })
  }, [requestServer, page])

  const totalPages = Math.ceil(totalPosts / PAGINATION_LIMIT)

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
      <Pagination setPage={setPage} page={page} totalPages={totalPages} />
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
