'use strict';

// fetch.json 파일에서 json을 받아와 list에 넣어주는 함수
function fetchPage() {
   fetch('./fetch.json').then(res => {
      res.json()
         .then(json => {
            document.querySelector('#list').innerHTML = `<li>${json.id[2]}</li>
          <li>${json.title[2]}</li>
          <li>${json.body[2]}</li>
          <li>${json.text[2]}</li>`;
         })
         .catch(error => {
            console.log(error);
            res.send('ERROR');
         });
   });
}

// fetch로 글씨 바꾸기
fetch('https://codingapple1.github.io/price.json')
   .then(res => {
      res.json().then(json => {
         document.querySelector('#text').innerHTML = json.price;
      });
   })
   .catch(error => {
      console.log(error);
      res.send('ERROR');
   });

// 상품목록 리스트 추가 탬플릿
let products = [
   { id: 0, price: 70000, title: 'Blossom Dress' },
   { id: 1, price: 40000, title: 'Springfield Shirt' },
   { id: 2, price: 90000, title: 'Black Monastery' },
];
products.forEach(function (data) {
   let card = `<div class="col-sm-4">
       <img src="https://via.placeholder.com/600" class="w-100">
       <h5>${data.title}</h5>
       <p>가격 : ${data.price}</p>
       <button class="buy">구매</button>
     </div>`;
   document.querySelector('.row').append(card);
   console.log(card);
});

// fetch로 받아와서 상품추가 템플릿 반복해서 입력하기
document.querySelector('#more').addEventListener('click', function () {
   fetch('https://codingapple1.github.io/js/more1.json').then(data => {
      data.forEach((a, i) => {
         var card = `<div class="col-sm-4">
           <img src="https://via.placeholder.com/600" class="w-100">
           <h5>${data[i].title}</h5>
           <p>가격 : ${data[i].price}</p>
         </div>`;
         document.querySelector('.row').append(card);
      });
   });
});

// 버튼 누르면 상품목록 추가로 보여주는 기능
// document.querySelector('#more').addEventListener('click', function () {
//    fetch('https://codingapple1.github.io/js/more1.json').then(res => {
//       res.json;
//    });
// });
