/**
 * Key object
 */
class Key {
    constructor(points) {
        this.targetPoints = points;
        this.id = randomKey();
    }
}

/**
 * chains together 4 sub-keys split by '-'
 */
randomKey = () => {
    let key = '';
    for (let i = 0; i < 4; i++) {
        key += randomSequence() + "-";
    }
    key = key.substr(0, key.length - 1);
    return key;
}

/**
 * generates random sub-key of 5 alphanumeric characters
 */
randomSequence = () => {
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let sequenceLength = 5;
    let sequence = '';
    for (let i = 0; i < sequenceLength; i++) {
        sequence += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return sequence;
}

module.exports = Key;