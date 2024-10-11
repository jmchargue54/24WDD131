function isCardNumberValid(number) {
	// normally we would contact a credit card service...but we don't know how to do that yet. So to keep things simple we will only accept one number
	return number === '1234123412341234';
}

function displayError(msg) {
    document.querySelector('.errorMsg').innerHTML = msg;
}

function submitHandler(event) {
	event.preventDefault();
	let errorMsg = '';
	console.log(this.cardnum.value);
	displayError('');
	if (isNaN(this.cardnum.value)) {
		errorMsg += 'Card number is not a valid number\n';
	} else if (!isCardNumberValid(this.cardnum.value)) {
		errorMsg += 'Card number is not a valid card number\n';
	}
	if (errorMsg !== '') {
		displayError(errorMsg);
		return false;
	}
	return true;
}

function checkExp(event) {
    event.preventDefault();
    let errorMsg = '';
    const expMM = parseInt(document.querySelector('#expMM').value);
    const expYY = parseInt(document.querySelector('#expYY').value);
    const currentYear = new Date().getFullYear() %100;
    const currentMonth = new Date().getMonth() + 1;

    if (expYY < currentYear) {
        errorMsg += 'Invalid expiration year\n';
    } else if (expYY === currentYear && expMM < currentMonth) {
        errorMsg += 'Invalid expiration month\n';
    }
    if (errorMsg !== '') {
		displayError(errorMsg);
		return false;
    }
    return true;
}

document.querySelector('.credit-card').addEventListener('submit', function(event) {
    submitHandler(event);
    checkExp(event);
})