import uuidv1 from 'uuid'

export function getUniqueId() {
    return uuidv1().toString();
}

export function getRandomInteger(max) {
    return Math.floor(Math.random() * max);
}

export function replaceCharacter(text, index, replacement) {
    return text.substr(0, index) + replacement + text.substr(index + replacement.length);
}
const ALPHABET = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export function getAlphabet() {
    return ALPHABET;
}

export function shuffle(value) {
    let valueSplit = value.split("");
    let valueLength = valueSplit.length;

    for (var i = valueLength - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = valueSplit[i];
        valueSplit[i] = valueSplit[j];
        valueSplit[j] = tmp;
    }
    return valueSplit.join("");
}