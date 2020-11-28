function diagonalDifference(arr) {
    const n = arr[0].length;
    let diag1 = 0;
    let diag2 = 0;
    for (let i=0, j=n-1; i<n, j>=0; i++, j--) {
        diag1 += arr[i][i];
        diag2 += arr[i][j];
    }
    let sum = diag1 - diag2;
    return (sum >= 0 ? sum : sum * -1);
}