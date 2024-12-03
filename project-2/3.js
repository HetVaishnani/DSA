function cal(num) {
    if (num == 0) {
        return 1;
    }
    return num * call(num - 1);
}

console.log(cal(5));