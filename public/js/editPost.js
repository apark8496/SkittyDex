// A function to edit a post
async function editFormHandler(event) {
    event.preventDefault();

    // get the post id from the url
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const title = document.querySelector("#post-title").value;
    const post = document.querySelector("#post-text").value;

    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({title, post}),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    if (response.ok) {
        document.location.replace('/dashboard');
        } else {
        alert(response.statusText);
        }

  }
  
  document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);