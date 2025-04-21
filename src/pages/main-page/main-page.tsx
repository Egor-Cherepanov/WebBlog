import styled from "styled-components"
import { ContainerProps } from "../../../public/types"
import { useCallback, useEffect, useState } from "react"
import { useServerRequest } from "../../../public/hooks"
import { PostCard, Pagination, Search } from "./components"
import { PAGINATION_LIMIT } from "../../../public/constants"
import { debounce } from "../../../public/bff/utils"

const MainPageContainer: React.FC<ContainerProps> = ({ className }) => {
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)
  const [totalPosts, setTotalPosts] = useState(0)
  const [shouldSearch, setShouldSearch] = useState(false)
  const [searchPhrase, setSearchPhrase] = useState("")
  const requestServer = useServerRequest()

  const debouncedSearch = debounce(() => {
    setShouldSearch(!shouldSearch)
  })

  useEffect(() => {
    requestServer("fetchPosts", page, PAGINATION_LIMIT, searchPhrase).then(
      (postsRes) => {
        setPosts(postsRes.res)

        setTotalPosts(postsRes.total)
      }
    )
  }, [requestServer, page, shouldSearch])

  const totalPages = Math.ceil(totalPosts / PAGINATION_LIMIT)

  const onSearch = ({ target }) => {
    setSearchPhrase(target.value)

    debouncedSearch()
  }

  return (
    <div className={className}>
      <div className="posts-and-search">
        <Search onChange={onSearch} searchPhrase={searchPhrase} />
        {posts.length ? (
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
        ) : (
          <div className="posts-not-found">
            Посты с таким заголовком не найдены
          </div>
        )}
      </div>
      {totalPages <= 1 ? (
        <></>
      ) : (
        <Pagination setPage={setPage} page={page} totalPages={totalPages} />
      )}
    </div>
  )
}

export const MainPage = styled(MainPageContainer)`
  // display: flex;
  // flex-direction: column;
  // justify-content: space-between;

  // & .posts-and-search {
  // }

  & .post-list {
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
  }

  & .posts-not-found {
    text-align: center;
    font-size: 20px;
    // display: flex;
    margin: 140px 0 140px 0;
  }
`
