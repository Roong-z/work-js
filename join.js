// 로그인 페이지로 이동
function login() {
   window.location.href = './login.html';
}
// 뒤로가기
function back() {
   history.back();
}

//아이디 비밀번호 유효성검사
document
   .getElementsByTagName('form')[0]
   .addEventListener('submit', function (e) {
      var special_pattern = /[`~!@#$%^&*|\\\'\";:\/?]/gi;
      const id = document.getElementById('idInput').value;
      const pw1 = document.getElementById('pwInput').value;
      const pw2 = document.getElementById('pwCheck').value;
      if (special_pattern.test(id) == true) {
         alert('아이디에 특수문자가 있습니다.');
         e.preventDefault();
      }
      if (pw1.length < 6 || pw1.length > 14) {
         alert('6자 이상 14자 이하로 입력하세요.');
         e.preventDefault();
      }
      if (pw1 != pw2) {
         alert('비밀번호가 다릅니다.');
         e.preventDefault();
      } else {
         alert('회원가입 확인완료');
         e.preventDefault();
         window.location.href = './login.html';
      }
   });
