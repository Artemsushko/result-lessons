export const updatePost = async (updatedPost, id) => {
  return await fetch(`http://localhost:3005/posts/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedPost),
  }).then((res) => res.json());
};
