const URL = "https://yts.mx/api/v2/list_movies.json";
const sortYear =
  "https://yts.mx/api/v2/list_movies.json?sort_by=year&order_by=asc";
const sortLike =
  "https://yts.mx/api/v2/list_movies.json?sort_by=like_count&order_by=desc";
const sortDownload =
  "https://yts.mx/api/v2/list_movies.json?sort_by=download_count&order_by=desc";
const $movieUl = document.querySelector(".movie-list");
const renderMovies = (movieList) => {
  $movieUl.innerHTML = "";
  movieList.forEach((movie) => {
    // console.log(movie.title);
    const $template = document.getElementById("moviepost");
    const $li = document.importNode($template.content, true);
    console.log($li);
    $li.querySelector(".inner .title").textContent = movie.title;
    $li.querySelector(".inner .year").textContent = movie.year + "년";
    $li.querySelector(".inner .rating").textContent = movie.rating + "점";
    $li.querySelector(".img-box > img").src = movie.large_cover_image;
    $movieUl.appendChild($li);
  });
};

fetch(URL)
  .then((res) => res.json())
  .then((json) => {
    // console.log(json.data.movies);
    renderMovies(json.data.movies);
  });

document.getElementById("s_year").addEventListener("click", (e) => {
  fetch(sortYear)
    .then((res) => res.json())
    .then((json) => {
      console.log(json.data.movies);
      renderMovies(json.data.movies);
    });
});

document.getElementById("s_like").addEventListener("click", (e) => {
  fetch(sortLike)
    .then((res) => res.json())
    .then((json) => {
      console.log(json.data.movies);
      renderMovies(json.data.movies);
    });
});

document.getElementById("s_rate").addEventListener("click", (e) => {
  fetch(sortDownload)
    .then((res) => res.json())
    .then((json) => {
      console.log(json.data.movies);
      renderMovies(json.data.movies);
    });
});
