let arr = [12, 3, 45, 7, 23, 9];
let max = -Infinity;

function mn(arr) {
    for (let num of arr) {
        if (num > max) {
            max = num;
        }
    }
    console.log(max);
}

mn(arr);