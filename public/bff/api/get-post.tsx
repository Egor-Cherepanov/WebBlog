import { transformerPost } from "../transformers"

export const getPost = async (postId: string) =>
  fetch(`http://localhost:3000/posts/${postId}`)
    .then((res) => {
      if (res.ok) return res

      const error =
        res.status === 404
          ? "Такая страница не существует"
          : "Что-то пошло не так. Попробуйте еще раз позднее"

      return Promise.reject(error)
    })
    .then(async (loadedPost) => await loadedPost.json())
    .then((loadedPost) => {
      return loadedPost && transformerPost(loadedPost)
    })
