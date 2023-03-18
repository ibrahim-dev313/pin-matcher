const displayPinElement = document.getElementById('display-pin');
const typedNumberElement = document.getElementById('typed-numbers');


function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        // console.log('pin not 4 digit', pin);
        return getPin();
    }
}
function generatePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin()
    // console.log(pin);
    displayPinElement.value = pin;
})

document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const previousTypedNumber = typedNumberElement.value;


    if (isNaN(number)) {
        if (number === 'C') {
            typedNumberElement.value = '';
        } 
        else if (number === '<') {
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberElement.value = remainingDigits;
        }
    }
    else {
        const newTypedNumber = previousTypedNumber + number;
        typedNumberElement.value = newTypedNumber;
    }
})
document.getElementById('verify-pin').addEventListener('click', function () {
    // console.log('verified');
    const currentPin = displayPinElement.value;
    const typedPin = typedNumberElement.value;
    const pinSuccessMessage = document.getElementById('pin-success');
    const pinFailedMessage = document.getElementById('pin-failed')


    if (typedPin === currentPin) {
        // console.log('correct pin');
        pinSuccessMessage.style.display = 'block'
        pinFailedMessage.style.display = 'none'

    } 
    else {
        // alert('incorrect pin')
        pinFailedMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none'


    }
})