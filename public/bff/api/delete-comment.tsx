export const deleteComment = async (commentId: string) =>
  await fetch(`http://localhost:3000/comments/${commentId}`, {
    method: "DELETE",
  })
