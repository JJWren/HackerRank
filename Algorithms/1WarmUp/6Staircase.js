function staircase(n) {
    let space = " ", hash = "#";
    for(let i=1; i<=n; i++) {
        let m = n - i;
        console.log(`${space.repeat(m)+hash.repeat(i)}`);
    }
}