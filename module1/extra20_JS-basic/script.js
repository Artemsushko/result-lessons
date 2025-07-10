const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';
const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

const postComments = document.querySelector('.post__comments');

function createCommentsElement(comments) {
  comments.forEach((comment) => {
    const { body: text, email: author } = comment;

    const postComment = document.createElement('div');
    postComment.className = 'post-comment';

    const commentAuthor = document.createElement('span');
    commentAuthor.className = 'post-comment__author';
    commentAuthor.textContent = author;

    const commentText = document.createElement('span');
    commentText.className = 'post-comment__text';
    commentText.textContent = text;

    postComment.append(commentAuthor, commentText);
    postComments.append(postComment);
  });
}

function createPostElement(post, comments) {
  const { body: text, title } = post;

  const postTitile = document.querySelector('.post__title');
  postTitile.textContent = title;

  const postText = document.querySelector('.post__text');
  postText.textContent = text;

  createCommentsElement(comments);
}

async function renderPost(postId) {
  try {
    const postRequest = await fetch(`${POSTS_URL}/${postId}`);
    const postResponse = await postRequest.json();
    const commentsRequest = await fetch(`${COMMENTS_URL}?postId=${postId}`);
    const commentsResponse = await commentsRequest.json();
    if (!postRequest.ok || !commentsRequest.ok) {
      throw new Error('Error');
    }
    createPostElement(postResponse, commentsResponse);
  } catch (error) {
    console.error('error', error);
  }
}

renderPost(1);
