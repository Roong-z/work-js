'use strict';

// ToDo list를 작성할 수 있는 폼
const toDoForm = document.querySelector('.toDoForm');
// ToDo list를 작성할 수 있는 인풋
const toDoInput = toDoForm.querySelector('input');
// ToDo list가 들어가있는 ul
const toDos = document.querySelector('.toDos');
// 누르면 이름입력 할 수 있는 환영 버튼
const welcomeBtn = document.createElement('button');
// todolist를 배열에 담을 수 있는 함수
const TODOLIST = 'toDoList';
let toDoList = [];

// 버튼 누르면 이름 입력창 나오게 하고 환영문구(+공백검사 기능 추가)
welcomeBtn.innerHTML = '환영버튼';
document.body.appendChild(welcomeBtn);
welcomeBtn.className = 'btn btn-primary';
welcomeBtn.addEventListener('click', function () {
   let name = prompt('What is your name?');
   let blank_pattern = /^\s+|\s+$/g;
   if (name.replace(blank_pattern, '') == '') {
      alert('아이디를 입력해주세요');
   } else {
      document.querySelector('.id').innerHTML = `${name}님 안녕하세요!`;
      alert(`Hello ${name} let's go work!`);
   }
});

// 새로운 버튼 생성하는 기능
function newBtn() {
   let btn = document.createElement('button');
   btn.innerHTML = 'newnew!';
   document.body.appendChild(btn);
}

// createToDo에서 인풋의 value 받으면 리스트에 받은 값을 새로 추가해주는 기능
function paintToDo(toDo) {
   const li = document.createElement('li');
   const span = document.createElement('span');
   const delBtn = document.createElement('button');
   delBtn.innerText = '삭제';
   delBtn.className = 'btn btn-danger delBtn';
   delBtn.addEventListener('click', delToDo);
   span.innerHTML = toDo;
   li.appendChild(span);
   toDos.appendChild(li);
   li.appendChild(delBtn);
   li.id = toDoList.length + 1;
}

// 삭제버튼으로 해당 리스트 삭제하고 로컬 스토리지에서도 삭제하기
function delToDo(e) {
   const button = e.target;
   const li = button.parentNode;
   toDos.removeChild(li);
   toDoList = toDoList.filter(toDo => toDo.id !== Number(li.id));
   localStorage.setItem(TODOLIST, JSON.stringify(toDoList));
   console.log(toDoList);
}

// 로컬스토리지에서 리스트 받아오는 기능
function loadToDoList() {
   const loadedToDoList = localStorage.getItem(TODOLIST);
   if (loadedToDoList !== null) {
      const parsedToDoList = JSON.parse(loadedToDoList);
      for (let toDo of parsedToDoList) {
         const { text } = toDo;
         paintToDo(text);
         saveToDo(text);
      }
   }
}
// 로컬스토리지에 목록 저장하는 기능(제이슨 형태로 풀어서 받기)
function saveToDo(toDo) {
   const toDoObj = {
      text: toDo,
      id: toDoList.length + 1,
   };
   toDoList.push(toDoObj);
   localStorage.setItem(TODOLIST, JSON.stringify(toDoList));
}
// 인풋에 value입력시 새로고침 방지+값을 paintToDo로 보내주고 인풋값 초기화
function createToDo(event) {
   event.preventDefault();
   const toDo = toDoInput.value;
   paintToDo(toDo);
   saveToDo(toDo);
   toDoInput.value = '';
}

// 인풋에 값 입력시 폼에서 전송해주는 기능+createToDo랑 연결
function init() {
   loadToDoList();
   toDoForm.addEventListener('submit', createToDo);
}
init();
