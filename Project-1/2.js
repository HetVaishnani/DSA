let Input = [
    [1, 2],
    [3, 4]
]
let new_arr = []
for (let i = 0; i < Input.length; i++) {
    new_arr[i] = []
    for (let j = 0; j < Input.length; j++) {
        if (i != j) {
            new_arr[i][j] = Input[j][i]
        }
        else{
            new_arr[i][j] = Input[i][j]

        }
    }
}

console.log(new_arr)