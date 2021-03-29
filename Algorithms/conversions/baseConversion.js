class Convertion {
    #base;
    #convertedType;
    #number;

    constructor(base, type, number) {
        this.#base = base;
        this.#convertedType = type;
        this.#number = number;
    }
    // Validate Input;
    validateBase() {
        let isValid = true;
        while (this.#number > 0) {
            if (this.#number % 10 > this.#base - 1) {
                return false;
            }
            this.#number = Math.trunc(this.#number / 10);
        }
        return isValid;
    }

    // Convert from any base to base ten;
    convertToDecimal() {
        let decimal = 0;
        let remainder;
        let power = 0;
        if (this.validateBase() !== true) throw ("Number must be in it base");

        while (this.#number != 0) {
            remainder = this.#number % 10;
            decimal += Math.pow(this.#base, power++) * remainder;
            this.#number = Math.trunc(this.#number / 10);
        }
        return decimal;


    }
    // Convert base ten to any base;
    // Convert from one base to another;
}


const convert = new Convertion(2, 10, 111);
console.log(convert.convertToDecimal())