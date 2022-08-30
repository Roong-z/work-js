function 배수(a) {
   if (a % 9 == 0) {
      alert('더블박수');
   }
   if (a % 3 == 0) {
      alert('박수');
   } else {
      alert('조용');
   }
}

function real369(n) {
   let num = String(n);
   if (num.charAt(num.length - 1) === '9') {
      console.log('박수');
   } else if (num.charAt(num.length - 1) === '6') {
      console.log('박수');
   } else if (num.charAt(num.length - 1) === '3') {
      console.log('박수');
   } else {
      console.log('369아님');
   }
}

function r369(n) {
   // if (n % 10 == 3 || n % 10 == 6 || n % 10 == 9) {
   //    console.log('박수');
   // } else {
   //    console.log('통과');
   // }
   // let clap = '';
   // for (let i = 0; i < String(n).length; i++)
   //    if (String(n)[i] == '3' || String(n)[i] == '6' || String(n)[i] == '9') {
   //       clap = clap + 'clap';
   //    }
   let 박수2 = String(n)
      .replace(/[3,6,9]/g, '박수')
      .replace(/[0-9]/g, '');

   console.log(박수2 == '' ? '통과' : 박수2);
}

r369(1);
r369(2);
r369(3);
r369(6);
r369(9);
r369(33);
r369(333);
r369(369);
