function processData(input) {
    let newInput = input.split('\n').slice(1);
    newInput.forEach((str) => {
        let evens = "", odds = "";
        for(let i = 0; i < str.length; i++) {
            i % 2 ? odds += str[i] : evens += str[i];
        };
        console.log(`${evens} ${odds}`);
    });
};