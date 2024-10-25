const countryCurrency = {
    "Afghanistan": "AFN",
    "Armenia": "AMD",
    "Australia": "AUD",
    "Austria": "EUR",
    "AzerBaijan": "DNR",
    "Bahrain": "BHD",
    "Brazil": "BRL",
    "Canada": "CAD",
    "Egypt": "EGP",
    "India": "INR",
    "Kuwait": "KWD",
    "Qatar": "QAR",
    "SaudiArabia": "SAR",
    "SouthAfrica": "ZAR",
    "UAE": "AED",
    "UK": "GBP",
    "USA": "USD",
    "Yemen": "YER"

}
//Arrow fucntion
// document.getElementById('country').addEventListener('change', () => {
//     const selectedCountry=this.value;
//     console.log(selectedCountry);//o/p: undefined
//     //because arrow functions do not bind their own this context. Instead, this refers to the surrounding lexical context, which may not be what you expect.
// })

document.getElementById('country').addEventListener('change', function () {
    const selectedCountry = this.value;
    console.log(selectedCountry);
    const country = document.getElementById('currency')
    // country.value = selectedCountry//it will show only country name
    country.value = countryCurrency[selectedCountry]//key[value]

})

const validation = (event) => {
    event.preventDefault()
    if (checkValidation()) {
        alert(`Form has been submitted sucessfully!!`);
        form.reset()
    }
}
const form = document.getElementById('registrationForm');
form.addEventListener('submit', validation);

const checkValidation = () => {
    document.getElementById('fullNameError').innerText = '';
    document.getElementById('passwordError').innerText = '';
    document.getElementById('phoneNumberError').innerText = '';
    document.getElementById('emailError').innerText = '';

    let name = document.getElementById('fullName').value;
    let password = document.getElementById('password').value;
    let phoneNumber = document.getElementById('phoneNumber').value;
    let email = document.getElementById('email').value;
    let selectedCountry = document.getElementById('country').value;


    //name
    if (name.trim() === "") {
        document.getElementById('fullNameError').innerText = `full name require`;
        return false;
    }

    //Password
    if (password === "") {
        document.getElementById('passwordError').innerText = `Password is required`;
        return false;
    }
    if (password.length < 6) {
        document.getElementById('passwordError').innerText = `Password require minimum 6 digit`;
        return false;
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        document.getElementById('passwordError').innerText = `Password must be include atleast one special charactor`;
        //test():It returns true if there is at least one character in the password that matches any of the characters in the character class; otherwise, it returns false.
    }

    //Phonenumber
    if (phoneNumber === "") {
        document.getElementById('phoneNumberError').innerText = `Phone number is required`;
        return false;

    }
    if (phoneNumber.length < 10 || phoneNumber.length > 15 || isNaN(phoneNumber)) {
        document.getElementById('phoneNumberError').innerHTML = `Phone number must be numeric and between 10-15 digits`;
        return false;
    }
    if (isNaN(phoneNumber)) {
        document.getElementById('phoneNumberError').innerHTML = `Phone number must be in numaric digit`
    }

    //email
    if (email === "") {
        document.getElementById('emailError').innerText = `Enter valid email`;
        return false;
    }

    //Select country 
    if (selectedCountry === "") {
        document.getElementById('countryError').innerText = `Please select the country.`
        return false;
    }
    console.log(`Name:${name}, Password:${password}, Phone Number:${phoneNumber}, Email:${email}, Country:${selectedCountry},`)
    return true;

}
