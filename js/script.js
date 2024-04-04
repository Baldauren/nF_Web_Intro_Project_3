function createPost(post, imageUrl) {
  return `
    <a class="main__link" href="/index2.html">
    <div class="post__item mt-5">
      <div class="wrapper d-flex flex-row justify-content-between">
        <div class="post__text">
          <span class="authors__name">
            <img
              style="border-radius: 100%"
              src="https://picsum.photos/20"
              alt=""
            />
            <span class="authors__name-span">Authors name</span> in
            <span class="authors__name-span">Topics Name</span> ·7 july
          </span>
          <p class="post__title mt-4 fs-2 fw-bold mb-0">
            ${post.title}
          </p>
          <p class="post__descr mb-0 mt-5">
              ${post.body}
          </p>
          <div class="post__info d-flex flex-row justify-content-between mt-5">
            <div class="post__info-text">
              <button class="post__info-lang">Java Script</button>
              <span>12 min read </span> ·
              <span> Selected for you</span>
            </div>
            <div class="post__info-btns">
              <div class="post__info-btn"></div>
              <div class="post__info-btn"></div>
              <div class="post__info-btn"></div>
            </div>
          </div>
        </div>
        <div class="post__img">
          <img src="${imageUrl}" alt="Random Image">
        </div>
      </div>
    </div>
  </a>
  `;
}

function getRandomImageUrl() {
  return fetch(
    "https://random.imagecdn.app/v1/image?width=500&height=500&category=buildings&format=json"
  )
    .then((res) => res.json())
    .then((data) => data.url);
}

addEventListener("DOMContentLoaded", function () {
  const newPost = document.querySelector("#post");

  for (let i = 1; i <= 10; i++) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${i}`)
      .then((res) => res.json())
      .then((data) => {
        getRandomImageUrl().then((imageUrl) => {
          newPost.innerHTML += createPost(data, imageUrl);
        });
        console.log(data);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  }
});

document.addEventListener("DOMContentLoaded", () => {});
