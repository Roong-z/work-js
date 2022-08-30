// XMLhttpRequest object 생성
const Request = new XMLHttpRequest();

// GET요청하기
function GetRequest() {
   // onreadystatechange : 요청에 대한 상태가 변화할 때 마다 function 호출해줌
   Request.onreadystatechange = function () {
      if (Request.readyState === 4 && Request.status === 200) {
         // readyState의 상태 값 : 1.UNSENT-숫자0(XMLHttpRequest객체 생성) 2.OPENED-숫자1(open 메소드 실행 성공) 3. HEADERS_RECEIVED-숫자2(서버와 연결 완료)
         // 4.LOADING-숫자3(request요청 처리중) 5.DONE-숫자4(request처리 끝 = 응답 준비 완료)
         //기존의 데이터가 json 형태로 들어가있기 때문에 json =>다시 array/object 형식으로 꺼내면 안에 내용들을 선택해서 바인딩할 수 있다.
         const data = Request.responseText;
         const newData = JSON.parse(data);
         console.log(newData);
         document.getElementById('get').innerHTML = newData.name[0];
         // 응답 데이터의 종류 : responseText / responseXML
      }
   };
   //open() : 요청방식, url, 비동기여부(true = 비동기 / false = 동기)
   Request.open('GET', './test.json', true);
   //send(); => GET방식 / send(문자열); => POST방식
   //요청 보내기
   Request.send();
}

// POST요청하기
function PostRequest() {
   Request.onreadystatechange = function () {
      if (Request.readyState === 4 && Request.status === 200) {
         document.getElementById('post').innerHTML = Request.responseText;
      }
   };
   Request.open('POST', './test.json', true);
   //POST 방식 사용시 아래 메소드 추가(MIME type 설정)
   Request.setRequestHeader(
      'Content-Type',
      'application/x-www-form-urlencoded',
   );
   Request.send();
}
