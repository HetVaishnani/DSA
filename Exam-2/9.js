let str = "hello world";

function convUppercase(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (i == 0 || str[i - 1] == " ") {
            newStr += str[i].toUpperCase();
        }
        else {
            newStr += str[i];
        }
    }
    console.log(newStr);
}

convUppercase(str);