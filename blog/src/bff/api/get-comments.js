export const getComments = () =>
  fetch("http://localhost:3005/comments").then((loadedComments) =>
    loadedComments.json()
  );
