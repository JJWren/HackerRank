function processData(input) {
    // example input comes in as: "3\nsam 99912222\ntom 11122222\nharry 12299933\nsam\nedward\nharry"
    // console.log input:
    console.log(`original input:\n${input}\n`);
    var inputArray = input.split("\n");
    // put first index in its own var
    var totalNoOfEntries = parseInt(inputArray.splice(0, 1));
    // all remaining names in query
    var nameQueries = inputArray.splice(totalNoOfEntries);
    // converted into array
    var phoneBookArray = inputArray.map(item => item.split(" "));
    // created the map
    var phoneBookMap = new Map(phoneBookArray);

    nameQueries.map(name => {
        if(phoneBookMap.has(name)){
            console.log(name + "=" + phoneBookMap.get(name));
        } else {
            console.log("Not found");
        }
    });
}

processData("3\nsam 99912222\ntom 11122222\nharry 12299933\nsam\nedward\nharry");