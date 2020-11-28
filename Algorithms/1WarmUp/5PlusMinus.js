function plusMinus(arr) {
    let pos = 0, neg = 0, zero = 0, n = arr.length;
    arr.forEach(e => {
        if(e > 0) {
            pos++;
        } else if(e == 0) {
            zero++;
        } else {
            neg++;
        };
    });
    console.log((pos/n).toFixed(6));
    console.log((neg/n).toFixed(6));
    console.log((zero/n).toFixed(6));
}