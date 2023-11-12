function createAbbreviation(str) {
    let words = str.split(' ');
    let abbreviation = '';

    for (const word of words) {
        if (word.length > 0) {
            abbreviation += word[0].toUpperCase();
        }
    }

    return abbreviation;
}

let str = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, laborum, eveniet eos non consequuntur blanditiis necessitatibus aliquam atque laudantium totam quam vitae accusamus placeat sunt, incidunt molestiae soluta doloremque accusantium.";
let abbreviation = createAbbreviation(str);

console.log(abbreviation);
