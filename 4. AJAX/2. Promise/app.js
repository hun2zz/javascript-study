// 서버 url
const URL = "https://jsonplaceholder.typicode.com/posts/";
const URL2 = "http://localhost:8383/api/v1/replies/30";
//화면에 게시물을 렌더링하는 함수
// ul 태그 가져오기
const $postUl = document.querySelector(".posts");
const renderPosts = (postList) => {
  postList.forEach((post) => {
    // 템플릿 태그 가져오기
    const $template = document.getElementById("single-post");
    //템플릿 태그에서 li 태그 추출
    const $li = document.importNode($template.content, true);
    $li.querySelector("h2").textContent = post.title;
    $li.querySelector("p").textContent = post.body;
    $postUl.appendChild($li);
  });
};
//서버에서 게시물 정보 받아오기
fetch(URL)
  .then((res) => res.json())
  .then((json) => {
    //게시물 정보 화면에 그리기
    renderPosts(json);
  });


