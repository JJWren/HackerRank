function sockMerchant(n, ar) {
    let matched_pairs = 0;
    ar.sort();
    for(let i=0; i<n; i++) {
        if(ar[i] == ar[i+1]) {
            matched_pairs++;
            i++;
        }
    }
    return matched_pairs;
}