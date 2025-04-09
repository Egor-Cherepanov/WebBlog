export const getComments = (postId: string) =>
  fetch(`http://localhost:3000/comments?post_id=${postId}`).then(
    (loadedComments) => loadedComments.json()
  )
