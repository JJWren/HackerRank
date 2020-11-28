/*
* The function is expected to return an INTEGER_ARRAY.
* The function accepts INTEGER_ARRAY grades as parameter.
* 
* Grades below a 40 are failing.
* Every multiple of 5, if the difference between the next 5 point grade is 2 or 1, round up.
* Do not round up for 38 or less as it is still failing.
*/

function gradingStudents(grades) {
    for(let i=0; i<grades.length; i++) {
        let r = grades[i] % 5;
        if(grades[i] > 37 && r > 2) {
            grades[i] += 5 - r;
        }
    }
    return grades;
};