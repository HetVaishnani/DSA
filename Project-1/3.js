let Input = [
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9]
]

let target = 6;
let address = false;
for (let i = 0; i < Input.length; i++) {
    for (let j = 0; j < Input[i].length; j++) {
        if (Input[i][j] == target) {
            address = true;
        }
    }
}

console.log(address)