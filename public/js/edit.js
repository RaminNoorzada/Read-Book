const editFormHandler = async (event) => {
  event.preventDefault();


  const title = document.querySelector('#title').Value.trim();
  const content = document.querySelector('#content').Value.trim();

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  
  const response = await fetch(`/api/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      post_id: id, title, content
    }),
    Headers: {
      'Content-Type': 'aplication/json',
    },
  });

  if (response.ok) {
    document.location.replace('/dashboard/');
  } else {
    alert(response.statusText);
      
    }
}
  document
    .querySelector('#update')
    .addEventListener('click', deleteFormHandler);