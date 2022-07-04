//Form-Elemente lesen
const form = document.getElementById('form');
const vorname = document.getElementById('vorname');
const nachname = document.getElementById('nachname');
const email = document.getElementById('email');
const geschlecht = document.getElementById('geschlecht');
const schokolade = document.getElementById('radioSchokolade');
const erdbeere = document.getElementById('radioErdbeere');
const vanille = document.getElementById('radioVanille');
const zitrone = document.getElementById('radioZitrone');
const sorte = document.getElementById('sorte');
const agb = document.forms["form"]["agb"];
let complete = "true";

// Show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//Show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//Check email is valid
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Email ist nicht gültig.');
    }
}

//Check drop-down is valid
function checkGeschlecht() {
    const geschlecht = document.getElementById("geschlecht");
    if (geschlecht.value === "") {
        alert("Bitte wählen Sie eine Option.");
        return false;
    }
    return true;
}

//Check radiobutton is valid
function checkSorte(schokolade, erdbeere, vanille, zitrone, sorte) {
    if (schokolade.checked === false && erdbeere.checked === false && vanille.checked === false && zitrone.checked === false) {
        showError(sorte, 'Bitte wählen Sie eine Sorte.');
    } else {
        showSuccess(sorte);
    }
}

//Check checkboxes is valid
function checkCheckbox() {
    const checkbox = agb.checked
    if (checkbox === false) {
        showError(agb, 'Sie müssen den Geschäftsbedingungen zustimmen.');
    } else if (checkbox === true){
        showSuccess(agb);
    }
}

//Check required fields
function checkRequired(inputArr) {
    let isRequired = false;
    inputArr.forEach(function(input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} ist erforderlich.`);
            isRequired = true;
        } else {
            showSuccess(input);
        }
    });
    return isRequired;
}

//Check input length für Vorname & Nachname
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input,
            `${getFieldName(input)} muss mindestens ${min} Zeichen haben.`
        );
    } else if (input.value.length > max) {
        showError(input,
            `${getFieldName(input)} darf maximal ${max} Zeichen haben.`
        );
    } else {
        showSuccess(input);
    }
}

//Get fieldname
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Validate form input elements
function validateForm(){
    //check required inputs
    if(!checkRequired([vorname, nachname, email, geschlecht])){
        checkLength(vorname, 3, 30);
        checkLength(nachname, 3, 30);
        checkEmail(email);
        checkGeschlecht(geschlecht);
        // checkSorte(schokolade, erdbeere, vanille, zitrone, sorte);
        checkCheckbox();
        completedForm()
    }
}

//Event listeners => Wartet, dass der Submit-Button gedrückt wird
form.addEventListener('submit', function(e) {
    //https://www.w3schools.com/jsref/event_preventdefault.asp
    e.preventDefault();
    //First validate form
    validateForm();
});


function completedForm() {
    if (complete === "true") {
        alert ("Danke für deine Registration!")
    }
}
