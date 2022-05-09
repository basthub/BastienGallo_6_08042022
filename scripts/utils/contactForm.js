//DOM
const contactBtn = document.querySelector('.contact_button');
const closeBtn = document.querySelector('.modal img');
const submitBtn = document.getElementById('submit_btn');
const formSend = document.querySelector('.formsend');
const modal = document.getElementById('contact_modal');

//regex 
const nameReg = /^[a-zàâçéèêëîïôûùüÿñæœ .'-]+$/i;
const emailReg = /^\S+@\S+\.\S+$/;

//event pour afficher la modale
contactBtn.addEventListener('click', displayModal);
//event pour fermer la modale
closeBtn.addEventListener('click', closeModal);
//event pour vérifier le formulaire avant envoi
submitBtn.addEventListener('click', submitForm);

//function pour afficher la modale
function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "flex";
}

//function pour fermer la modale
function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

function submitForm(event){
    let firstname = document.getElementById('firstname');
    let lastname = document.getElementById('lastname');
    let email = document.getElementById('email');
    let message = document.getElementById('message');

    event.preventDefault();
    checkingForm();
    let data = [firstname.value, lastname.value, email.value, message.value]
    console.table(data)
}
//Vérification du formulaire avant envoi
function checkingForm(){
    let firstname = document.getElementById('firstname');
    let lastname = document.getElementById('lastname');
    let email = document.getElementById('email');
    let message = document.getElementById('message');
    if (
        checkTextField(firstname) &&
        checkTextField(lastname) &&
        checkEmailField(email) &&
        checkTextField(message)
        == true){
            modal.style.display = 'none';
            formsend.style.display = 'block';
        }   
}


//Vérification des champs du formulaire
function checkTextField(field) {
    let isValid = field.value.trim().length > 2 && nameReg.test(field.value);
    
    return isValid;
}
function checkEmailField(field){
    let isValid = field.value.trim().length > 2 && emailReg.test(field.value);
    
    return isValid;
}