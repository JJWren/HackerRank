function timeConversion(s) {
    let part1 = s.slice(0,2), part2 = s.slice(2,8), part3 = s.slice(8);
    if(part3 == "AM"){
        if(part1 == "12"){
            part1 = "00";
        }
    } else if (part3 == "PM") {
        if(part1 == "01"){
            part1 = "13";
        } else if (part1 == "02") {
            part1 = "14";
        } else if (part1 == "03") {
            part1 = "15";
        } else if (part1 == "04") {
            part1 = "16";
        } else if (part1 == "05") {
            part1 = "17";
        } else if (part1 == "06") {
            part1 = "18";
        } else if (part1 == "07") {
            part1 = "19";
        } else if (part1 == "08") {
            part1 = "20";
        } else if (part1 == "09") {
            part1 = "21";
        } else if (part1 == "10") {
            part1 = "22";
        } else if (part1 == "11") {
            part1 = "23";
        }
    }
    return `${part1}${part2}`;
}