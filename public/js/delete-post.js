const deleteFormHandler = async (event) => {
    event.preventDefult();

    const id = window.location.toString().split('/')[
        window.locationtoString().split('/').length - 1
    ];
    console.log(id);

    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
        body: JSON.stringify({
            post_id: id,
        }),
        headers: {
            'Content-type': 'application/json',
        },
    });
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
  };

  document.querySelector('#delete').addEventListener('click', deleteFormHandler);