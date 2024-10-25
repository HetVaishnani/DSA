let Input = [5, 6, 8, 7, 4, 6, 3, 9, 2, 1]

for (let i = 0; i <= Input.length - 2; i++) {
    let min = i;

    for (let j = i + 1; j < Input.length; j++) {
        if (Input[j] < Input[min]) {
            min = j;
        }
    }

    let temp = Input[min];
    Input[min] = Input[i];
    Input[i] = temp;
}

console.log(Input);
