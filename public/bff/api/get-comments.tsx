export const getComments = (postId: string) => {
  const url =
    postId === ""
      ? "http://localhost:3000/comments"
      : `http://localhost:3000/comments?post_id=${postId}`

  return fetch(url).then((loadedComments) => loadedComments.json())
}
