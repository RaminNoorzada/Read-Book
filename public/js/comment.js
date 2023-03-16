const commentFormHandler = async (event) => {
  event.preventDefault();

  const comment_content = document.querySelector('#comment').value.trim();

  const post_id = window.location.toString().split("/")[
    window.location.toString().split("/")
  ];

  if (comment_content) {
    const response = await fetch("/api/comments", {
      method: 'POST',
      body: JSON.stringify({
        postId,
        comment_content
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusTest)
        document.querySelector("#comment-form").style.display = 'block';
    }
  }
};

document
  .querySelector('#new-comment-form')
  .addEventListener('submit', commentFormHandler);
