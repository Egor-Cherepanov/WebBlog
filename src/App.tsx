import { Route, Routes } from "react-router-dom"
import { Header, Footer, Modal, Error } from "./components"
import styled from "styled-components"
import { Authorization, Registration, Users, Post, MainPage } from "./pages"
import { ERROR } from "../public/constants"
import { useLayoutEffect } from "react"
import { setUser } from "./actions"
import { useDispatch } from "react-redux"

const AppColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1000px;
  min-height: 100%;
  margin: 0 auto;
  background-color: #fff;
`

const Page = styled.div`
  padding: 120px 0 20px;
`

function Blog() {
  const dispatch = useDispatch()

  useLayoutEffect(() => {
    const currentUserDataJSON = sessionStorage.getItem("userData")

    if (!currentUserDataJSON) return

    const currentUserData = JSON.parse(currentUserDataJSON)

    dispatch(setUser(currentUserData))
  }, [dispatch])

  return (
    <AppColumn>
      <Header />
      <Page>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Authorization />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/users" element={<Users />} />
          <Route path="/post" element={<Post />} />
          <Route path="/post/:postId" element={<Post />} />
          <Route path="/post/:postId/edit" element={<Post />} />
          <Route path="*" element={<Error error={ERROR.PAGE_NOT_EXIST} />} />
        </Routes>
      </Page>
      <Footer />
      <Modal />
    </AppColumn>
  )
}

export default Blog
