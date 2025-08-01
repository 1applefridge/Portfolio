document.addEventListener("DOMContentLoaded", function () {
  const blogList = document.getElementById("blog-list");

  fetch('posts.json')
    .then(response => response.json())
    .then(posts => {
      posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('blog-post');
        postElement.innerHTML = `
          <h2>${post.title}</h2>
          <small>${post.date}</small>
          <p>${post.content}</p>
        `;
        blogList.appendChild(postElement);
      });
    })
    .catch(error => console.error('Error loading blog posts:', error));
    // Load Header
  fetch('header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header').innerHTML = data;
    })
    .catch(error => console.error('Could not load header:', error));

  // Load Footer
  fetch('footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer').innerHTML = data;
    })
    .catch(error => console.error('Could not load footer:', error));
});
