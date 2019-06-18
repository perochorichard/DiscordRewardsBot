class Key {
    constructor(points) {
        this.targetPoints = points;
        this.id = randomKey();
    }
}

randomKey = () => {
    let key = '';
    for (let i = 0; i < 4; i++) {
        key += randomSequence() + "-";
    }
    key = key.substr(0, key.length - 1);
    return key;
}

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