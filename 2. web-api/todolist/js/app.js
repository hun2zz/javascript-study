//========= 전역 변수 영역 ========//

// 서버와 통신할 데이터
const todos = [
  {
    id: 1,
    text: "할 일 1",
    done: false,
  },
  {
    id: 2,
    text: "할 일 2",
    done: false,
  },
  {
    id: 3,
    text: "할 일 3",
    done: false,
  },
];

//========= 함수 정의 영역 ========//

// 새로운 할 일을 li태그로 만들어서 ul에 추가하는 함수
function renderNewTodoElement({ id, text }) {
  // 2. li태그 생성하기
  const $newTodoLi = document.createElement("li");
  // 2-1. 생성한 태그에 텍스트 추가하기
  // 2-2. 클래스, data-id 추가하기
  $newTodoLi.classList.add("todo-list-item");
  $newTodoLi.dataset.id = id;
  // 2-3. li의 자식들 추가하기
  $newTodoLi.innerHTML = `
            <label class="checkbox">
              <input type="checkbox">
              <span class="text">${text}</span>
            </label>
            <div class="modify">
              <span class="lnr lnr-undo"></span>
            </div>
            <div class="remove">
              <span class="lnr lnr-cross-circle"></span>
            </div>
  `;

  // 3. 생성한 태그 ul에 추가하기
  const $todoListUl = document.querySelector(".todo-list");
  $todoListUl.appendChild($newTodoLi);
}

// 새로운 할 일을 추가하는 함수
function insertTodoData() {
  // 1. 입력한 텍스트 읽어오기
  const $todoText = document.getElementById("todo-text");
  const inputText = $todoText.value;

  // 새 할 일의 아이디 값을 생성하는 함수
  const makeNewId = () =>
    todos.length === 0 ? 1 : todos[todos.length - 1].id + 1;

  // 할 일 데이터 배열에 새로운 할 일 데이터 추가하기

  // todos 배열에 새로운 할일을 객체로 포장해서 추가해야 함
  // 1. 새로운 할 일 데이터를 객체로 만들기
  const newTodo = {
    id: makeNewId(),
    text: inputText,
    done: false,
  };

  // 2. 배열에 추가하기
  todos.push(newTodo);

  // 새로운 할 일 화면에 렌더링하기
  renderNewTodoElement(newTodo);
}

// 배열에서 삭제된 할 일 객체를 지우는 함수
function removeTodoData(dataId) {
  const index = todos.findIndex((todo) => todo.id === dataId);
  todos.splice(index, 1);
  console.log(todos);
}

// 할 일 완료 상태 데이터 처리
function toggleDone(dataId) {
  // 체크박스 체크및 해제 시 todos배열에 있는 특정 객체의 done프로퍼티를
  // 반대값으로 변경해야 함

  // 1. 클릭한 체크박스가 갖고 있던 id 파라미터로 받기
  // 2. 배열을 순회하여 dataId와 일치하는 id를 가진 객체 찾아내기
  const todo = todos.find((todo) => todo.id === dataId);
  if (todo) todo.done = !todo.done;
}

//========= 함수 실행 영역 - 함수 호출, 이벤트 리스너 등록 ========//

// 추가 버튼 클릭 이벤트
document.getElementById("add").addEventListener("click", (e) => {
  e.preventDefault(); // form의 submit중단
  insertTodoData();
});

// 삭제 버튼 클릭 이벤트
document.querySelector(".todo-list").addEventListener("click", (e) => {
  // 클릭한 버튼이 포함된 li를 탐색
  const $targetLi = e.target.closest(".todo-list-item");
  // 데이터 아이디 추출
  const dataId = +$targetLi.dataset.id;

  if (e.target.matches(".remove span")) {
    // console.log('삭제 버튼 클릭!');
    // 삭제 처리 진행

    // 화면에서 제거
    document.querySelector(".todo-list").removeChild($targetLi);
    $targetLi.remove();

    // 배열에서 데이터 제거
    removeTodoData(dataId);
  } else if (e.target.matches(".checkbox input[type=checkbox]")) {
    // 체크박스를 클릭하면
    // 체크 화면 렌더링 처리
    e.target.closest(".checkbox").classList.toggle("checked");
    // 체크 데이터 처리
    toggleDone(dataId);
  } else if (e.target.matches(".modify .lnr-undo")) {
    //1-1 수정 모드 진입하고 아이콘을 바꿔야함
    const replaceIcon = e.target;
    // 1- 2 span.lnr-checkmark-circle로 교체
    replaceIcon.classList.replace(`lnr-undo`, `lnr-checkmark-circle`);

    //2 span text가 input text로 교체
    const replaceText =
      replaceIcon.parentElement.previousElementSibling.lastElementChild;

    const replacebox = replaceIcon.parentElement.previousElementSibling;

    // 새로운 input 요소 생성
    const $newInput = document.createElement("input");
    $newInput.type = "text"; // input 요소의 타입을 설정
    $newInput.value = replaceText.textContent; // 내용 복사

    replacebox.replaceChild($newInput, replaceText);
    $newInput.classList.add(`modify-input`);

    //2-2 span.text를 input.modify-input으로 태그 교체
    //2-2 하다가 내부에는 기존 span의 값이 들어와있어야함
    const replaceArray = replaceIcon.parentElement.parentElement;
    const dataId = +replaceArray.getAttribute("data-id");
    //3 수정 오나료 처리
  } else if (e.target.matches(".modify .lnr-checkmark-circle")) {
    const replaceIcon = e.target;
    // 아이콘 클래스 변경
    replaceIcon.classList.replace(`lnr-checkmark-circle`, `lnr-undo`);

    // 텍스트 요소와 그 부모 요소에 접근
    const replaceText =
      replaceIcon.parentElement.previousElementSibling.lastElementChild;
    const replaceArray = replaceIcon.parentElement.parentElement;
    const replaceBox = replaceIcon.parentElement.previousElementSibling;
    const dataId = +replaceArray.getAttribute("data-id");

    // 새로운 span 요소 생성
    const $newSpan = document.createElement("span");
    $newSpan.textContent = replaceText.value; // 기존 텍스트 복사
    $newSpan.classList.add(`text`);

    // 이전 텍스트 요소 대체
    replaceBox.replaceChild($newSpan, replaceText);
    let foundTodo = todos.find((todo) => todo.id === dataId);
    foundTodo.text = $newSpan.text;
    console.log(todos);
  }
});
