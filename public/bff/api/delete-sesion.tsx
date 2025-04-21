export const deleteSession = async (sessionId: string) =>
  await fetch(`http://localhost:3000/sessions/${sessionId}`, {
    method: "DELETE",
  })
