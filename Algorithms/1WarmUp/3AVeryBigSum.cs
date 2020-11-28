static long aVeryBigSum(long[] ar) {
    long sum = 0;
    int arrSize = ar.Count();
    for(int i=0;i<arrSize;i++) {
        sum += ar[i];
    }
    return sum;
}