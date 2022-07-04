//Form-Elemente lesen
const form = document.getElementById('form');
const vorname = document.getElementById('vorname');
const nachname = document.getElementById('nachname');
const email = document.getElementById('email');
const telefonnummer = document.getElementById('telefonnummer')
const geschlecht = document.getElementById('geschlecht');
const ausgaben = document.getElementById('anzahl')

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

//Check tel is valid
function checkTelefon(input) {
    const reg = /(\b(0041|0)|\B\+41)(\s?\(0\))?(\s)?[1-9]{2}(\s)?[0-9]{3}(\s)?[0-9]{2}(\s)?[0-9]{2}\b/;
    if (reg.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Telefonnummer ist nicht gültig.');
    }
}

//Check drop-down/geschlecht is valid
function checkGeschlecht() {
    if (geschlecht.value === "") {
        alert("Bitte wählen Sie eine Option.");
        return false;
    }
    return true;
}

// Check Anzahl Ausgaben
function checkAnzahl(input) {
    const reg = /(^0?[1-9]$)|(^1[0-2]$)/;
    if (reg.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Anzahl muss zwischen 1 und 12 sein.');
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
    if(!checkRequired([vorname, nachname, email, telefonnummer, geschlecht, ausgaben])){
        checkLength(vorname, 3, 30);
        checkLength(nachname, 3, 30);
        checkEmail(email);
        checkTelefon(telefonnummer)
        checkGeschlecht(geschlecht);
        checkAnzahl(ausgaben)
    }
}

//Event listeners => Wartet, dass der Submit-Button gedrückt wird
form.addEventListener('submit', function(e) {
    //https://www.w3schools.com/jsref/event_preventdefault.asp
    e.preventDefault();
    //First validate form
    validateForm();
});