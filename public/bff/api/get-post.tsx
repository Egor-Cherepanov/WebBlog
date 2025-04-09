import { transformerPost } from "../transformers"

export const getPost = async (postId: string) =>
  fetch(`http://localhost:3000/posts/${postId}`)
    .then(async (loadedPost) => await loadedPost.json())
    .then((loadedPost) => {
      return loadedPost && transformerPost(loadedPost)
    })
