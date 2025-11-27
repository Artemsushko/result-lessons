export const getPosts = async () =>
  fetch("http://localhost:3005/posts").then((loadedPosts) =>
    loadedPosts.json()
  );
