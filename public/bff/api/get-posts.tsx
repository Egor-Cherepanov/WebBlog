// import { PostState } from "../../types"
import { transformerPost } from "../transformers"

export const getPosts = () =>
  fetch("http://localhost:3000/posts")
    .then((loadedPosts) => loadedPosts.json())
    .then((loadedPosts) => {
      return loadedPosts && loadedPosts.map(transformerPost)
    })
