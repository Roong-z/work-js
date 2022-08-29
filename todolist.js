'use strict';

const toDoForm = document.querySelector('.toDoForm');
const toDoInput = toDoForm.querySelector('input');
const toDos = document.querySelector('.toDos');
const reBtn = document.createElement('button');
const reBtnText = document.createTextNode('버튼생성');

const TODOLIST = 'toDoList'; // 추가
let toDoList = [];

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

// 새로운 버튼 생성하는 기능
function newBtn() {
   let btn = document.createElement('button');
   btn.innerHTML = 'newnew!';
   document.body.appendChild(btn);
}

// 버튼생성하는 버튼 만듦
document.querySelector('.createBtn').addEventListener('click', function () {
   newBtn();
});

// createToDo에서 인풋의 value 받으면 리스트에 받은 값을 새로 추가해주는 기능
function paintToDo(toDo) {
   const li = document.createElement('li');
   const span = document.createElement('span');
   span.innerHTML = toDo;
   li.appendChild(span);
   toDos.appendChild(li);
}

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
