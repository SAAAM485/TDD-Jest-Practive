function capitalize(string) {
    let capitalized = string.toLowerCase();
    capitalized = capitalized[0].toUpperCase() + capitalized.slice(1);
    return capitalized;
}

function reverseString(string) {
    let reversed = string.split("").reverse().join("");
    return reversed;
}

const calculator = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
    divide(a, b) {
        return a / b;
    },
    multiply(a, b) {
        return a * b;
    },
};

function caesarCipher(string, shifts) {
    const array = string.split("");
    let encoded = "";
    array.forEach((char) => {
        if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) {
            encoded += String.fromCharCode(upperCaseShift(char, shifts));
        } else if (char.charCodeAt() >= 97 && char.charCodeAt() <= 122) {
            encoded += String.fromCharCode(lowerCaseShift(char, shifts));
        } else {
            encoded += char;
        }
    });
    return encoded;
}

function upperCaseShift(char, shifts) {
    let charCode = char.charCodeAt();
    if (90 - charCode < shifts) {
        charCode = shifts - (90 - charCode) + 59;
        return charCode;
    } else if (charCode + shifts < 60) {
        charCode = 91 + (charCode + shifts) - 60;
        return charCode;
    } else {
        charCode = charCode + shifts;
        return charCode;
    }
}

function lowerCaseShift(char, shifts) {
    let charCode = char.charCodeAt();
    if (122 - charCode < shifts) {
        charCode = shifts - (122 - charCode) + 96;
        return charCode;
    } else if (charCode + shifts < 97) {
        charCode = 123 + (charCode + shifts) - 97;
        return charCode;
    } else {
        charCode = charCode + shifts;
        return charCode;
    }
}

function analyzeArray(array) {
    const avg =
        array.reduce(
            (accumulator, currentValue) => accumulator + currentValue
        ) / array.length;
    let minimum = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < minimum) {
            minimum = array[i];
        }
    }
    let maximum = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maximum) {
            maximum = array[i];
        }
    }

    const object = {
        average: avg,
        min: minimum,
        max: maximum,
        length: array.length,
    };

    return object;
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
