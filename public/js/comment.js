const commentFormHandler = async (event) => {
  event.preventDefault();

  const comment_content = document.querySelector('#comment').value.trim();

  const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length -1
  ]; 
  console.log(id);


  const response = await fetch(`/api/post/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({
      post_id: id,
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusTest)
      
    }
};

document
  .querySelector('#delete')
  .addEventListener('click', deleteFormHandler);
