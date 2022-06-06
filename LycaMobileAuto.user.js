// ==UserScript==
// @name         LycaMobileAuto
// @namespace    https://www.lycamobile.fr/
// @version      0.1.1
// @description  Simple script for automate get lyca
// @author       0x8024
// @match        https://www.lycamobile.fr/fr/checkout/
// @icon         https://d4q6ypsco43xb.cloudfront.net/wp-content/themes/Divi-child/img/favicon.ico
// ==/UserScript==
var firstName = document.getElementById("firstName")
var lastName = document.getElementById("lastName")
var email = document.getElementById("email")
var phone = document.getElementById("other_contact_number")
var street = document.getElementById("personal_street")
var city = document.getElementById("personal_city")
var post = document.getElementById("postCodes")
var buttonpost = document.getElementById("searchPostCode")
var billing = document.getElementById("same_as_billing")
var nothanks = document.getElementById("online_retention_check_nothanks")

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

sleep(15000).then(() => {
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    phone.value = "";
    street.value = "";
    city.value = "";
    post.value = "";
    billing.checked = true;
});