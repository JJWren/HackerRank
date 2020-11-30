function hourglassSum(arr) {
    let total = -Infinity, xLength = arr[0].length - 2, yLength = arr.length - 2;
    // y tracks position in row (y-axis)
    for(let y=0; y<yLength; y++) {
        // x tracks position in column (x-axis)
        for(let x=0; x<xLength; x++) {
            let sum = arr[y][x] + arr[y][x+1] + arr[y][x + 2] + arr[y+1][x+1] + arr[y+2][x] + arr[y+2][x+1] + arr[y+2][x+2];
            sum > total ? total = sum : total = total;
        };
    };
    return total;
};