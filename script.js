// Assignment Code
var pass = []
function generatePassword () {
    var digits = asknumber();
    pass = []

    var settings = [];
    var lowercase = askLower(settings)
    var uppercase = askUpper(settings)
    var numbers = askNumbers(settings)
    var specials = askSpecials(settings) 
    
    divideDigits( digits, settings)

    return mixPass(pass);

    console.log();
}

function asknumber () {
    var digits = prompt('How many characters you want to generate?');
    if (!digits || digits<8 || digits>128) {
        alert ('Please enter a number between  8 and 128');
        return asknumber();
    }
    return digits
}

function askLower(settings) {
    var lowercase = confirm ('Do you want lowercase?');
    if (lowercase) {
        settings.push("lowercase")
        return settings
    }    
}

function askUpper(settings) {
    var uppercase = confirm ('Do you want uppercase?');
    if (uppercase) {
        settings.push("uppercase")
        return settings
    }
}

function askNumbers (settings) {
    var numbers = confirm ('Do you want numbers?');
    if (numbers) {
        settings.push("numbers")
        return settings
    }
}

function askSpecials (settings) {
    var specials = confirm ('Do you want specials?');
    if (specials) {
        settings.push("special")
    }
}

function divideDigits( digit, settings ) {
    var count = settings.length
    var each = Math.floor( digit / count )
    var remainder = digit % count
    console.log(each, remainder)
    if( settings.length === 1 ) {
        switch (settings[0]){
            case 'lowercase':
                runLowerCase(each)
                break;
            case 'uppercase':
                runUpperCase(each)
                break;
            case 'numbers':
                runNumbers(each)
                break;
            case 'special':
                runSpecials(each)
                break;
        }
    } else {
        for( var i = 0; i < settings.length - 1; i++){
            switch (settings[i]){
                case 'lowercase':
                    runLowerCase(each)
                    break;
                case 'uppercase':
                    runUpperCase(each)
                    break;
                case 'numbers':
                    runNumbers(each)
                    break;
                case 'special':
                    runSpecials(each)
                    break;
            }
        }
        for( var i = settings.length - 1; i < settings.length; i++){
            switch (settings[i]){
                case 'lowercase':
                    runLowerCase(remainder + each)
                    break;
                case 'uppercase':
                    runUpperCase(remainder + each)
                    break;
                case 'numbers':
                    runNumbers(remainder + each)
                    break;
                case 'special':
                    runSpecials(remainder + each)
                    break;
            }
        }
    }
    console.log( each, remainder )
}

function runLowerCase(length) {
    var chars = 'abcdefghigklmnopqrstuvwxyz'
    for(var i = 0; i < length; i++) {
        var random = Math.floor(Math.random() * chars.length)
        pass.push(chars[random])
    }
    return
}

function runUpperCase(length) {
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for(var i = 0; i < length; i++) {
        var random = Math.floor(Math.random() * chars.length)
        pass.push(chars[random])
    }
    return
}
function runNumbers(length) {
    var chars = '1234567890'
    for(var i = 0; i < length; i++) {
        var random = Math.floor(Math.random() * chars.length)
        pass.push(chars[random])
    }
    return
}
function runSpecials(length) {
    var chars = ` !"#$%&'()*+,-./:;<=>?@[\]^_{|}~`
    for(var i = 0; i < length; i++) {
        var random = Math.floor(Math.random() * chars.length)
        pass.push(chars[random])
    }
    return
}

function mixPass(data) {
    for (var i = 0; i< data.length - 1; i++) {
        var random = Math.floor(Math.random() * (i))
        var orig = data[i]
        data[i] = data[random]
        data[random] = orig
    }
    data = data.join('')
    return data
}




var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);







