const deleteFormHandler = async (event) => {
    event.preventDefault();
  
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];

    console.log(id);
    };
    
    document
      .querySelector('#delete')
      .addEventListener('click', deleteFormHandler);
  