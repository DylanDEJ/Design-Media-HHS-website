var contactForms = document.querySelectorAll(".form-text");
var confirmation =  document.querySelector(".text");
var formContact =  document.querySelector(".formulier");
var emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var phoneCheck = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

for(var i = 0; i < contactForms.length; i++){
contactForms[i].addEventListener("blur", function(){
    for(var i = 0; i < contactForms.length; i++){
        if (contactForms[i].value.length > 0) {
            contactForms[i].classList.add("filled")
        }
        else {
            contactForms[i].classList.remove("filled")
            contactForms[i].classList.remove("invalid")
            contactForms[i].classList.remove("valid")
        }
    }
})};

contactForms[1].addEventListener("keyup", function(){
    if(phoneCheck.test(contactForms[1].value)){
        contactForms[1].classList.add("valid")
        contactForms[1].classList.remove("invalid")

    }
    else{
        contactForms[1].classList.remove("valid")
        contactForms[1].classList.add("invalid")
    }
});

contactForms[2].addEventListener("keyup", function(){
    if(emailCheck.test(contactForms[2].value)){
        contactForms[2].classList.add("valid")
        contactForms[2].classList.remove("invalid")

    }
    else{
        contactForms[2].classList.remove("valid")
        contactForms[2].classList.add("invalid")
    }
});


formContact.addEventListener("submit", function(e){
    e.preventDefault();
    confirmation.classList.remove("hidden")
});
