// Validate form input elements
const validateLib = require('./ValidationLib');

/**
 * Validate User
 * @param userObj
 * @returns {boolean|{msg: string, isNotValid: boolean}|{isNotValid}|*}
 */
function validateUser(userObj) {
    // Check required fields
    let result = validateLib.checkRequired("vorname", userObj.vorname);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("nachname", userObj.nachname);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("email", userObj.email);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("passwort", userObj.passwort);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("tel", userObj.tel);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("anzahl", userObj.anzahl);
    if (result.isNotValid) { return result; }

    //check length
    result = validateLib.checkLength("vorname",userObj.vorname, 3, 30);
    if (result.isNotValid) { return result; }

    result = validateLib.checkLength("nachname",userObj.nachname, 3, 30);
    if (result.isNotValid) { return result; }

    result = validateLib.checkLength("passwort", userObj.passwort, 6, 15);
    if (result.isNotValid) { return result; }

    //check email syntax
    result = validateLib.checkEmail("email", userObj.email);
    if (result.isNotValid) { return result; }

    //check tel
    result = validateLib.checkTelefon("tel", userObj.tel);
    if (result.isNotValid) { return result; }

    //check anzahl
    result = validateLib.checkAnzahl("anzahl", userObj.anzahl);
    if (result.isNotValid) { return result; }

    //all inputs are valid and isNotValid=false
    return false;
}

/**
 *  Export validation functions for further usage.
 *  function to export WITHOUT beackets!
 */
module.exports = {
    validateUser
}
