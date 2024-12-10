let arr1 = [1, 2, 3, 4]
let arr2 = [3, 4, 5, 6]

function findsection(a1, a2) {
    let neSet = new Set(a1)
    let newarr = []

    for (let char of a2) {
        {
            if (neSet.has(char)) {
                newarr.push(char)
            }
        }
    }
    console.log(newarr);

}


findsection(arr1, arr2)