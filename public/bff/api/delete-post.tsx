export const deletePost = async (postToDeleteId: string) =>
  await fetch(`http://localhost:3000/posts/${postToDeleteId}`, {
    method: "DELETE",
  })
