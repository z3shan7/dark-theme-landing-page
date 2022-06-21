const form = document.getElementById('form');
const email = document.getElementById('email');
const SubBtn = document.getElementById('SubBtn');

form.addEventListener('submit', function(e){
    e.preventDefault()
    emailValidation()
})

function emailValidation(){
    if(email.value === ''   ){
        console.log('enter valid email address');
    }
}