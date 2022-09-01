// fetch('./test.json', {
//    method: 'GET',
// })
//    .then(res => res.json())
//    .then(data => console.log(data))
//    .catch(error => console.log('ERROR'));

// test1
// const getBtn = document.getElementById('getBtn');
// const postBtn = document.getElementById('postBtn');

// const getData = () => {
//    const xhr = new XMLHttpRequest();
//    xhr.open('GET', './todolist.html');

//    xhr.onload = () => {
//       console.log(xhr.response);
//    };

//    xhr.send();
// };

// const sendData = function () {};

// getBtn.addEventListener('click', getData);
// postBtn.addEventListener('click', postData);

// test2
// (function () {
//    let httpReq;
//    document.getElementById('ajaxBtn').addEventListener('click', makeReq);

//    function makeReq() {
//       httpReq = new XMLHttpRequest();
//       if (!httpReq) {
//          alert('XMLHTTP ERROR');
//          return false;
//       }
//       httpReq.onreadystatechange = alertContents;
//       httpReq.open('GET', 'test.html');
//       httpReq.send();
//    }

//    function alertContents() {
//       try {
//          if (httpReq.readyState === XMLHttpRequest.DONE) {
//             if (httpReq.status === 200) {
//                alert(httpReq.responseText);
//             } else {
//                alert('req문제발생');
//             }
//          }
//       } catch (e) {
//          alert('Caught Exception' + e.descpirpttion);
//       }
//    }
// });
