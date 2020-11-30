function reverseArray(a) {
    for(let i=0; i<a.length/2; i++) {
        let temp = a[i];
        a[i] = a[a.length - i - 1];
        a[a.length - i - 1] = temp;
    };
    return a;
};