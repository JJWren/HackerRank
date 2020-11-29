// Complete the countApplesAndOranges function below.
// From left to right along x-axis, the points are a, s, t, b
// s and t denote the endpoints of the house (s - left, t - right)
// a is apple tree point, b is orange tree point
// apples is array of distances apples fell from tree (negative is left)
// oranges is array of distances oranges fell from tree (negative is left)
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let applesOnHouse = 0, orangesOnHouse = 0, pointFromA = 0, pointFromB = 0;
    for(let i=0; i<apples.length; i++) {
        pointFromA = apples[i] + a;
        if(pointFromA >= s && pointFromA <= t) {
            applesOnHouse++;
        };
    };
    for(let i=0; i<oranges.length; i++) {
        pointFromB = oranges[i] + b;
        if(pointFromB >= s && pointFromB <= t) {
            orangesOnHouse++;
        };
    };
    console.log(`${applesOnHouse}\n${orangesOnHouse}`);
}