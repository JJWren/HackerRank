function miniMaxSum(arr) {
    let min = 0, max = 0;
    arr.sort((a, b) => a - b);
    for(let i=0; i<arr.length; i++) {
        if(i==0){
            min += arr[i];
        } else if (i>0 && i<arr.length - 1) {
            min += arr[i];
            max += arr[i];
        } else {
            max += arr[i];
        };
    };
    console.log(`${min} ${max}`);
};

miniMaxSum([1,2,3,4,5]);
miniMaxSum([7,69,2,221,8974]);