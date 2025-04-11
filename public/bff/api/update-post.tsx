export const updatePost = async ({
  id,
  imageRef,
  titleRef,
  contentRef,
}): Promise<Response> =>
  await fetch(`http://localhost:3000/posts/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      title: titleRef,
      image_url: imageRef,
      content: contentRef,
    }),
  })
