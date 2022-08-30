function score(a, b) {
   if (a < 40 || b < 40) {
      console.log('불합격');
   } else if (a + b >= 120) {
      console.log('합격');
   } else {
      console.log('불합격');
   }
}

score(50, 50);
score(20, 100);
score(30, 30);
score(70, 70);
