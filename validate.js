//sign up vars
let names = document.forms['form']['name'];
let telNo = document.forms['form']['tel'];
let signUpEmail = document.forms['form']['email'];
let firstPassword = document.forms['form']['password1'];
let secondPassword = document.forms['form']['password2'];

//sign in vars
let email = document.forms['form']['email'];
let password = document.forms['form']['password'];

let emailErrorMessage = document.querySelector('#email_error');
let passErrorMessage = document.querySelector('#pass_error');

email.addEventListener('textInput', emailVerify);
password.addEventListener('textInput', passVerify);


//signup function
function validateSignUp() {
  let signupEmail = 
 /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
 let signupPass = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
 let secondpassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
 let letters = /^[A-Za-z\s]{2,}$/;
 let phoneno = /^\d{9,}$/;

 if(!names.value.match(letters)){
    alert("Name can't be blank");
    return false;
  }

  if(!telNo.value.match(phoneno)){
    alert("enter a valid phone number");
    return false;
  }

 if(!signUpEmail.value.match(signupEmail)){
   alert('invalid email')
  email.focus();
  return false;  
 }
  if(!firstPassword.value.match(signupPass)) {
    alert("password must contain UPPERCASE and lower case letters with at least a digit and must be 8 character or more");
    return false;
  }
  if(!secondPassword.value.match(secondpassword)) {
    alert("password does not match");
    return false;
  }
} 


//signin function
function validateForm() {
 let mailformat = 
 /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  let passverify = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
 
 if(!email.value.match(mailformat)){
   email.style.border= '1px solid red';
  emailErrorMessage.style.display = 'block';
  email.focus();
  return false;  
 }
  if(!password.value.match(passverify)){
   password.style.border='1px solid red';
  passErrorMessage.style.display='block';
  password.focus();
  return false;
  }
} 


function emailVerify(){
 if(email.value.length >= 12){
  email.style.border= '1px solid silver';
  emailErrorMessage.style.display = 'none';
  return true;
 }
}

function passVerify(){
 if(password.value.length >= 7){
  password.style.border='1px solid silver';
  passErrorMessage.style.display='none';
  return true;
 }
} 

