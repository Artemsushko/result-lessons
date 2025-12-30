export const addComment = (newComment) =>
  fetch("http://localhost:3005/comments", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newComment),
  });
