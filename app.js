const form = document.getElementById('form');
const email = document.getElementById('email');
const SubBtn = document.getElementById('SubBtn');
const alertText = document.querySelector('.form .alert-text');

form.addEventListener('submit', function(e){
    e.preventDefault()
    emailValidation()
})

function emailValidation(){
    if(email.value === ''   ){
        alertText.classList.add('showAlert')
       
    }
}