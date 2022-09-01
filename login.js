//회원가입 페이지로 이동
function join() {
   window.location.href = './join.html';
}

// 아이디 공백검사+비밀번호 6글자 이상입력 검사
const idInput = document.getElementById('idInput');
const pwInput = document.getElementById('pwInput');
document
   .getElementsByTagName('form')[0]
   .addEventListener('submit', function (e) {
      let blank_pattern = /^\s+|\s+$/g;
      if (idInput.value.replace(blank_pattern, '') == '') {
         alert('id를 입력하세요.');
         e.preventDefault();
      }
      if (pwInput.value.length < 6) {
         alert('비밀번호를 6글자 이상 입력하세요.');
         e.preventDefault();
      }
   });
