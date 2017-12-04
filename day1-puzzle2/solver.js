let captchaSolver = function(captchaValue) {
    let sum = 0, count = captchaValue.length;

    for(let i = 0; i < count; i++) {
        let firstVal = parseInt(captchaValue[i], 10), 
            secondVal = parseInt(captchaValue[(i + (count/2)) % count], 10);

        if (firstVal === secondVal) sum += firstVal;
    }
    return sum;
}

module.exports = { captchaSolver };