/*Example of one Email that you can use: 123456@gnail.com*/
let verifed = document.getElementById("verifed");
verifed.style.display='none'


function checka() {
   let verification_email = document.getElementById("verified_email");
   var verificacion = verification_email.value;
       
   let error_message = document.getElementById("error_message");
   let verifed = document.getElementById("verifed");
   let remov = document.getElementById("remove-first-article");

   const letraA = '@gmail.com';
   var i = verificacion.includes(letraA);
 
   if (i) {
      alert("Esta parte es correcta @gmail.com");
      error_message.innerHTML = '';
      verification_email.classList.remove('input_red');
      return true;  
   } else {
      error_message.innerHTML = 'Valid Email Required';
      verification_email.classList.add('input_red');
      return false;  
   }
}

function send_email() {
   let verification_email = document.getElementById("verified_email");
   var verificacion = verification_email.value;
       
   let verifed = document.getElementById("verifed");
   let remov = document.getElementById("remove-first-main");
   let insert  = document.getElementById("insert-email");

   if (checka()) {
      alert("Correo electrónico válido.");
      remov.style.display='none'
      verifed.style.display='block'
      insert.innerHTML=verificacion
   } else {
      alert("Correo electrónico inválido.");
   }
}
 

 function dismiss_message(params) {
   
   let verifed = document.getElementById("verifed");
   let remov = document.getElementById("remove-first-main");

       remov.style.display= 'inline-block'
      verifed.style.display='none'
  
 }