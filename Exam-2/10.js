let str = "hello world python";

function removes(str) {
    let neStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            neStr += str[i];
        }
    }
    console.log(neStr);
}

removes(str);