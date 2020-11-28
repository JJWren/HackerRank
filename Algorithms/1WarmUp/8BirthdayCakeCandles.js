// You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.
function birthdayCakeCandles(candles) {
    let max = candles[0], count = 1;
    for(let i=1; i<candles.length; i++) {
        if(candles[i] > max) {
            max = candles[i];
            count = 1;
        } else if (candles[i] == max) {
            count++;
        }
    }
    return count;
}