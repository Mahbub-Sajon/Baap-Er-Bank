document.getElementById('login-submit').addEventListener('click', function(){
    const emaliField = document.getElementById('user-mail');
const userEmail = emaliField.value;
    const passwordField = document.getElementById('user-password');
const userPassword = passwordField.value;
if(userEmail == 'sontan@baap.com' && userPassword== 'secret'){
   window.location.href = 'banking.html';
}
})
