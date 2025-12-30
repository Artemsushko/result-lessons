export const addPost = (newPost) =>
  fetch("http://localhost:3005/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newPost),
  }).then((res) => res.json());
