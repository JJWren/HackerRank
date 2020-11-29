// Complete the kangaroo function below.
// x1, v1: integers, starting position and jump distance for kangaroo 1
// x2, v2: integers, starting position and jump distance for kangaroo 2
// Print YES if they can land on the same location at the same time; otherwise, print NO.
// Note: The two kangaroos must land at the same location after making the same number of jumps.
// CONSTRAINTS:
// 0 <= x1 < x2 <= 10000
// 1 <= v1 <= 10000 && 1 <= v2 <= 10000
function kangaroo(x1, v1, x2, v2) {
    // y = mx + b because (endpoint = number of jumps x distance per jump + starting point)
    // y = kangaroo endpoint, m = number of jumps, x = distance per jump, b = kangaroo startpoint
    // y = m(x1)) + v1, y = m(x2) + v2
    // m(x1) + v1 = m(x2) + v2
    // shorthand: y = (x2 - x1)/(v1 - v2)
    // if remainder is 0, they will meet at a point (must be whole integer)
    // v1 must be greater than v2 because v2 is ahead of v1. v1 needs to catch v2!
    console.log((x2-x1)%(v1-v2));
    if(((x2-x1)%(v1-v2) == 0) && (v1 > v2)) {
        return "YES";
    };
    return "NO";
}