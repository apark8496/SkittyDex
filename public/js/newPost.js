async function newPostHandler(event) {
    console.log("submit");
    event.preventDefault();

    const title = document.querySelector('#post-title').value;
    const post = document.querySelector('#post-text').value;

    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        post
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
      console.log(response);
    }
  }
  
  document.querySelector('.new-post-form').addEventListener('submit', newPostHandler);