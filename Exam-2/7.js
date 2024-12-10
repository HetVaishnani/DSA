let str = "hello";

function rs(str) {
    let nStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        nStr += str[i];
    }
    console.log(nStr);
}

rs(str);