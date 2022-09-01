const ranNum = Math.floor(Math.random() * 101);

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetBtn;

// 숫자타입의 인풋필드에 1에서 100의 숫자를 입력했을때 랜덤으로 생성된 넘버와
// 동일하면 정답 출력
// 기회는 총 10번 이니까 누른횟수 저장할 변수 필요
// 마지막에 입력한 값 출력해야하니까 여태 누른 값 다 저장해서 보여주고
// 마지막에 누른 숫자가 난수보다 낮거나 높은지 비교해서 알려주기

// 누른횟수,입력한값에 따라 정답인지 아닌지 체크 후 그에 해당하는 값 출력해주는 기능
function checkGuess() {
   const userGuess = Number(guessField.value);

   if (guessCount === 1) {
      guesses.textContent = '입력했던 숫자들: ';
   }
   guesses.textContent += userGuess + '';

   if (userGuess === ranNum) {
      lastResult.textContent = '정답입니다!';
      lastResult.style.backgroudColor = 'blue';
      lowOrHi.textContent = '';
      setGameOver();
   } else if (guessCount === 10) {
      lastResult.textContent = '!!!GAME OVER!!!';
      lowOrHi.textContent = '';
      setGameOver();
   } else {
      lastResult.textContent = '땡!';
      lastResult.style.backgroudColor = 'purple';
      if (userGuess < ranNum) {
         lowOrHi.textContent = '마지막 숫자보다 높습니다.';
      } else {
         lowOrHi.textContent = '마지막 숫자보다 낮습니다.';
      }
   }

   guessCount++;
   guessField.value = '';
   guessField.focus();
}
guessSubmit.addEventListener('click', checkGuess);

// 게임종료시 초기화하고 다시 설정
function resetGame() {
   guessCount = 1;
   const resetParas = document.querySelectorAll('.resultParas p');
   for (const resetPara of resetParas) {
      resetPara.textContent = '';
   }

   resetButton.parentNode.removeChild(resetButton);
   guessField.disabled = false;
   guessSubmit.disabled = false;
   guessField.value = '';
   guessField.focus();

   lastResult.style.backgroundColor = 'white';

   ranNum = Math.floor(Math.random() * 100) + 1;
}

function setGameOver() {
   guessField.disabled = true;
   guessSubmit.disabled = true;
   resetButton = document.createElement('button');
   resetButton.textContent = 'Start new game';
   document.body.append(resetButton);
   resetButton.addEventListener('click', resetGame);
}
