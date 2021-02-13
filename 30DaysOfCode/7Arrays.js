function logReverseArr(arr){
    let stringy = "";
    
    for(let i=arr.length-1; i>=0; i--) {
        stringy += arr[i] + " ";
    }
    
    console.log(stringy);
}

array0 = [1, 6, 7, 2];
logReverseArr(array0);