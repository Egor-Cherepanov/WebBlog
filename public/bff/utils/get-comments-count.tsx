export const getCommentsCount = (comments = [], postId) => {
  const postComments = comments.filter(({ post_id }) => postId === post_id)

  return postComments.length
}
