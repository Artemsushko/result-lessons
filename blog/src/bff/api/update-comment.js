export const updateComment = async (updatedComment, id) => {
  return await fetch(`http://localhost:3005/comments/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedComment),
  }).then((res) => res.json());
};
