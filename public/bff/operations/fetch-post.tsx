import { getPost, getComments, getUsers } from "../api"

// export const fetchPost = async (postId: string) => {
//   let post
//   let error

//   try {
//     post = await getPost(postId)
//   } catch (postError) {
//     error = postError
//   }

//   if (error) {
//     return {
//       error,
//       res: null,
//     }
//   }

//   const comments = await getComments(postId)

//   const users = await getUsers()

//   const commentsWithAuthor = comments.map((comment) => {
//     const user = users.find(({ id }) => id === comment.author_id)

//     return {
//       ...comment,
//       author: user?.login,
//     }
//   })

//   return {
//     error: null,
//     res: { ...post, comments: commentsWithAuthor },
//   }
// }

export const fetchPost = async (postId: string) => {
  try {
    const [post, comments, users] = await Promise.all([
      getPost(postId).catch(() => null),
      getComments(postId),
      getUsers(),
    ])

    if (!post) {
      throw new Error("Такая страница не существует")
    }

    const commentsWithAuthor = comments.map((comment) => ({
      ...comment,
      author:
        users.find(({ id }) => id === comment.author_id)?.login ||
        "Неизвестный автор",
    }))

    return {
      error: null,
      res: { ...post, comments: commentsWithAuthor },
    }
  } catch (error) {
    return {
      error: error instanceof Error ? error.message : "Неизвестная ошибка",
      res: null,
    }
  }
}
