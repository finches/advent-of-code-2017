let captchaSolver = function(captchaValue) {
    let sum = 0;

    for(let i = 0; i < captchaValue.length; i++) {
        let firstVal = parseInt(captchaValue[i], 10), 
            secondVal = parseInt(captchaValue[i+1], 10);

        if (i+1 === captchaValue.length) secondVal = parseInt(captchaValue[0], 10);

        if (firstVal === secondVal) sum += firstVal;
    }
    return sum;
}

module.exports = { captchaSolver };