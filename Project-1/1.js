let Input = [
    [2, 3, 4],
    [5, 6, 7],
    [8, 9, 1]
]

let sum = 0;

for (let i = 0; i < Input.length; i++) {
    for (let j = 0; j < Input[i].length; j++) {
        if (i == j) {
            sum += Input[i][j]
        }
    }
}

console.log(sum);