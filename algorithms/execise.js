

// Generate random number
const randomNumberGenerator = (min, max) => Math.floor(Math.random() * (max - min) + min);

// Generate random hex code
const generateCode = (hexCode, count) => {
    let hex = "";
    for(let counter = 0; counter < count; counter++){
        hex += (hexCode[randomNumberGenerator(0, hexCode.length)]);
    }
    return hex;
};

// RGB generator
const rgbColorGenerator = () =>{
    const MAX_LENGTH = 226;
    const MIN_LENGTH = 0;
    let rgb = "";

    for(let count = 0; count < 3; count++){
        randomValue = randomNumberGenerator(MIN_LENGTH, MAX_LENGTH);
        rgb += randomValue + ", ";
    }
    return rgb.slice(0, -2);
}


// HEX Code generator;
const hexCodeGenerator = (count = 6) =>{
    const hexCode = ['0','1','2','3','4','5','6','7','8', '9', 'a', 'b', 'c', 'd', 'e'];
    let hex = generateCode(hexCode, count);
    return `#${hex}`;
}

// console.log(hexCodeGenerator(7));

// Rgb to Hex
const rgbToHex = (rgb) =>{
    rgbColor = rgb.split(',')
    let rHex = parseInt(rgbColor[0]).toString(16).padStart(2, '0');
    let gHex = parseInt(rgbColor[1]).toString(16).padStart(2, '0');
    let bHex = parseInt(rgbColor[2]).toString(16).padStart(2, '0');

    return `#${rHex}${gHex}${bHex}`
}



// console.log(parseInt('c', 16))

// Hex to rgb

const hexToRgb = (hex) => {
    let hexCode = hex.slice(1);
    hexArr = hexCode.match(/.{1,2}/g);
    let hexColor = "";
    for(let count = 0; count < hexArr.length; count++){
        hexColor += parseInt(hexArr[count], 16) + ",";
    }
    return hexColor.slice(0, -2);
}

console.log(rgbToHex(rgbColorGenerator()));
console.log(hexToRgb(hexCodeGenerator()))
